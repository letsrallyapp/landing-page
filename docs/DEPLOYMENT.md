# Deployment Guide — Supabase + Vercel

A step-by-step walkthrough to take this landing page live with a working email
waitlist. Do the **Supabase** part first (it gives you the keys), then **Vercel**.

Estimated time: ~15 minutes. You'll need a GitHub account (you have one), a
Supabase account, and a Vercel account — both are free to sign up.

---

## Part 1 — Supabase (the waitlist database)

### 1.1 Create a project

1. Go to [supabase.com](https://supabase.com) and sign in (you can sign in with
   GitHub).
2. Click **New project**.
3. Pick your organization, give the project a name (e.g. `letsrally-waitlist`),
   and set a database password (save it in a password manager — you won't need
   it for this guide, but you'll want it later).
4. Choose the region closest to your users and click **Create new project**.
5. Wait ~2 minutes for it to finish provisioning.

### 1.2 Create the waitlist table

1. In the left sidebar, open **SQL Editor**.
2. Click **New query**, paste the following, and click **Run**:

   ```sql
   create table if not exists public.waitlist (
     id uuid primary key default gen_random_uuid(),
     email text not null unique,
     created_at timestamptz not null default now()
   );

   -- Turn on Row Level Security.
   alter table public.waitlist enable row level security;

   -- Allow anyone (publishable key → anon role) to add themselves, but nothing
   -- else. With no select/update/delete policy, the public cannot read the list.
   create policy "Public can join the waitlist"
     on public.waitlist
     for insert
     to anon
     with check (true);
   ```

3. You should see "Success. No rows returned." That's expected.

> **Why this is safe:** the app ships the **publishable** key in the browser.
> This key maps to the `anon` role, and Row Level Security means it can *only*
> insert rows — it cannot read, edit, or delete anyone's email. You read the list
> from the Supabase dashboard, which uses the privileged **secret** key that
> never leaves Supabase.

### 1.3 Copy your API keys

1. In the sidebar, go to **Project Settings** (gear icon) → **API Keys**.
2. Copy these two values — you'll paste them into Vercel in Part 2:
   - **Project URL** (under **Settings → API**, or **Data API**) → this is
     `VITE_SUPABASE_URL` (looks like `https://abcdefgh.supabase.co`)
   - **Publishable key** → this is `VITE_SUPABASE_PUBLISHABLE_KEY`
     (starts with `sb_publishable_...`)

> **Do not** copy a **secret key** (`sb_secret_...`) — those are for server-side
> code only and must never go in the frontend or Vercel's build-time env for this
> app. This client only needs the publishable key.

Keep this tab open, or paste both into a scratch note for the next part.

---

## Part 2 — Vercel (hosting)

### 2.1 Import the repository

1. Go to [vercel.com](https://vercel.com) and sign in **with GitHub**.
2. Click **Add New… → Project**.
3. Find `letsrallyapp/landing-page` in the list and click **Import**.
   - If you don't see it, click **Adjust GitHub App Permissions** and grant
     Vercel access to the repo (or the whole org).

### 2.2 Configure the project

Vercel auto-detects Vite, so the build settings are already correct (Framework:
**Vite**, Build Command: `npm run build`, Output Directory: `dist`). You don't
need to change them — `vercel.json` pins them too.

Before clicking Deploy, expand **Environment Variables** and add both keys from
Part 1.3:

| Name                            | Value                                       |
| ------------------------------- | ------------------------------------------- |
| `VITE_SUPABASE_URL`             | your Supabase Project URL                   |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | your Supabase publishable key (`sb_publishable_...`) |

Leave the environment set to **all** (Production, Preview, Development) so
preview deploys work too.

> **Important:** these are inlined into the JavaScript bundle at *build* time. If
> you add or change them later, you must trigger a new deploy (see 2.4) for the
> change to take effect.

### 2.3 Deploy

Click **Deploy**. The first build takes ~1–2 minutes. When it finishes you'll
get a live URL like `https://landing-page-xxxx.vercel.app`.

### 2.4 How future deploys work

- **Every push to `main`** → automatic production deploy.
- **Every pull request** → its own preview URL, so you can review changes live
  before merging.
- To re-run a build without a code change (e.g. after editing env vars): in the
  Vercel dashboard go to **Deployments → ⋯ on the latest → Redeploy**.

---

## Part 3 — Verify it works

1. Open your live Vercel URL.
2. Scroll to the waitlist section and submit a test email.
3. You should see the "You're on the list" confirmation.
4. Back in Supabase → **Table Editor → waitlist**, you should see the row.

If the form shows an error instead:
- **"Waitlist is not configured yet"** → the env vars weren't set, or you didn't
  redeploy after adding them. Check Part 2.2, then redeploy (Part 2.4).
- **"Something went wrong"** → usually the table or RLS policy is missing.
  Re-run the SQL in Part 1.2.
- Open the browser dev tools **Console/Network** tab to see the exact error from
  Supabase.

---

## Part 4 — Custom domain (optional)

1. In the Vercel project, go to **Settings → Domains**.
2. Enter your domain (e.g. `letsrally.app`) and click **Add**.
3. Follow Vercel's instructions to point your DNS at them (either change your
   nameservers, or add the `A` / `CNAME` records they show).
4. HTTPS is provisioned automatically once DNS propagates (usually minutes, up to
   a few hours).

No code changes are needed for a custom domain — the app already works from any
root path.

---

## Exporting your waitlist later

When you're ready to email everyone at launch, in Supabase go to **Table
Editor → waitlist**, then use the **Export** menu to download a CSV, or run a
`select email from waitlist order by created_at;` query in the SQL Editor.
