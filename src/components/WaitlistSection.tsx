import React, { useState } from 'react';
import { ArrowRightIcon, CheckIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
export function WaitlistSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!validEmail) {
      setError('Enter a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
  }
  return (
    <section
      id="waitlist"
      className="bg-[#151515] py-20 text-[#f8f2e9] sm:py-28">
      
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#ff735f]">
          Coming soon to your city
        </p>
        <h2 className="mt-5 font-display text-5xl font-black leading-[0.9] tracking-[-0.055em] sm:text-7xl">
          Be first in
          <br />
          the group chat.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#f8f2e9]/70">
          Join the waitlist for early access, launch news, and a little
          something for bringing the first rally.
        </p>
        <AnimatePresence mode="wait">
          {submitted ?
          <motion.div
            key="success"
            initial={{
              opacity: 0,
              y: 8
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            className="mx-auto mt-9 flex max-w-md items-center justify-center gap-3 rounded-sm bg-[#ff735f] p-5 text-left text-[#151515]"
            role="status"
            aria-live="polite">
            
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#151515] text-[#ff735f]">
                <CheckIcon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <strong className="block font-display text-lg font-black">
                  You’re on the list.
                </strong>
                <span className="text-sm font-semibold">
                  We’ll rally your inbox when it’s time.
                </span>
              </span>
            </motion.div> :

          <motion.form
            key="form"
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            onSubmit={handleSubmit}
            className="mx-auto mt-9 max-w-md text-left"
            noValidate>
            
              <label htmlFor="waitlist-email" className="sr-only">
                Email address
              </label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                id="waitlist-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="your@email.com"
                aria-describedby={error ? 'email-error' : undefined}
                aria-invalid={Boolean(error)}
                className="min-h-14 flex-1 rounded-sm border-2 border-transparent bg-[#f8f2e9] px-4 text-base font-semibold text-[#151515] placeholder:text-[#151515]/45 focus:border-[#ff735f] focus:outline-none focus:ring-2 focus:ring-[#ff735f] focus:ring-offset-2 focus:ring-offset-[#151515]" />
              
                <button
                type="submit"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-sm bg-[#ff735f] px-5 text-sm font-extrabold text-[#151515] transition-colors hover:bg-[#ff927f] focus:outline-none focus:ring-2 focus:ring-[#ff735f] focus:ring-offset-2 focus:ring-offset-[#151515]">
                
                  Join waitlist{' '}
                  <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
              {error &&
            <p
              id="email-error"
              className="mt-2 text-sm font-semibold text-[#ff927f]"
              role="alert">
              
                  {error}
                </p>
            }
              <p className="mt-3 text-center text-xs text-[#f8f2e9]/45">
                No spam. Just the invitation.
              </p>
            </motion.form>
          }
        </AnimatePresence>
      </div>
    </section>);

}