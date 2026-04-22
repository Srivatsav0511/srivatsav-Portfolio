'use client';

import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { AppStoreBadge } from '@/components/ui/StoreBadges';

const screenshots = ['/holdboard/holdboard-cover.jpg'];

export default function HoldboardBlog() {
  const mediaRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: mediaRef, offset: ['start end', 'end start'] });
  const mediaY = useTransform(scrollYProgress, [0, 1], [26, -26]);

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
            <Image src="/holdboard/holdboardicon.png" alt="Holdboard icon" width={64} height={64} className="rounded-xl" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-black">Holdboard</h1>
          <p className="mx-auto mt-3 max-w-2xl text-base md:text-lg text-zinc-600 leading-relaxed">
            Holdboard keeps copied content organized so important clips are always easy to reuse.
            It combines secure storage, Face ID protection, and quick retrieval while typing.
            The workflow is designed for speed without sacrificing privacy.
          </p>

          <div className="mt-6">
            <AppStoreBadge href="https://apps.apple.com/us/app/holdboard/id6761117827" />
          </div>
        </motion.div>
      </header>

      <section ref={mediaRef} className="relative z-10 max-w-6xl mx-auto px-5 md:px-6 mb-12 md:mb-16">
        <div className="mb-5">
          <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-500 font-black">App Screenshots</p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:gap-5">
          {screenshots.map((src, index) => (
            <motion.div
              key={src}
              style={{ y: mediaY }}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.42, delay: index * 0.05 }}
              className="relative aspect-[16/9] rounded-3xl overflow-hidden border border-zinc-200 bg-white shadow-sm"
            >
              <Image src={src} alt={`Holdboard screenshot ${index + 1}`} fill className="object-cover" priority />
            </motion.div>
          ))}
        </div>
      </section>

      <main className="relative z-10 max-w-3xl mx-auto px-5 md:px-6 pb-16 md:pb-20 space-y-10">
        {[
          {
            title: 'Why I built Holdboard',
            body: 'I built Holdboard after switching to iOS and realizing clipboard management was still a constant pain in everyday work. I copy links, OTPs, snippets, and notes all day, but important items kept getting replaced before I could reuse them. Existing clipboard tools were either too limited or too cluttered for real usage. I wanted one app that felt simple, private, and fast enough to trust as a daily utility, not just a one-time experiment.',
          },
          {
            title: 'How the product works',
            body: 'Holdboard captures and organizes saved clips into clear groups. Users can bookmark important items, protect sensitive entries with Face ID, and quickly retrieve clips when needed. The workflow is optimized for repeat usage, not one-time storage.',
          },
          {
            title: 'Keyboard-first experience',
            body: 'The Holdboard keyboard extension makes the app practical in real life. You can open your clips while typing in other apps, filter by content type, and insert or copy instantly without switching context.',
          },
          {
            title: 'Problems faced while building',
            body: 'The hardest parts were duplicate handling, mixed content rendering, and balancing security with speed. I had to tune lock boundaries carefully so private data stayed protected while normal usage remained frictionless.',
          },
          {
            title: 'AI tools used',
            body: 'I used Codex to accelerate refactoring and implementation quality during development. Final product behavior, privacy boundaries, and UX decisions were reviewed and validated manually.',
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
    </article>
  );
}
