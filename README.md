# Let's Rally — Landing Page

A Vite + React + TypeScript landing page for the Let's Rally app, deployed to
Vercel.

## Getting Started

1. Run `npm install`
2. Run `npm run dev`

No environment variables are required (see `.env.example` for the optional
ones).

## Store links

The App Store / Google Play buttons (`src/components/StoreButtons.tsx`) build
their URLs from `src/lib/invite.ts` (`appStoreUrl()` and `playStoreUrl()`), the
same helpers the invite page uses. On phones, the header's **Get the app**
button links straight to the visitor's store.

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
2. Deploy. Every push to `main` redeploys automatically; pull requests get
   preview URLs.
