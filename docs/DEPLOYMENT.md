# Deployment Guide — Loops + Vercel

A step-by-step walkthrough to take this landing page live with a working email
waitlist. Do the **Loops** part first (it gives you the form endpoint), then
**Vercel**.

Estimated time: ~10 minutes. You'll need a GitHub account (you have one), a
Loops account, and a Vercel account — both are free to sign up.

> **Why Loops?** A landing page waitlist gets occasional writes and no reads, so
> a free-tier database (like Supabase) pauses itself for inactivity and has to be
> manually restored. Loops is built for collecting contacts and emailing them —
> it never pauses, and it handles the "we're live" announcement you'll send these
> people later.

---

## Part 1 — Loops (the waitlist)

### 1.1 Create an account and a form

1. Go to [loops.so](https://loops.so) and sign up (you can sign in with Google).
2. In the dashboard sidebar, open **Forms**, then click **New form**.
3. Give it a name (e.g. `Landing page waitlist`). You don't need to design a
   hosted form — this app has its own form UI and only needs the endpoint.

### 1.2 Copy the form endpoint

1. Open the form's **Settings** tab.
2. Copy the **Form Endpoint URL**. It looks like:

   ```
   https://app.loops.so/api/newsletter-form/abc123def456
   ```

This is the only value the app needs — it's `VITE_LOOPS_FORM_ENDPOINT` in Part 2.

> **Why this is safe:** the form endpoint only *accepts* sign-ups. It cannot read
> your contact list, so it's fine to ship in the browser — there is no secret key
> in the frontend. You view and export contacts from the Loops dashboard, which
> is behind your Loops login.

Keep this tab open, or paste the URL into a scratch note for the next part.

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

Before clicking Deploy, expand **Environment Variables** and add the endpoint
from Part 1.2:

| Name                       | Value                                       |
| -------------------------- | ------------------------------------------- |
| `VITE_LOOPS_FORM_ENDPOINT` | your Loops Form Endpoint URL                |

Leave the environment set to **all** (Production, Preview, Development) so
preview deploys work too.

> **Important:** this is inlined into the JavaScript bundle at *build* time. If
> you add or change it later, you must trigger a new deploy (see 2.4) for the
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
4. Back in Loops → **Audience** (or **Contacts**), you should see the new
   contact. It may take a few seconds to appear.

If the form shows an error instead:
- **"Waitlist is not configured yet"** → the env var wasn't set, or you didn't
  redeploy after adding it. Check Part 2.2, then redeploy (Part 2.4).
- **"Too many attempts"** → Loops rate-limits sign-ups per IP address. Wait a
  minute and try again.
- **"Something went wrong"** → double-check the endpoint URL was copied in full.
  Open the browser dev tools **Console/Network** tab to see the exact response
  from Loops.

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

## Emailing your waitlist later

This is where Loops pays off. When you're ready to announce launch, create a
**Campaign** in Loops, target the contacts who joined through the form, and send.
You can also set up a **Loop** (automation) so new sign-ups get a welcome email
automatically. No CSV export or separate email tool required.
