'use client';

import { ArrowRight, Clock3 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { triggerSubtleHaptic } from './subtleHaptics';

type BlogPost = {
  title: string;
  excerpt: string;
  date: string;
  project: string;
  image: string;
  imageMode: 'icon' | 'cover';
  href: string;
  readTime: string;
  privacyHref?: string;
};

export default function Blogs() {
  const posts: BlogPost[] = [
    {
      title: 'Holdboard: Clipboard, From your Keyboard.',
      excerpt:
        'Engineering a secure clipboard vault with Face ID protection, structured folders, and keyboard access so clips can be used anywhere while typing.',
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
      image: '/factread/factreadIcon.png',
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
    <section id="blogs" className="py-24 md:py-28 px-6 max-w-7xl mx-auto">
      <SectionHeading title="Case Studies" subtitle="Product breakdowns with engineering and design decisions." />

      <div className="space-y-6">
        {posts.map((post, index) => (
          <BlogCard key={post.title} post={post} index={index} />
        ))}
      </div>
    </section>
  );
}

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  const reduceMotion = useReducedMotion();
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const glowX = useMotionValue(160);
  const glowY = useMotionValue(160);
  const rotateX = useTransform(cursorY, [-45, 45], [5, -5]);
  const rotateY = useTransform(cursorX, [-45, 45], [-5, 5]);
  const springRotateX = useSpring(rotateX, { stiffness: 220, damping: 24, mass: 0.6 });
  const springRotateY = useSpring(rotateY, { stiffness: 220, damping: 24, mass: 0.6 });
  const springGlowX = useSpring(glowX, { stiffness: 170, damping: 28 });
  const springGlowY = useSpring(glowY, { stiffness: 170, damping: 28 });

  return (
    <motion.article
      initial={{ opacity: 0, y: 30, scale: 0.985, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      whileHover={reduceMotion ? undefined : { y: -7, scale: 1.01 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      onViewportEnter={() => triggerSubtleHaptic()}
      onMouseMove={(event) => {
        if (reduceMotion) return;
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        cursorX.set(((x - centerX) / centerX) * 45);
        cursorY.set(((y - centerY) / centerY) * 45);
        glowX.set(x);
        glowY.set(y);
      }}
      onMouseLeave={() => {
        cursorX.set(0);
        cursorY.set(0);
      }}
      style={reduceMotion ? undefined : { rotateX: springRotateX, rotateY: springRotateY, transformPerspective: 1200 }}
      className="group relative overflow-hidden flex flex-col md:flex-row items-center gap-6 md:gap-8 p-5 md:p-6 rounded-[28px] glass-surface transition-all duration-500 hover:shadow-[0_24px_70px_-45px_rgba(0,0,0,0.45)]"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-20 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-90"
        style={{
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.85), rgba(255,255,255,0) 58%)',
          left: springGlowX,
          top: springGlowY,
          width: 280,
          height: 280,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      <motion.div
        className="relative w-full md:w-[34%] aspect-[16/10] rounded-2xl overflow-hidden shadow-sm bg-zinc-100 border border-zinc-200/70"
        initial={{ opacity: 0, x: 16, scale: 0.98 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.45, delay: 0.1 }}
      >
        <Image
          src={post.image}
          alt={post.title}
          fill
          className={`transition-transform duration-700 group-hover:scale-105 ${
            post.imageMode === 'icon' ? 'object-contain p-4 bg-white' : 'object-cover'
          }`}
        />
      </motion.div>

      <motion.div
        className="flex-1 space-y-3.5"
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.45, delay: 0.12 }}
      >
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
          <h4 className="text-xl md:text-3xl font-bold tracking-tight text-black text-balance">{post.title}</h4>
          {post.title.startsWith('Holdboard') && (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.12em] bg-black text-white">
              Best App
            </span>
          )}
        </div>
        <p className="text-zinc-600 text-sm md:text-base leading-relaxed max-w-2xl">{post.excerpt}</p>

        <div className="flex flex-wrap items-center gap-2.5">
          <Link href={post.href} data-cursor="Open" className="inline-flex items-center gap-2.5 pt-1 text-[11px] font-black uppercase tracking-widest text-black">
            Read Full Breakdown
            <span className="w-7 h-7 rounded-full border border-zinc-200 flex items-center justify-center transition-all group-hover:bg-black group-hover:text-white group-hover:border-black">
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>

          {post.privacyHref ? (
            <Link href={post.privacyHref} className="inline-flex items-center px-4 py-2 rounded-full text-[11px] font-black uppercase tracking-wider border border-zinc-300 text-zinc-700 hover:bg-zinc-100 transition-colors">
              Privacy Policy
            </Link>
          ) : null}
        </div>
      </motion.div>
    </motion.article>
  );
}
