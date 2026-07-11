import React from 'react';
import { StoreLinks } from './StoreLinks';
export function Footer() {
  return (
    <footer className="bg-[#151515] pb-8 text-[#f8f2e9]">
      <div className="mx-auto max-w-7xl border-t border-white/15 px-5 pt-10 sm:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <a
              href="#top"
              className="inline-flex items-center gap-2.5 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#ff735f]">
              
              <span className="grid h-8 w-8 place-items-center rounded-full bg-[#ff735f] font-display text-lg font-black leading-none text-[#151515]">
                R
              </span>
              <span className="font-display text-xl font-extrabold tracking-tight">
                let’s rally
              </span>
            </a>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#f8f2e9]/55">
              The event creator for people who believe getting together is kind
              of everything.
            </p>
          </div>
          <StoreLinks />
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs font-medium text-[#f8f2e9]/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Let’s Rally. Make a plan.</p>
          <a
            href="mailto:hello@letsrally.app"
            className="w-fit rounded-sm transition-colors hover:text-[#ff735f] focus:outline-none focus:ring-2 focus:ring-[#ff735f]">
            
            hello@letsrally.app
          </a>
        </div>
      </div>
    </footer>);

}