'use client';

import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { GooglePlayBadge } from '@/components/ui/StoreBadges';

const screenshots = ['/pureclick/pureclick-1.png', '/pureclick/pureclick-2.png', '/pureclick/pureclick-3.png', '/pureclick/pureclick-4.png'];

export default function PureClickBlog() {
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
            <Image src="/pureclick/pureclick-icon.png" alt="Pureclick icon" width={64} height={64} className="rounded-xl" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-black">Pureclick Walls</h1>
          <p className="mx-auto mt-3 max-w-2xl text-base md:text-lg text-zinc-600 leading-relaxed">
            Pureclick Walls is built for fast wallpaper discovery without cluttered screens.
            It focuses on high-quality visuals, smooth preview, and quick apply actions.
            The app keeps the browsing experience clean and responsive.
          </p>

          <div className="mt-6">
            <GooglePlayBadge href="https://play.google.com/store/apps/details?id=com.pureclickwalls.app&hl=en" />
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
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.42, delay: index * 0.05 }}
              className="relative w-[78%] sm:w-[48%] md:w-[24%] shrink-0 snap-start aspect-[9/19] rounded-2xl overflow-hidden border border-zinc-200 bg-white shadow-sm"
            >
              <Image src={src} alt={`Pureclick screenshot ${index + 1}`} fill className="object-cover" priority={index < 2} />
            </motion.div>
          ))}
        </div>
      </section>

      <main className="relative z-10 max-w-3xl mx-auto px-5 md:px-6 pb-16 md:pb-20 space-y-10">
        {[
          {
            title: 'Why I built Pureclick',
            body: 'I built Pureclick because most wallpaper apps felt heavy, ad-driven, and frustrating even before finding a good wallpaper. I wanted a calmer experience where visual quality is the priority and browsing feels smooth from the first swipe. The product started as a personal need for better wallpapers without noisy UI patterns. Over time it became a focused app built around speed, clean discovery, and reliable preview behavior.',
          },
          {
            title: 'How it works',
            body: 'Users explore curated collections, preview wallpapers, and apply or download with minimal friction. The interface is intentionally lightweight so content remains the hero.',
          },
          {
            title: 'Problems during development',
            body: 'Key challenges included native wallpaper integration in a React Native setup, smooth handling of high-resolution assets, and accurate preview composition before applying.',
          },
          {
            title: 'AI tools used',
            body: 'No AI tools were used for Pureclick Walls. Product planning, implementation, and optimization were done manually.',
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
          <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-black">Get Pureclick Walls</p>
          <h3 className="mt-2 text-xl md:text-2xl font-bold tracking-tight text-black">Download the app and review privacy details</h3>
          <div className="mt-5 flex flex-col items-center gap-3">
            <GooglePlayBadge href="https://play.google.com/store/apps/details?id=com.pureclickwalls.app&hl=en" />
            <Link href="/privacy/pureclick-walls" className="text-sm font-semibold text-zinc-700 underline underline-offset-4 hover:text-black transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
