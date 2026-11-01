import React from 'react';
import { SparklesIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { PhonePreview } from './PhonePreview';
import { StoreButtons } from './StoreButtons';
export function Hero() {
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
              Float a coffee run, a sunset walk, or a last-minute movie. Let’s
              Rally brings in the friends who are up for it, then gives the plan
              one
              temporary chat to make it happen.
            </p>
            <StoreButtons className="mt-8" />
            <div className="mt-5">
              <a
                href="#why-rally"
                className="inline-block rounded-sm text-sm font-extrabold text-[#f8f2e9]/70 underline decoration-white/30 underline-offset-4 transition-colors hover:text-[#ff735f] focus:outline-none focus:ring-2 focus:ring-[#ff735f]">
                
                See Let’s Rally in action
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