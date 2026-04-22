'use client';

import { ArrowRight, Clock3 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Blogs() {
  const posts = [
    {
      title: 'Holdboard: Clipboard, From your Keyboard.',
      excerpt:
        'Engineering a secure clipboard vault with Face ID protection, structured folders, and low-friction retrieval for real workflows.',
      date: 'Apr 2026',
      project: 'iOS / Utility',
      image: '/holdboard/holdboardicon.png',
      imageMode: 'icon',
      href: '/blog/holdboard',
      readTime: '8 min read',
      privacyHref: '/privacy/holdboard',
    },
    {
      title: 'FactRead: Swipe.Read.Wonder',
      excerpt:
        'Building an iOS reading app with layered typography systems, multilingual narration, and adaptive readability controls.',
      date: 'Apr 2026',
      project: 'iOS / Reading',
      image: '/factread/factread-Icon.png',
      imageMode: 'icon',
      href: '/blog/factread',
      readTime: '7 min read',
      privacyHref: '/privacy/factread',
    },
    {
      title: 'MoneyFormula: Finance Calc',
      excerpt:
        'How MoneyFormula simplifies daily finance calculations with fast inputs, clear outputs, saved history, and instant category search.',
      date: 'Apr 2026',
      project: 'iOS / Finance',
      image: '/moneyformula/moneyformula-icon.png',
      imageMode: 'icon',
      href: '/blog/moneyformula',
      readTime: '6 min read',
      privacyHref: '/privacy/moneyformula',
    },
    {
      title: 'Design of Pureclick Walls',
      excerpt:
        'A deep dive into native wallpaper APIs, performance decisions, and visual quality controls inside an Android product.',
      date: 'Jan 2026',
      project: 'Android',
      image: '/pureclick/pureclick-icon.png',
      imageMode: 'icon',
      href: '/blog/pureclick',
      readTime: '6 min read',
      privacyHref: '/privacy/pureclick-walls',
    },
    {
      title: 'The Logic of Clarity',
      excerpt:
        'How CodeClarity converts raw snippets into structured developer understanding with practical output and optimization paths.',
      date: 'Nov 2025',
      project: 'AI / Web',
      image: '/codeclarity/codeclarity-cover.png',
      imageMode: 'cover',
      href: '/blog/codeclarity',
      readTime: '6 min read',
    },
    {
      title: 'Building Quick CV',
      excerpt:
        'Designing a real-time resume system with ATS-safe formatting and print-quality export without paid-tool lock-in.',
      date: 'Sept 2025',
      project: 'Web / Productivity',
      image: '/quickcv/quickcv-cover.png',
      imageMode: 'cover',
      href: '/blog/quickcv',
      readTime: '5 min read',
    },
  ];

  return (
    <section id="blogs" className="py-28 px-6 max-w-7xl mx-auto">
      <SectionHeading title="Case Studies" subtitle="Product breakdowns with engineering and design decisions." />

      <div className="space-y-8">
        {posts.map((post, index) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.04 }}
            className="group flex flex-col md:flex-row items-center gap-8 md:gap-10 p-6 md:p-8 rounded-[32px] border border-white bg-white/80 backdrop-blur-xl transition-all duration-500 hover:shadow-[0_24px_70px_-45px_rgba(0,0,0,0.45)]"
          >
            <div className="relative w-full md:w-[36%] aspect-[16/10] rounded-3xl overflow-hidden shadow-sm bg-zinc-100 border border-zinc-200/70">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className={`transition-transform duration-700 group-hover:scale-105 ${
                  post.imageMode === 'icon' ? 'object-contain p-4 bg-white' : 'object-cover'
                }`}
              />
            </div>

            <div className="flex-1 space-y-4">
              <div className="flex flex-wrap items-center gap-3 text-[10px] font-black uppercase tracking-widest text-zinc-400">
                <span>{post.date}</span>
                <span className="w-1 h-1 bg-zinc-300 rounded-full" />
                <span>{post.project}</span>
                <span className="w-1 h-1 bg-zinc-300 rounded-full" />
                <span className="inline-flex items-center gap-1.5 normal-case tracking-normal font-semibold text-zinc-500">
                  <Clock3 size={12} />
                  {post.readTime}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <h4 className="text-2xl md:text-4xl font-bold tracking-tight text-black text-balance">{post.title}</h4>
                {post.title.startsWith('Holdboard') && (
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.12em] bg-black text-white">
                    Best App
                  </span>
                )}
              </div>
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed max-w-2xl">{post.excerpt}</p>

              <div className="flex flex-wrap items-center gap-3">
                <Link href={post.href} data-cursor="Open" className="inline-flex items-center gap-3 pt-2 text-[12px] font-black uppercase tracking-widest text-black">
                  Read Full Breakdown
                  <span className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center transition-all group-hover:bg-black group-hover:text-white group-hover:border-black">
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>

                {post.privacyHref ? (
                  <Link href={post.privacyHref} className="inline-flex items-center px-4 py-2 rounded-full text-[11px] font-black uppercase tracking-wider border border-zinc-300 text-zinc-700 hover:bg-zinc-100 transition-colors">
                    Privacy Policy
                  </Link>
                ) : null}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
