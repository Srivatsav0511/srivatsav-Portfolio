'use client';

import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { AppStoreBadge } from '@/components/ui/StoreBadges';

const screenshots = [
  '/factread/factread-1.png',
  '/factread/factread-2.png',
  '/factread/factread-3.png',
  '/factread/factread-4.png',
];

export default function FactReadBlog() {
  const mediaRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: mediaRef, offset: ['start end', 'end start'] });
  const mediaY = useTransform(scrollYProgress, [0, 1], [28, -28]);

  return (
    <article className="min-h-screen bg-zinc-50 text-zinc-900 selection:bg-zinc-200">

      <div className="sticky top-4 md:top-8 z-50 w-fit ml-4 md:ml-8">
        <Link href="/#work" className="group flex items-center gap-2 bg-white/90 backdrop-blur-md border border-zinc-200 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-zinc-600 hover:text-black hover:bg-white transition-all shadow-sm">
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
          <span className="text-xs md:text-sm font-bold">Back</span>
        </Link>
      </div>

      <header className="relative z-10 max-w-4xl mx-auto px-5 md:px-6 pt-24 md:pt-28 pb-8 md:pb-10 text-center">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="text-center">
          <div className="mx-auto mb-5 inline-flex rounded-2xl border border-zinc-200 bg-white p-2.5 shadow-sm">
            <Image src="/factread/factread-Icon.png" alt="FactRead icon" width={64} height={64} className="rounded-xl" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-black">FactRead</h1>
          <p className="mx-auto mt-3 max-w-2xl text-base md:text-lg text-zinc-600 leading-relaxed">
            FactRead helps users learn one useful insight at a time with a clean swipe flow.
            It supports readable typography, multilingual content, and built-in narration.
            The experience stays fast and focused for short daily learning sessions.
          </p>

          <div className="mt-6">
            <AppStoreBadge href="https://apps.apple.com/us/app/factread-swipe-to-read/id6762402891" />
          </div>
        </motion.div>
      </header>

      <section ref={mediaRef} className="relative z-10 max-w-6xl mx-auto px-5 md:px-6 mb-12 md:mb-16">
        <div className="mb-5">
          <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-500 font-black">App Screenshots</p>
        </div>

        <div className="flex gap-4 md:gap-5 overflow-x-auto pb-1 snap-x snap-mandatory">
          {screenshots.map((src, index) => (
            <motion.div
              key={src}
              style={{ y: mediaY }}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.42, delay: index * 0.05 }}
              className="relative w-[78%] sm:w-[48%] md:w-[24%] shrink-0 snap-start aspect-[9/19.5] rounded-3xl overflow-hidden border border-zinc-200 bg-white shadow-sm"
            >
              <Image src={src} alt={`FactRead screenshot ${index + 1}`} fill className="object-cover" priority={index < 2} />
            </motion.div>
          ))}
        </div>
      </section>

      <main className="relative z-10 max-w-3xl mx-auto px-5 md:px-6 pb-16 md:pb-20 space-y-10">
        {[
          {
            title: 'Tech stack',
            body: 'SwiftUI, iOS, AVFoundation.',
          },
          {
            title: 'Why I built FactRead',
            body: 'I built FactRead because most learning apps try to do too many things at once and end up feeling noisy. I wanted a format that fits real life where people learn in short bursts between tasks, travel, and work. Instead of endless feeds and distraction loops, the app focuses on one fact at a time with clear progression. The goal was to make learning feel light and repeatable so users can come back daily without fatigue.',
          },
          {
            title: 'How it helps users',
            body: 'Users can read quickly, change readability settings, and switch to audio mode when they don’t want to stare at a screen. This makes the app useful during short breaks, commute, or focused study.',
          },
          {
            title: 'What was hard to build',
            body: 'The toughest parts were theme readability across long text, multilingual narration pacing, and swipe responsiveness. Every transition had to feel immediate for the app to stay enjoyable.',
          },
          {
            title: 'AI tools used',
            body: 'I used Codex to speed up refactoring and implementation quality. Final UX decisions and behavior validation were done manually on real app flows.',
          },
        ].map((item, index) => (
          <motion.section
            key={item.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.28 }}
            transition={{ duration: 0.45, delay: index * 0.04 }}
            className="space-y-3 border-b border-zinc-200 pb-8 last:border-b-0 last:pb-0"
          >
            <h2 className="text-xl font-bold text-black">{item.title}</h2>
            <p className="text-zinc-700 leading-relaxed">{item.body}</p>
          </motion.section>
        ))}
      </main>

      <section className="relative z-10 max-w-4xl mx-auto px-5 md:px-6 pb-20 md:pb-24">
        <div className="rounded-3xl border border-zinc-200 bg-white/85 p-6 md:p-8 text-center shadow-sm">
          <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-black">Get FactRead</p>
          <h3 className="mt-2 text-xl md:text-2xl font-bold tracking-tight text-black">Download the app and review privacy details</h3>
          <div className="mt-5 flex flex-col items-center gap-3">
            <AppStoreBadge href="https://apps.apple.com/us/app/factread-swipe-to-read/id6762402891" />
            <Link
              href="/privacy/factread"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 underline underline-offset-4 decoration-1 transition-colors hover:text-blue-500"
            >
              Privacy Policy
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
