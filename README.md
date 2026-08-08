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

## Invite links (`/invite/<code>`)

`/invite/<code>` is the page a **non-user** lands on when they open a Rally
invite link without the app installed (LET-78). When the app _is_ installed,
Universal/App Links open it directly and this page never renders.

Its only job is to carry the invite code across the install boundary and send
the visitor to the right store:

- **Android** → Play Store with the install referrer `rally_invite=<code>`.
- **iOS** → writes the `rally-invite:<code>` clipboard sentinel (best-effort),
  then redirects to the App Store. Manual entry of the shown code is the
  guaranteed fallback.
- **Desktop / other** → a "get the app" page with store links.

The code format (8-char Crockford base32) and the referrer/clipboard carriers
must stay in sync with the app's `src/lib/inviteAttribution.ts`. See
`src/lib/invite.ts`.

| Variable                | Value                                                            |
| ----------------------- | --------------------------------------------------------------- |
| `VITE_IOS_APP_STORE_ID` | Numeric App Store id (`apps.apple.com/app/id<ID>`), digits only |

`VITE_IOS_APP_STORE_ID` is optional — the current App Store id is baked into
`src/lib/invite.ts`, so set this only to override it. If neither is a valid id,
iOS invite links still set the clipboard sentinel and show the "get the app"
page instead of redirecting to the App Store.

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
