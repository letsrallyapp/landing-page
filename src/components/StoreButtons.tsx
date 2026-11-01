import React from 'react';
import { appStoreUrl, playStoreUrl } from '../lib/invite';

// App Store / Google Play download buttons, styled after the official badges
// (black pill, store mark, two-line label). Swap in the official badge artwork
// from Apple's and Google's marketing sites if you prefer the exact assets.

type StoreButtonsProps = {
  size?: 'md' | 'sm';
  className?: string;
};

function AppleMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 384 512" className={className} aria-hidden="true" fill="currentColor">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

function PlayMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" className={className} aria-hidden="true">
      <path fill="#00d7fe" d="M48 59.5v393c0 9.6 5.4 17.9 13.4 22L289 256 61.4 37.5c-8 4.1-13.4 12.4-13.4 22z" />
      <path fill="#ffce00" d="M370.5 337.5 289 256l81.5-81.5 96.7 55.3c19.1 10.9 19.1 41.5 0 52.4z" />
      <path fill="#ff3a44" d="M61.4 474.5c6.6 3.4 14.8 3.5 22-.6l287.1-136.4L289 256z" />
      <path fill="#00f076" d="M83.4 38.1c-7.2-4.1-15.4-4-22-.6L289 256l81.5-81.5z" />
    </svg>
  );
}

const sizes = {
  md: { button: 'h-14 px-5 gap-3', icon: 'h-7 w-7', small: 'text-[10px]', big: 'text-lg' },
  sm: { button: 'h-11 px-4 gap-2.5', icon: 'h-5 w-5', small: 'text-[9px]', big: 'text-sm' }
};

export function StoreButtons({ size = 'md', className = '' }: StoreButtonsProps) {
  const s = sizes[size];
  const base = `inline-flex items-center rounded-lg border border-white/30 bg-black text-white transition-colors hover:border-white/70 focus:outline-none focus:ring-2 focus:ring-[#ff735f] focus:ring-offset-2 focus:ring-offset-[#151515] ${s.button}`;
  const ios = appStoreUrl();

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {ios && (
        <a href={ios} className={base} aria-label="Download Let’s Rally on the App Store">
          <AppleMark className={s.icon} />
          <span className="text-left leading-none">
            <span className={`block font-medium ${s.small}`}>Download on the</span>
            <span className={`mt-0.5 block font-semibold tracking-tight ${s.big}`}>App Store</span>
          </span>
        </a>
      )}
      <a href={playStoreUrl()} className={base} aria-label="Get Let’s Rally on Google Play">
        <PlayMark className={s.icon} />
        <span className="text-left leading-none">
          <span className={`block font-medium uppercase ${s.small}`}>Get it on</span>
          <span className={`mt-0.5 block font-semibold tracking-tight ${s.big}`}>Google Play</span>
        </span>
      </a>
    </div>
  );
}
