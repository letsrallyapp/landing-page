import React from 'react';
import { StoreButtons } from './StoreButtons';
export function DownloadSection() {
  return (
    <section
      id="download"
      className="scroll-mt-8 bg-[#151515] py-20 text-[#f8f2e9] sm:py-28">

      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#ff735f]">
          Out now on iPhone and Android
        </p>
        <h2 className="mt-5 font-display text-5xl font-black leading-[0.9] tracking-[-0.055em] sm:text-7xl">
          The good plans
          <br />
          are the <span className="text-[#ff735f]">easy</span> ones.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#f8f2e9]/70">
          Download Let’s Rally, pick what you’re into, and make room for more
          spontaneous, meaningful time with the friends you already miss.
        </p>
        <StoreButtons className="mt-9 justify-center" />
        <p className="mt-4 text-xs text-[#f8f2e9]/45">Free to download.</p>
      </div>
    </section>);

}
