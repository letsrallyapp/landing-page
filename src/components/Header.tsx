import React, { useMemo } from 'react';
import { ArrowUpRightIcon } from 'lucide-react';
import { appStoreUrl, detectPlatform, playStoreUrl } from '../lib/invite';

// On a phone, "Get the app" goes straight to that phone's store; everywhere
// else it scrolls to the download section with both store buttons.
function getAppHref(): string {
  if (typeof navigator === 'undefined') return '#download';
  const platform = detectPlatform(navigator.userAgent, navigator.maxTouchPoints);
  if (platform === 'android') return playStoreUrl();
  if (platform === 'ios') return appStoreUrl() ?? '#download';
  return '#download';
}

export function Header() {
  const getAppLink = useMemo(getAppHref, []);
  return <header className="border-b border-white/10 bg-[#151515] text-[#f8f2e9]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="group flex items-center gap-2.5 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#ff735f] focus:ring-offset-4 focus:ring-offset-[#151515]" aria-label="Let's Rally home">
          
          <span className="grid h-8 w-8 place-items-center rounded-full bg-[#ff735f] font-display text-lg font-black leading-none text-[#151515] transition-transform duration-200 group-hover:rotate-12">
            R
          </span>
          <span className="font-display text-xl font-extrabold tracking-tight">
            let’s rally
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-[#f8f2e9]/70 md:flex" aria-label="Primary navigation">
          
          <a className="rounded-sm transition-colors hover:text-[#ff735f] focus:outline-none focus:ring-2 focus:ring-[#ff735f]" href="#why-rally">
            
            Why Let’s Rally
          </a>
          <a className="rounded-sm transition-colors hover:text-[#ff735f] focus:outline-none focus:ring-2 focus:ring-[#ff735f]" href="#how-it-works">
            
            How it works
          </a>
        </nav>

        <a href={getAppLink} className="inline-flex items-center gap-1.5 rounded-sm bg-[#ff735f] px-4 py-2.5 text-sm font-extrabold text-[#151515] transition-colors hover:bg-[#ff927f] focus:outline-none focus:ring-2 focus:ring-[#ff735f] focus:ring-offset-2 focus:ring-offset-[#151515]">
          
          Get the app
          <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </header>;
}