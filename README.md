# Let's Rally — Landing Page

A Vite + React + TypeScript landing page with a Loops-backed email waitlist,
deployed to Vercel.

## Getting Started

1. Run `npm install`
2. Copy `.env.example` to `.env.local` and fill in your Loops form endpoint
3. Run `npm run dev`

## Waitlist (Loops)

The waitlist form (`src/components/WaitlistSection.tsx`) submits emails directly
to a [Loops](https://loops.so) **form endpoint** from the browser. Loops stores
your contacts and lets you email them at launch — and, unlike a free-tier
database, it never pauses for inactivity.

The form endpoint URL is safe to ship in the client: it only accepts contact
sign-ups and cannot read your list. There is no secret key in the frontend.

### 1. Create a Loops form

1. In [Loops](https://app.loops.so), go to **Forms → New form** (an "API only"
   form is fine — you don't have to use Loops' hosted form UI).
2. Open the form's **Settings** tab and copy the **Form Endpoint URL**. It looks
   like `https://app.loops.so/api/newsletter-form/<formId>`.

Re-submitting an existing contact still returns success, so users who sign up
twice simply see the confirmation again — no duplicate handling needed.

### 2. Set the environment variable

| Variable                   | Value                                             |
| -------------------------- | ------------------------------------------------- |
| `VITE_LOOPS_FORM_ENDPOINT` | The Loops Form Endpoint URL from step 1           |

- **Local:** put it in `.env.local`.
- **Production:** add it as an environment variable in the Vercel project (see
  the deployment guide below).

## Deploying to Vercel

Vercel auto-detects Vite and builds on every push once the GitHub repo is
connected — no workflow file required. Build settings are pinned in
`vercel.json`.

The full click-by-click walkthrough is in **[`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md)**.
The short version:

1. Import the repo at [vercel.com/new](https://vercel.com/new).
2. Add `VITE_LOOPS_FORM_ENDPOINT` as an environment variable (it's inlined into
   the bundle at build time).
3. Deploy. Every push to `main` redeploys automatically; pull requests get
   preview URLs.
