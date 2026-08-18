import React, { useEffect } from 'react';

const SUPPORT_EMAIL = 'support@letsrallyapp.com';

/**
 * Account & data deletion instructions at a stable, publicly-reachable URL
 * (LET-125-adjacent — Google Play's Data safety section requires this even
 * though deletion itself is in-app only, per rally-mobile's delete-account
 * flow). Must work for someone who doesn't have the app installed.
 */
export function DeleteAccountPage() {
  useEffect(() => {
    document.title = "Delete Your Account · Let's Rally";
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#151515] font-sans text-[#f8f2e9]">
      <header className="border-b border-white/10">
        <div className="mx-auto flex h-20 max-w-3xl items-center justify-between px-5 sm:px-8">
          <a
            href="/"
            className="group flex items-center gap-2.5 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#ff735f]"
            aria-label="Let's Rally home"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[#ff735f] font-display text-lg font-black leading-none text-[#151515]">
              R
            </span>
            <span className="font-display text-xl font-extrabold tracking-tight">
              let’s rally
            </span>
          </a>
          <a
            href="/"
            className="rounded-sm text-sm font-semibold text-[#f8f2e9]/70 transition-colors hover:text-[#ff735f] focus:outline-none focus:ring-2 focus:ring-[#ff735f]"
          >
            ← Home
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-12 sm:px-8">
        <h1 className="font-display text-4xl font-black tracking-tight sm:text-5xl">
          Delete Your Account
        </h1>
        <p className="mt-6 text-base leading-7 text-[#f8f2e9]/85">
          You can permanently delete your Let's Rally account and the data
          associated with it at any time. Deletion is immediate and cannot be
          undone.
        </p>

        <section className="mt-10">
          <h2 className="font-display text-xl font-extrabold tracking-tight">
            Option 1: Delete in the app
          </h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-base leading-7 text-[#f8f2e9]/80">
            <li>Open the Let's Rally app and sign in.</li>
            <li>
              Go to <strong className="text-[#f8f2e9]">Settings</strong>.
            </li>
            <li>
              Scroll down and tap <strong className="text-[#f8f2e9]">Delete Account</strong>.
            </li>
            <li>
              Confirm with the verification code sent to your account email.
              Your account is deleted as soon as it's verified.
            </li>
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-xl font-extrabold tracking-tight">
            Option 2: Request deletion without the app
          </h2>
          <p className="mt-3 text-base leading-7 text-[#f8f2e9]/80">
            If you no longer have the app installed or can't sign in, email{' '}
            <a
              href={`mailto:${SUPPORT_EMAIL}?subject=Account%20deletion%20request`}
              className="font-semibold text-[#ff735f] transition-colors hover:text-[#ff927f]"
            >
              {SUPPORT_EMAIL}
            </a>{' '}
            from the address on your account and ask us to delete it. We'll
            verify it's you and process the request within a few business
            days.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-xl font-extrabold tracking-tight">
            What gets deleted
          </h2>
          <ul className="mt-3 space-y-2 text-base leading-7 text-[#f8f2e9]/80">
            {[
              'Your profile, photo, and interests',
              'Rallies you host, deleted permanently',
              'Messages you’ve sent',
              'Your membership in rallies you’ve joined',
            ].map((line) => (
              <li key={line} className="flex gap-3">
                <span className="text-[#ff735f]">•</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-base leading-7 text-[#f8f2e9]/80">
            Some information may be retained for a limited period where
            required by law or to resolve disputes, consistent with our{' '}
            <a
              href="/privacy"
              className="font-semibold text-[#ff735f] transition-colors hover:text-[#ff927f]"
            >
              Privacy Policy
            </a>
            .
          </p>
        </section>

        <p className="mt-12 border-t border-white/15 pt-8 text-sm text-[#f8f2e9]/55">
          Questions? Contact us at{' '}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="font-semibold text-[#ff735f] transition-colors hover:text-[#ff927f]"
          >
            {SUPPORT_EMAIL}
          </a>
          .
        </p>
      </main>
    </div>
  );
}
