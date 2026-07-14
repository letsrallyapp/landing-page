import React from 'react';
export function Footer() {
  return <footer className="bg-[#151515] pb-8 text-[#f8f2e9]">
      <div className="mx-auto max-w-7xl border-t border-white/15 px-5 pt-10 sm:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <a href="#top" className="inline-flex items-center gap-2.5 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#ff735f]">

              <span className="grid h-8 w-8 place-items-center rounded-full bg-[#ff735f] font-display text-lg font-black leading-none text-[#151515]">
                R
              </span>
              <span className="font-display text-xl font-extrabold tracking-tight">
                let’s rally
              </span>
            </a>
            <a href="mailto:hello@letsrallyapp.com" className="mt-3 inline-block w-fit rounded-sm text-sm font-medium text-[#f8f2e9]/55 transition-colors hover:text-[#ff735f] focus:outline-none focus:ring-2 focus:ring-[#ff735f]">
              hello@letsrallyapp.com
            </a>
          </div>
          <a href="#waitlist" className="w-fit rounded-sm bg-[#ff735f] px-5 py-3 text-sm font-extrabold text-[#151515] transition-colors hover:bg-[#ff927f] focus:outline-none focus:ring-2 focus:ring-[#ff735f] focus:ring-offset-2 focus:ring-offset-[#151515]">
            Join the waitlist
          </a>
        </div>
      </div>
    </footer>;
}