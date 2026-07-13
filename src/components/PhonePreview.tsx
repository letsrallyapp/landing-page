import React from 'react';
import { ChevronLeftIcon, MoreHorizontalIcon, SendIcon, SparklesIcon, UsersIcon } from 'lucide-react';
import { motion } from 'framer-motion';
const participants = [{
  name: 'Sarah',
  avatar: 'https://i.pravatar.cc/150?u=sarah'
}, {
  name: 'Alex',
  avatar: 'https://i.pravatar.cc/150?u=alex'
}, {
  name: 'Emma',
  avatar: 'https://i.pravatar.cc/150?u=emma'
}, {
  name: 'David',
  avatar: 'https://i.pravatar.cc/150?u=david'
}];
export function PhonePreview() {
  return <motion.div className="relative mx-auto w-[278px] sm:w-[310px]" initial={{
    opacity: 0,
    y: 28,
    rotate: 2
  }} animate={{
    opacity: 1,
    y: 0,
    rotate: 0
  }} transition={{
    duration: 0.7,
    delay: 0.18,
    ease: [0.22, 1, 0.36, 1]
  }} aria-label="Preview of the Taco Night temporary event chat in the Let's Rally app" role="img">
      
      
      
      <div className="absolute -right-7 bottom-20 h-16 w-16 rounded-full bg-[#ff735f]" aria-hidden="true" />
      

      <div className="relative rounded-[2.8rem] border-[7px] border-[#090909] bg-[#090909] p-1.5 shadow-[10px_12px_0_#ff735f]">
        <div className="overflow-hidden rounded-[2.25rem] bg-[#f8f2e9]">
          <div className="flex h-8 items-center justify-between bg-[#f8f2e9] px-6 text-[9px] font-bold text-[#151515]">
            <span>9:41</span>
            <span className="h-3 w-20 rounded-full bg-[#151515]" />
            <span>● ● ●</span>
          </div>

          <div className="bg-[#151515] px-5 pb-4 pt-4 text-[#f8f2e9]">
            <div className="flex items-center justify-between">
              <ChevronLeftIcon className="h-4 w-4" aria-hidden="true" />
              <div className="text-center">
                <p className="font-display text-sm font-bold">TACO NIGHT 🌮</p>
                <p className="mt-0.5 text-[9px] font-semibold text-[#f8f2e9]/60">
                  Tomorrow · 7:00 PM · ends in 24h
                </p>
              </div>
              <MoreHorizontalIcon className="h-4 w-4" aria-hidden="true" />
            </div>
          </div>

          <div className="px-4 pb-4 pt-4">
            <div className="mb-4 flex items-center gap-2 rounded-sm bg-[#ffdd57] px-3 py-2 text-[10px] font-extrabold text-[#151515]">
              <SparklesIcon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              
              Rally invited friends into Taco Night
            </div>

            <div className="space-y-3 text-[11px]">
              <div className="flex items-end gap-2">
                <img src="https://i.pravatar.cc/150?u=sarah" alt="Sarah" className="h-6 w-6 shrink-0 rounded-full object-cover" />
                
                <div>
                  <p className="mb-1 font-bold text-[#151515]/55">Sarah</p>
                  <p className="rounded-r-lg rounded-tl-lg bg-[#e8e0d4] px-3 py-2 font-semibold text-[#151515]">
                    Who is down for tacos tomorrow?
                  </p>
                </div>
              </div>

              <div className="flex items-end gap-2">
                <img src="https://i.pravatar.cc/150?u=emma" alt="Emma" className="h-6 w-6 shrink-0 rounded-full object-cover" />
                
                <div>
                  <p className="mb-1 font-bold text-[#151515]/55">Emma</p>
                  <p className="rounded-r-lg rounded-tl-lg bg-[#e8e0d4] px-3 py-2 font-semibold text-[#151515]">
                    Me!! I need a margarita ASAP.
                  </p>
                </div>
              </div>

              <div className="flex items-end justify-end gap-2">
                <div>
                  <p className="mb-1 text-right font-bold text-[#151515]/55">
                    Alex
                  </p>
                  <p className="rounded-l-lg rounded-tr-lg bg-[#ff735f] px-3 py-2 font-semibold text-[#151515]">
                    Count me in. Same place as last time?
                  </p>
                </div>
                <img src="https://i.pravatar.cc/150?u=alex" alt="Alex" className="h-6 w-6 shrink-0 rounded-full object-cover" />
                
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-[#151515]/10 pt-3">
              <div className="flex -space-x-2">
                {participants.map((participant) => <img key={participant.name} src={participant.avatar} alt={participant.name} className="h-6 w-6 rounded-full border-2 border-[#f8f2e9] object-cover" />)}
              </div>
              <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-[#151515]/55">
                <UsersIcon className="h-3.5 w-3.5" aria-hidden="true" /> 4 going
              </span>
            </div>

            <div className="mt-3 flex items-center gap-2 rounded-full bg-[#e8e0d4] px-3 py-2 text-[10px] font-semibold text-[#151515]/45">
              Message Taco Night
              <SendIcon className="ml-auto h-3.5 w-3.5 text-[#151515]" aria-hidden="true" />
              
            </div>
          </div>
        </div>
      </div>
    </motion.div>;
}