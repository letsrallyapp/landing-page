import React from 'react';
import { ArrowUpRightIcon, PlayIcon } from 'lucide-react';
type StoreLinksProps = {
  className?: string;
};
export function StoreLinks({ className = '' }: StoreLinksProps) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <a
        href="#app-store"
        aria-label="Get Let's Rally on the App Store"
        className="group inline-flex min-w-[156px] items-center gap-3 rounded-sm border border-white/25 bg-[#151515] px-4 py-2.5 text-left text-[#f8f2e9] transition-colors hover:border-[#ff735f] focus:outline-none focus:ring-2 focus:ring-[#ff735f] focus:ring-offset-2 focus:ring-offset-[#151515]">
        
        <span className="text-xl font-bold leading-none" aria-hidden="true">
          ●
        </span>
        <span className="leading-tight">
          <span className="block text-[10px] font-semibold uppercase tracking-wider text-[#f8f2e9]/65">
            Download on the
          </span>
          <span className="block text-base font-bold">App Store</span>
        </span>
        <ArrowUpRightIcon
          className="ml-auto h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100"
          aria-hidden="true" />
        
      </a>
      <a
        href="#google-play"
        aria-label="Get Let's Rally on Google Play"
        className="group inline-flex min-w-[156px] items-center gap-3 rounded-sm border border-white/25 bg-[#151515] px-4 py-2.5 text-left text-[#f8f2e9] transition-colors hover:border-[#ff735f] focus:outline-none focus:ring-2 focus:ring-[#ff735f] focus:ring-offset-2 focus:ring-offset-[#151515]">
        
        <PlayIcon className="h-5 w-5 fill-current" aria-hidden="true" />
        <span className="leading-tight">
          <span className="block text-[10px] font-semibold uppercase tracking-wider text-[#f8f2e9]/65">
            Get it on
          </span>
          <span className="block text-base font-bold">Google Play</span>
        </span>
        <ArrowUpRightIcon
          className="ml-auto h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100"
          aria-hidden="true" />
        
      </a>
    </div>);

}