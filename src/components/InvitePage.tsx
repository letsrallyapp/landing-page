import React, { useEffect, useMemo, useState } from 'react';
import { ArrowUpRightIcon } from 'lucide-react';
import {
  appStoreUrl,
  detectPlatform,
  inviteCodeFromPath,
  playStoreUrl,
  writeClipboardSentinel,
  type Platform,
} from '../lib/invite';

// The web page a non-user lands on when they open an invite link without the
// app installed (LET-78). Detects the platform, carries the code across the
// install boundary, and sends the user to the right store.

type StoreLink = { label: string; href: string };

export function InvitePage() {
  const code = useMemo(
    () => inviteCodeFromPath(window.location.pathname),
    [],
  );

  const platform: Platform = useMemo(
    () =>
      detectPlatform(
        typeof navigator !== 'undefined' ? navigator.userAgent : '',
        typeof navigator !== 'undefined' ? navigator.maxTouchPoints : 0,
      ),
    [],
  );

  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    if (!code) return;

    let cancelled = false;

    async function go() {
      if (platform === 'android') {
        setRedirecting(true);
        window.location.replace(playStoreUrl(code as string));
        return;
      }

      if (platform === 'ios') {
        // Best-effort: drop the sentinel on the clipboard so the app can pick up
        // the code on first launch (LET-67 / LET-68). Manual entry is the floor.
        await writeClipboardSentinel(code as string);
        if (cancelled) return;
        const url = appStoreUrl();
        if (url) {
          setRedirecting(true);
          window.location.replace(url);
        }
        // No App Store id configured yet → fall through to the get-the-app page.
        return;
      }
      // Desktop / other → get-the-app page, no redirect.
    }

    void go();

    return () => {
      cancelled = true;
    };
  }, [code, platform]);

  const storeLinks: StoreLink[] = useMemo(() => {
    const links: StoreLink[] = [];
    if (code) links.push({ label: 'Get Rally on Android', href: playStoreUrl(code) });
    const ios = appStoreUrl();
    if (ios) links.push({ label: 'Get Rally on iPhone', href: ios });
    return links;
  }, [code]);

  return (
    <div className="grid min-h-screen w-full place-items-center bg-[#151515] px-5 py-16 font-sans text-[#f8f2e9]">
      <main className="w-full max-w-md text-center">
        <div className="mx-auto flex items-center justify-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[#ff735f] font-display text-lg font-black leading-none text-[#151515]">
            R
          </span>
          <span className="font-display text-xl font-extrabold tracking-tight">
            let’s rally
          </span>
        </div>

        {code ? (
          <>
            <p className="mt-10 text-xs font-extrabold uppercase tracking-[0.18em] text-[#ff735f]">
              You’ve been invited
            </p>
            <h1 className="mt-3 font-display text-4xl font-black leading-[0.95] tracking-[-0.04em] sm:text-5xl">
              Let’s Rally
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-[#f8f2e9]/73">
              {redirecting
                ? 'Taking you to the app store…'
                : 'Grab the app to join your friend and start making plans.'}
            </p>

            {redirecting && (
              <div
                className="mx-auto mt-8 h-6 w-6 animate-spin rounded-full border-2 border-white/20 border-t-[#ff735f] motion-reduce:animate-none"
                role="status"
                aria-label="Redirecting"
              />
            )}

            <div className="mt-8 flex flex-col items-stretch gap-3">
              {storeLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center justify-center gap-1.5 rounded-sm bg-[#ff735f] px-5 py-3.5 text-sm font-extrabold text-[#151515] transition-colors hover:bg-[#ff927f] focus:outline-none focus:ring-2 focus:ring-[#ff735f] focus:ring-offset-2 focus:ring-offset-[#151515]"
                >
                  {link.label}
                  <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>

            <p className="mt-6 text-sm leading-relaxed text-[#f8f2e9]/55">
              After you install and sign up, you’ll be connected automatically.
              If not, enter this invite code in the app:
            </p>
            <p className="mt-2 select-all font-mono text-lg font-semibold tracking-[0.2em] text-[#f8f2e9]">
              {code}
            </p>
          </>
        ) : (
          <>
            <h1 className="mt-10 font-display text-4xl font-black leading-[0.95] tracking-[-0.04em] sm:text-5xl">
              Get Let’s Rally
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-[#f8f2e9]/73">
              That invite link looks incomplete, but you can still grab the app
              and get started.
            </p>
            <div className="mt-8 flex flex-col items-stretch gap-3">
              {playStoreLinkOnly()}
            </div>
            <a
              href="/"
              className="mt-8 inline-block rounded-sm text-sm font-semibold text-[#f8f2e9]/70 underline decoration-white/30 underline-offset-4 transition-colors hover:text-[#ff735f] focus:outline-none focus:ring-2 focus:ring-[#ff735f]"
            >
              Back to letsrallyapp.com
            </a>
          </>
        )}
      </main>
    </div>
  );
}

// Store buttons for the no-/invalid-code case (no code to carry).
function playStoreLinkOnly() {
  const ios = appStoreUrl();
  const androidHref = `https://play.google.com/store/apps/details?id=com.letsrallyapp.mobile`;
  const links: StoreLink[] = [
    { label: 'Get Rally on Android', href: androidHref },
  ];
  if (ios) links.push({ label: 'Get Rally on iPhone', href: ios });
  return links.map((link) => (
    <a
      key={link.href}
      href={link.href}
      className="inline-flex items-center justify-center gap-1.5 rounded-sm bg-[#ff735f] px-5 py-3.5 text-sm font-extrabold text-[#151515] transition-colors hover:bg-[#ff927f] focus:outline-none focus:ring-2 focus:ring-[#ff735f] focus:ring-offset-2 focus:ring-offset-[#151515]"
    >
      {link.label}
      <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
    </a>
  ));
}
