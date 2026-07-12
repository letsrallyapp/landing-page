# Let's Rally — Landing Page

A Vite + React + TypeScript landing page with a Supabase-backed email waitlist,
deployed to GitHub Pages.

## Getting Started

1. Run `npm install`
2. Copy `.env.example` to `.env.local` and fill in your Supabase credentials
3. Run `npm run dev`

## Waitlist (Supabase)

The waitlist form (`src/components/WaitlistSection.tsx`) writes emails directly
to a Supabase table from the browser. The anon/public key is safe to ship in the
client — access is restricted by Row Level Security (RLS).

### 1. Create the table

In the Supabase dashboard, open the **SQL Editor** and run:

```sql
create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  created_at timestamptz not null default now()
);

-- Turn on Row Level Security.
alter table public.waitlist enable row level security;

-- Allow anyone (anon key) to add themselves to the waitlist, but nothing else.
-- No select/update/delete policy means the public cannot read the email list.
create policy "Public can join the waitlist"
  on public.waitlist
  for insert
  to anon
  with check (true);
```

The form treats a unique-violation (duplicate email) as a successful signup, so
users who re-submit still see the confirmation.

### 2. Set the environment variables

Find these under **Settings → API** in your Supabase project:

| Variable                 | Value                          |
| ------------------------ | ------------------------------ |
| `VITE_SUPABASE_URL`      | Project URL                    |
| `VITE_SUPABASE_ANON_KEY` | `anon` `public` API key        |

- **Local:** put them in `.env.local`.
- **Production:** add both as GitHub Actions secrets (see below).

## Deploying to GitHub Pages

Deployment is automated via `.github/workflows/deploy.yml`, which builds the site
and publishes it on every push to `main`.

One-time setup:

1. **Repo → Settings → Pages → Build and deployment → Source:** select
   **GitHub Actions**.
2. **Repo → Settings → Secrets and variables → Actions → New repository secret:**
   add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`. These are inlined into
   the bundle at build time, so they must be present for the waitlist to work in
   production.

The site is served from `https://letsrallyapp.github.io/landing-page/`. The base
path is configured in `vite.config.ts` (`base: '/landing-page/'`). If you move to
a custom domain or a `letsrallyapp.github.io` user repo, change `base` to `'/'`.
