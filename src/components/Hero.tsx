import React from 'react';
import { ArrowDownIcon, SparklesIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { PhonePreview } from './PhonePreview';
type HeroProps = {
  onWaitlistClick: () => void;
};
export function Hero({ onWaitlistClick }: HeroProps) {
  return (
    <main id="top">
      <section className="overflow-hidden bg-[#151515] pb-16 pt-12 text-[#f8f2e9] sm:pb-24 sm:pt-16">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1]
            }}>
            
            <p className="mb-6 flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#ff735f]">
              <SparklesIcon className="h-4 w-4" aria-hidden="true" /> For the
              friends you want to see more
            </p>
            <h1 className="max-w-3xl font-display text-5xl font-black leading-[0.88] tracking-[-0.055em] sm:text-7xl lg:text-[5.6rem]">
              More hangs.
              <br />
              Less <span className="text-[#ff735f]">back-and-</span>
              <br />
              forth.
            </h1>
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-[#f8f2e9]/73">
              Float a taco run, a walk, or a last-minute dinner. Rally brings in
              the friends who are up for it, then gives the plan one temporary
              chat to make it happen.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={onWaitlistClick}
                className="inline-flex items-center gap-2 rounded-sm bg-[#ff735f] px-5 py-3.5 text-sm font-extrabold text-[#151515] transition-colors hover:bg-[#ff927f] focus:outline-none focus:ring-2 focus:ring-[#ff735f] focus:ring-offset-2 focus:ring-offset-[#151515]">
                
                Join the waitlist{' '}
                <ArrowDownIcon className="h-4 w-4" aria-hidden="true" />
              </button>
              <a
                href="#why-rally"
                className="rounded-sm border border-white/25 px-5 py-3.5 text-sm font-extrabold transition-colors hover:border-white/60 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-[#ff735f]">
                
                See Rally in action
              </a>
            </div>
          </motion.div>
          <div className="relative flex justify-center lg:justify-end">
            <PhonePreview />
          </div>
        </div>
      </section>
    </main>);

}