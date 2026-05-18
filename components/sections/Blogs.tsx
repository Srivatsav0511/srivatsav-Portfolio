'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Clock3 } from 'lucide-react';
import { motion } from 'framer-motion';

type BlogItem = {
  title: string;
  icon: string;
  href: string;
  readTime: string;
  excerpt: string;
};

const blogItems: BlogItem[] = [
  {
    title: 'Clipboard, Reimagined for macOS',
    icon: '/apps/holdboard-macos/icon.png',
    href: '/blog/holdboard-mac',
    readTime: '7 min read',
    excerpt: 'A story on building a native menu bar clipboard manager with fast recall, retention rules, and privacy-first handling on Mac.',
  },
  {
    title: 'The Clipboard Flow for iPhone Power Users',
    icon: '/apps/holdboard-ios/icon.png',
    href: '/blog/holdboard',
    readTime: '8 min read',
    excerpt: 'How I designed a privacy-first clipboard workflow with fast retrieval, keyboard extension constraints, and practical iOS-safe behavior.',
  },
  {
    title: 'Designing a Swipe-First Learning Habit',
    icon: '/factread/factread-Icon.png',
    href: '/blog/factread',
    readTime: '5 min read',
    excerpt: 'A focused story on building a swipe-first reading experience for daily learning with readable typography and smooth interaction pacing.',
  },
  {
    title: 'From Formula Chaos to Financial Clarity',
    icon: '/moneyformula/moneyformula-icon.png',
    href: '/blog/moneyformula',
    readTime: '5 min read',
    excerpt: 'Why I combined practical finance tools into one clean system and how I balanced formula flexibility with simple output clarity.',
  },
  {
    title: 'Building a Wallpaper App That Feels Lightweight',
    icon: '/pureclick/pureclick-icon.png',
    href: '/blog/pureclick',
    readTime: '4 min read',
    excerpt: 'The process behind creating a lightweight wallpaper app that prioritizes visual quality, fast previewing, and low-friction actions.',
  },
  {
    title: 'Turning Raw Code into Readable Engineering Decisions',
    icon: '/codeclarity/codeclarity-cover.png',
    href: '/blog/codeclarity',
    readTime: '6 min read',
    excerpt: 'How I turned raw code interpretation into a structured developer reading flow with reliable outputs and practical implementation detail.',
  },
  {
    title: 'A Resume Builder for Real Hiring Timelines',
    icon: '/quickcv/quickcv-cover.png',
    href: '/blog/quickcv',
    readTime: '6 min read',
    excerpt: 'A product story about building a resume tool that keeps editing fast, preview dependable, and export quality consistent for real job use.',
  },
];

export default function Blogs() {
  return (
    <motion.section
      id="blogs"
      className="mx-auto max-w-7xl px-6 py-20 md:py-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mb-10 md:mb-12">
        <p className="text-[10px] font-black uppercase tracking-[0.24em] text-zinc-500">Journal</p>
        <h2 className="premium-display mt-2 text-4xl font-semibold tracking-tight text-zinc-900 md:text-6xl">Build stories, not just screenshots.</h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-600 md:text-[15px]">
          Each post breaks down one product from idea to shipping details, including tradeoffs, constraints, and what changed after real usage.
        </p>
      </div>

      <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white/85 backdrop-blur-xl">
        {blogItems.map((item, index) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <article className="group grid gap-5 px-5 py-5 transition-colors hover:bg-zinc-50 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-6 md:px-7 md:py-6">
              <div className="relative h-14 w-14 overflow-hidden rounded-2xl">
                <Image src={item.icon} alt={item.title} fill className="object-cover" />
              </div>

              <div>
                <div className="mb-1 flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wide text-zinc-500">
                    <Clock3 size={13} />
                    {item.readTime}
                  </span>
                </div>
                <Link href={item.href} className="inline-block text-lg font-semibold tracking-tight text-zinc-900 underline-offset-4 hover:underline md:text-[1.3rem]">
                  {item.title}
                </Link>
                <p className="mt-1.5 max-w-3xl text-sm leading-relaxed text-zinc-600 md:text-[15px]">{item.excerpt}</p>
              </div>

              <Link href={item.href} className="inline-flex items-center gap-1.5 self-end text-sm font-semibold text-zinc-800 md:self-center">
                Read Story
                <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </article>
            {index < blogItems.length - 1 ? <div className="md:col-span-3 border-b border-zinc-200/80" /> : null}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
