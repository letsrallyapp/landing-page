import React, { useRef } from 'react';
import { FeatureSection } from './components/FeatureSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { WaitlistSection } from './components/WaitlistSection';
import { useScreenInit } from './useScreenInit';
export function App() {
  const waitlistRef = useRef<HTMLElement>(null);
  useScreenInit();
  function focusWaitlist() {
    waitlistRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
    window.setTimeout(() => document.getElementById('waitlist-email')?.focus(), 500);
  }
  return <div className="min-h-screen w-full bg-[#151515] font-sans">
      <a href="#main-content" className="sr-only z-50 rounded-sm bg-[#ff735f] px-4 py-3 font-bold text-[#151515] focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        
        Skip to main content
      </a>
      <Header onWaitlistClick={focusWaitlist} />
      <div id="main-content">
        <Hero onWaitlistClick={focusWaitlist} />
        <FeatureSection />
        <HowItWorks />
        <div ref={waitlistRef}>
          <WaitlistSection />
        </div>
      </div>
      <Footer />
    </div>;
}