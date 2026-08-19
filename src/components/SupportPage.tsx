import React, { useEffect } from 'react';

const SUPPORT_EMAIL = 'support@letsrallyapp.com';

const FAQS: { question: string; answer: React.ReactNode }[] = [
  {
    question: 'How do I sign in?',
    answer:
      "Let's Rally uses passwordless sign-in. Enter your email on the login screen and we'll send you a 6-digit code — no password to remember.",
  },
  {
    question: 'How do I create a rally or RSVP to one?',
    answer:
      'Tap the create button on the Home tab to start a rally, invite friends or a group, and set a time and place. To respond to an invite, open the rally and tap Going or Maybe.',
  },
  {
    question: "How do I leave a rally's chat or turn off its notifications?",
    answer:
      "Open the rally's chat, tap the header, and use Mute to silence just that thread. Rally chats close automatically a set number of hours after the event starts.",
  },
  {
    question: 'How do I manage what I get notified about?',
    answer: (
      <>
        Go to <strong className="text-[#f8f2e9]">Settings → Notifications</strong>{' '}
        in the app to turn individual notification types on or off.
      </>
    ),
  },
  {
    question: 'How do I block or report someone?',
    answer:
      "Open their profile and use the ⋯ menu to block or report them. Blocking removes any friendship or pending requests between you and hides you from each other's search and suggestions.",
  },
  {
    question: 'How do I delete my account?',
    answer: (
      <>
        In the app, go to Settings and tap Delete Account. Full instructions,
        including how to request deletion without the app, are on the{' '}
        <a
          href="/delete-account"
          className="font-semibold text-[#ff735f] transition-colors hover:text-[#ff927f]"
        >
          account deletion page
        </a>
        .
      </>
    ),
  },
];

/**
 * App Store / Play Console "Support URL" destination — a stable, publicly
 * reachable page for someone who needs help and doesn't have the app open
 * (or hasn't installed it yet). Keep the FAQ in sync with what the app
 * actually does; the contact email is the fallback for anything not covered.
 */
export function SupportPage() {
  useEffect(() => {
    document.title = "Support · Let's Rally";
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
          Support
        </h1>
        <p className="mt-6 text-base leading-7 text-[#f8f2e9]/85">
          Need help with Let's Rally? Check the answers below, or email us
          directly and we'll get back to you.
        </p>

        <section className="mt-10">
          <div className="divide-y divide-white/10 border-y border-white/10">
            {FAQS.map((faq) => (
              <div key={faq.question} className="py-6">
                <h2 className="font-display text-lg font-extrabold tracking-tight">
                  {faq.question}
                </h2>
                <p className="mt-2 text-base leading-7 text-[#f8f2e9]/80">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-xl font-extrabold tracking-tight">
            Still need help?
          </h2>
          <p className="mt-3 text-base leading-7 text-[#f8f2e9]/80">
            Email{' '}
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="font-semibold text-[#ff735f] transition-colors hover:text-[#ff927f]"
            >
              {SUPPORT_EMAIL}
            </a>{' '}
            and describe what's going on — we typically reply within a few
            business days.
          </p>
        </section>
      </main>
    </div>
  );
}
