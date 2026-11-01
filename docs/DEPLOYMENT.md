# Deployment Guide — Vercel

A step-by-step walkthrough to take this landing page live on Vercel.

Estimated time: ~5 minutes. You'll need a GitHub account and a Vercel account
(free to sign up).

---

## Part 1 — Import and deploy

### 1.1 Import the repository

1. Go to [vercel.com](https://vercel.com) and sign in **with GitHub**.
2. Click **Add New… → Project**.
3. Find `letsrallyapp/landing-page` in the list and click **Import**.
   - If you don't see it, click **Adjust GitHub App Permissions** and grant
     Vercel access to the repo (or the whole org).

### 1.2 Configure the project

Vercel auto-detects Vite, so the build settings are already correct (Framework:
**Vite**, Build Command: `npm run build`, Output Directory: `dist`). You don't
need to change them — `vercel.json` pins them too.

No environment variables are required. Optionally:

| Name                    | Value                                                     |
| ----------------------- | --------------------------------------------------------- |
| `VITE_IOS_APP_STORE_ID` | Overrides the App Store id baked into `src/lib/invite.ts` |

> **Important:** `VITE_*` variables are inlined into the JavaScript bundle at
> *build* time. If you add or change one later, trigger a new deploy (see 1.4).

### 1.3 Deploy

Click **Deploy**. The first build takes ~1–2 minutes. When it finishes you'll
get a live URL like `https://landing-page-xxxx.vercel.app`.

### 1.4 How future deploys work

- **Every push to `main`** → automatic production deploy.
- **Every pull request** → its own preview URL, so you can review changes live
  before merging.
- To re-run a build without a code change (e.g. after editing env vars): in the
  Vercel dashboard go to **Deployments → ⋯ on the latest → Redeploy**.

---

## Part 2 — Verify it works

1. Open your live Vercel URL.
2. Click the **App Store** and **Google Play** buttons — each should open the
   Let's Rally store listing.
3. On a phone, the header's **Get the app** button should go straight to that
   phone's store.
4. Paste the URL into a link previewer (Slack, iMessage, or
   [opengraph.xyz](https://www.opengraph.xyz)) and check the share card image.

---

## Part 3 — Custom domain (optional)

1. In the Vercel project, go to **Settings → Domains**.
2. Enter your domain (e.g. `letsrallyapp.com`) and click **Add**.
3. Follow Vercel's instructions to point your DNS at them (either change your
   nameservers, or add the `A` / `CNAME` records they show).
4. HTTPS is provisioned automatically once DNS propagates (usually minutes, up to
   a few hours).

The Open Graph tags in `index.html` use absolute `https://www.letsrallyapp.com`
URLs — update them if the production domain changes.
