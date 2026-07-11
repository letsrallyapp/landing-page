import React from 'react';
import { CheckCircle2Icon } from 'lucide-react';
const steps = [
[
'Float the idea',
'Tacos tonight? A walk after work? Pick a plan while it is still fresh — no big production required.'],

[
'Find the right few',
'Rally can invite friends who are into that kind of hang, or you can choose exactly who gets the nudge.'],

[
'Make it easy',
'One temporary chat keeps the little details moving until everyone is together — then gets out of the way.']];


export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-[#ffdd57] py-20 text-[#151515] sm:py-28">
      
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#151515]/60">
            For the “what are you up to?” plans
          </p>
          <h2 className="mt-5 max-w-md font-display text-5xl font-black leading-[0.9] tracking-[-0.05em] sm:text-6xl">
            Less organizing.
            <br />
            More hanging out.
          </h2>
          <p className="mt-6 max-w-sm text-lg leading-relaxed text-[#151515]/75">
            Rally is for the coffee run, the extra dinner seat, and the
            last-minute “come meet us” — the little plans that make a week
            better.
          </p>
        </div>

        <div className="border-t-2 border-[#151515]">
          {steps.map(([label, copy], index) =>
          <div
            key={label}
            className="grid grid-cols-[auto_1fr] gap-x-5 border-b-2 border-[#151515] py-6 sm:grid-cols-[70px_1fr] sm:py-8">
            
              <span className="font-display text-2xl font-black">
                0{index + 1}
              </span>
              <div>
                <h3 className="flex items-center gap-2 font-display text-2xl font-black sm:text-3xl">
                  <CheckCircle2Icon className="h-5 w-5" aria-hidden="true" />
                  {label}
                </h3>
                <p className="mt-2 max-w-md text-base leading-relaxed text-[#151515]/70">
                  {copy}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}