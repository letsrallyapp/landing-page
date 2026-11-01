import React from 'react';
import { DownloadSection } from './components/DownloadSection';
import { FeatureSection } from './components/FeatureSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
export function App() {
  return <div className="min-h-screen w-full bg-[#151515] font-sans">
      <a href="#main-content" className="sr-only z-50 rounded-sm bg-[#ff735f] px-4 py-3 font-bold text-[#151515] focus:not-sr-only focus:fixed focus:left-4 focus:top-4">

        Skip to main content
      </a>
      <Header />
      <div id="main-content">
        <Hero />
        <FeatureSection />
        <HowItWorks />
        <DownloadSection />
      </div>
      <Footer />
    </div>;
}
