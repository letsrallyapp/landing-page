import React from 'react';
import { MessageCircleIcon, UsersRoundIcon } from 'lucide-react';
import { motion } from 'framer-motion';
const stories = [{
  number: '01',
  icon: UsersRoundIcon,
  eyebrow: 'The right invite, automatically',
  title: 'Your friends already told Rally what they’re into.',
  copy: 'Choose Board Game Night, pickup basketball, brunch, or whatever’s next. Rally starts with the people who are actually interested — without making you guess who to text.',
  accent: 'bg-[#ff735f]',
  people: [{
    name: 'Sarah',
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  }, {
    name: 'Chloe',
    avatar: 'https://i.pravatar.cc/150?u=chloe'
  }],
  detail: 'Sarah + Chloe are into Board Game Night'
}, {
  number: '02',
  icon: MessageCircleIcon,
  eyebrow: 'One chat. One plan. Then it disappears.',
  title: 'Every event gets its own place to come together.',
  copy: 'Details, updates, and last-minute “I’m five away” messages live in a focused, temporary group chat — so your regular threads stay yours.',
  accent: 'bg-[#7fb6b2]',
  people: [{
    name: 'Sarah',
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  }, {
    name: 'Alex',
    avatar: 'https://i.pravatar.cc/150?u=alex'
  }, {
    name: 'Emma',
    avatar: 'https://i.pravatar.cc/150?u=emma'
  }],
  detail: 'Board Game Night chat · closes after the event'
}];
export function FeatureSection() {
  return <section id="why-rally" className="bg-[#f8f2e9] py-20 text-[#151515] sm:py-28">
      
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-8 border-b-2 border-[#151515] pb-12 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#d64f3d]">
            The Rally difference
          </p>
          <h2 className="font-display text-4xl font-black leading-[0.92] tracking-[-0.045em] sm:text-6xl">
            The right people for the plan. One place to make it happen.
          </h2>
        </div>

        <div className="grid divide-y-2 divide-[#151515] md:grid-cols-2 md:divide-x-2 md:divide-y-0">
          {stories.map((story, index) => {
          const Icon = story.icon;
          return <motion.article key={story.number} className="py-10 md:px-10 md:py-14 first:pl-0 last:pr-0" initial={{
            opacity: 0,
            y: 16
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            amount: 0.25
          }} transition={{
            delay: index * 0.08,
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1]
          }}>
                
                <div className="flex items-start justify-between gap-6">
                  <span className="font-display text-xl font-black text-[#d64f3d]">
                    {story.number}
                  </span>
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border-2 border-[#151515]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>

                <p className="mt-16 text-xs font-extrabold uppercase tracking-[0.16em] text-[#151515]/55">
                  {story.eyebrow}
                </p>
                <h3 className="mt-4 max-w-md font-display text-3xl font-black leading-[0.96] tracking-tight sm:text-4xl">
                  {story.title}
                </h3>
                <p className="mt-5 max-w-md text-base leading-relaxed text-[#151515]/70">
                  {story.copy}
                </p>

                <div className={`mt-8 flex w-fit items-center gap-2.5 rounded-sm ${story.accent} px-3 py-2.5 text-xs font-extrabold text-[#151515]`}>
                  
                  <div className="flex -space-x-2">
                    {story.people.map((person) => <img key={person.name} src={person.avatar} alt={person.name} className="h-6 w-6 rounded-full border-2 border-[#f8f2e9] object-cover" />)}
                  </div>
                  <span>{story.detail}</span>
                </div>
              </motion.article>;
        })}
        </div>
      </div>
    </section>;
}