import React, { useEffect } from 'react';
import type { LegalDocument } from '../lib/legalContent';
import { LEGAL_DOCUMENTS } from '../lib/legalContent';

type LegalPageProps = { doc: LegalDocument };

/**
 * Renders a published legal document (Terms / Privacy / EULA) at a stable URL.
 * The URL is stable; the content is versioned — the document states its version
 * and effective date, which the mobile app records on consent (LET-120). A
 * visible DRAFT banner marks the placeholder text as pending legal review.
 */
export function LegalPage({ doc }: LegalPageProps) {
  useEffect(() => {
    document.title = `${doc.title} · Let's Rally`;
  }, [doc.title]);

  const others = (Object.values(LEGAL_DOCUMENTS) as LegalDocument[]).filter(
    (d) => d.id !== doc.id,
  );

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
        <div
          role="note"
          className="mb-8 rounded-lg border border-[#ff735f]/40 bg-[#ff735f]/10 px-4 py-3 text-sm text-[#f8f2e9]/90"
        >
          <strong className="font-extrabold text-[#ff735f]">DRAFT</strong> —
          this document is a placeholder pending legal review and is not the
          final policy.
        </div>

        <h1 className="font-display text-4xl font-black tracking-tight sm:text-5xl">
          {doc.title}
        </h1>
        <p className="mt-3 text-sm text-[#f8f2e9]/55">
          Version {doc.version} · Effective {doc.effectiveDate}
        </p>

        <p className="mt-8 text-base leading-7 text-[#f8f2e9]/85">{doc.intro}</p>

        <div className="mt-8 space-y-8">
          {doc.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-xl font-extrabold tracking-tight">
                {section.heading}
              </h2>
              <div className="mt-3 space-y-3">
                {section.paragraphs.map((p, i) => (
                  <p key={i} className="text-base leading-7 text-[#f8f2e9]/80">
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <nav className="mt-14 border-t border-white/15 pt-8">
          <p className="text-sm font-semibold text-[#f8f2e9]/55">
            Other policies
          </p>
          <div className="mt-3 flex flex-wrap gap-4">
            {others.map((d) => (
              <a
                key={d.id}
                href={`/${d.id}`}
                className="rounded-sm text-sm font-semibold text-[#ff735f] transition-colors hover:text-[#ff927f] focus:outline-none focus:ring-2 focus:ring-[#ff735f]"
              >
                {d.title}
              </a>
            ))}
          </div>
        </nav>
      </main>
    </div>
  );
}
