'use client';

import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { AppStoreBadge } from '@/components/ui/StoreBadges';

const screenshots = [
  '/apps/holdboard-macos/previews/preview-01.png',
  '/apps/holdboard-macos/previews/preview-02.png',
  '/apps/holdboard-macos/previews/preview-03.png',
];

export default function HoldboardBlog() {
  const mediaRef = useRef<HTMLDivElement | null>(null);
  const [isMediaInView, setIsMediaInView] = useState(false);
  const { scrollYProgress } = useScroll({ target: mediaRef, offset: ['start end', 'end start'] });
  const mediaY = useTransform(scrollYProgress, [0, 1], [26, -26]);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (!isMediaInView) return;

    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % screenshots.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, [isMediaInView]);

  return (
    <article className="min-h-screen bg-zinc-50 text-zinc-900 selection:bg-zinc-200">
      <div className="sticky top-4 md:top-8 z-50 w-fit ml-4 md:ml-8">
        <Link href="/blogs" replace className="group flex items-center gap-2 bg-white/90 backdrop-blur-md border border-zinc-200 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-zinc-600 hover:text-black hover:bg-white transition-all shadow-sm">
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
          <span className="text-xs md:text-sm font-bold">Back</span>
        </Link>
      </div>

      <header className="relative z-10 max-w-4xl mx-auto px-5 md:px-6 pt-24 md:pt-28 pb-8 md:pb-10 text-center">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="text-center">
          <div className="mx-auto mb-5 inline-flex">
            <Image src="/apps/holdboard-macos/icon.png" alt="Holdboard Mac icon" width={64} height={64} className="rounded-xl" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-black">Holdboard for macOS</h1>
          <p className="mx-auto mt-3 max-w-2xl text-base md:text-lg text-zinc-600 leading-relaxed">
            A native clipboard manager built for focus, privacy, and speed.
            Holdboard turns clipboard history into a system-like macOS experience
            that stays fast during real daily work.
          </p>

          <div className="mt-6">
            <AppStoreBadge href="https://apps.apple.com/in/app/holdboard/id6761204057?mt=12" />
            <p className="mt-3 text-xs md:text-sm font-semibold tracking-tight text-zinc-600">$0.99 one-time purchase. No subscription.</p>
          </div>
        </motion.div>
      </header>

      <section ref={mediaRef} className="relative z-10 max-w-6xl mx-auto px-5 md:px-6 mb-12 md:mb-16">
        <div className="mb-5">
          <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-500 font-black">App Previews</p>
        </div>

        <div>
          <motion.div
            style={{ y: mediaY }}
            onViewportEnter={() => {
              setIsMediaInView(true);
              setActiveSlide(0);
            }}
            onViewportLeave={() => setIsMediaInView(false)}
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm"
          >
            {screenshots.map((src, index) => (
              <Image
                key={src}
                src={src}
                alt={`Holdboard screenshot ${index + 1}`}
                fill
                className={`object-cover transition-opacity duration-500 ${activeSlide === index ? 'opacity-100' : 'opacity-0'}`}
                priority={index === 0}
              />
            ))}
          </motion.div>

          <div className="mt-3 flex items-center justify-center gap-2">
            {screenshots.map((src, index) => (
              <button
                key={src}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => setActiveSlide(index)}
                className={`h-2.5 w-2.5 rounded-full transition ${activeSlide === index ? 'bg-zinc-900' : 'bg-zinc-300 hover:bg-zinc-500'}`}
              />
            ))}
          </div>
        </div>
      </section>

      <main className="relative z-10 max-w-3xl mx-auto px-5 md:px-6 pb-16 md:pb-20 space-y-10">
        {[
          {
            title: 'What Holdboard Is',
            body: 'Holdboard is a menu bar-first clipboard manager for macOS. You can open a lightweight panel from the menu bar, view recent clips by type and source, copy or reinsert clips instantly, and keep sensitive items protected.',
          },
          {
            title: 'Core Product Design',
            body: 'Holdboard is designed around four pillars: native feel, fast recall, privacy by design, and retention control. The app behaves like a true macOS utility while keeping clipboard history available, organized, and safe.',
            points: [
              'Native feel with menu bar interaction and system-consistent controls.',
              'Fast recall with one-click or shortcut-driven access to recent clips.',
              'Privacy by design with sensitive clip masking and protected actions.',
              'Retention control with auto-delete rules to reduce stale-data risk.',
            ],
          },
          {
            title: 'UI and Interaction Model',
            body: 'The app is centered around a compact menu bar panel for quick actions: recent clips, type-aware rows, timestamps, and instant copy behavior. For deeper control, Holdboard includes a full app window and a shelf-like quick surface for fast interactions.',
            points: [
              'Left click opens the Holdboard panel.',
              'Right click / Control-click shows native actions such as Open App and Quit App.',
              'Main window supports settings, retention control, and sensitive mode management.',
              'Quick shelf surface keeps access lightweight during active workflows.',
            ],
          },
          {
            title: 'Clipboard Types Supported',
            body: 'Holdboard supports text clips, links, images, and files, with type-aware rendering and tailored behavior where possible.',
            points: [
              'Text clips for quick snippet reuse.',
              'Link clips with contextual preview behavior.',
              'Image clips for visual copy workflows.',
              'File clips for broader project-asset handling.',
            ],
          },
          {
            title: 'Sensitive Clips and Privacy Workflow',
            body: 'A clip can be marked sensitive regardless of type. When sensitive lock is enabled, sensitive content is masked, protected from accidental copy/drag actions, and link details are hidden. Sensitive clips are never permanent and always follow retention policies.',
          },
          {
            title: 'Auto-Delete and Retention',
            body: 'Holdboard supports retention policies by category: Text, Links, Images, Files, and Sensitive clips. This keeps clipboard history practical while reducing long-term risk from stale data.',
          },
          {
            title: 'Productivity Features',
            body: 'Shortcut-driven workflows, quick copy/insert behavior, and source-aware clip surfacing help users stay in flow without repeated context switching.',
          },
          {
            title: 'Native macOS Quality Goals',
            body: 'Holdboard is intentionally aligned with native desktop expectations: menu bar accessory behavior, clean AppKit termination flow, predictable panel behavior, and accessibility-aware structure.',
          },
          {
            title: 'Who Holdboard Is For',
            body: 'Holdboard is designed for developers, designers, researchers, operators, and privacy-conscious users who copy and paste at high volume throughout the day.',
          },
          {
            title: 'Final Thoughts',
            body: 'Holdboard is not a giant productivity suite. It is built to be a dependable native clipboard companion on macOS: fast, minimal, privacy-aware, and always ready inside your workflow.',
          },
          {
            title: 'Tech Stack',
            body: 'SwiftUI, AppKit integration, native menu bar architecture, and local-first clipboard lifecycle controls.',
            points: [
              'Native menu bar panel and app window surfaces.',
              'Retention-rule based history management.',
              'Sensitive clip masking and protection states.',
              'Shortcut-first interactions for quick recall.',
            ],
          },
          {
            title: 'Build Outcome',
            body: 'Holdboard turns clipboard history into a practical workspace layer for macOS users. The product focuses on clarity, speed, and privacy so it can stay useful in real daily workflows.',
          },
          {
            title: 'Release Notes',
            body: 'The current release improves native UI polish, better clip details, improved GIF/media handling, stronger keyboard stability, refined privacy settings copy, and performance fixes.',
            points: [
              'Smoother macOS-native interaction polish.',
              'Improved clip details and media handling.',
              'More stable keyboard and quicker response paths.',
              'General bug fixes and performance improvements.',
            ],
          },
          {
            title: 'Download',
            body: 'Holdboard is available as a one-time purchase on the App Store.',
            points: [
              '$0.99 one-time purchase.',
              'Designed for fast, privacy-aware clipboard work on macOS.',
            ],
          },
        ].map((item, index) => (
          <motion.section
            key={item.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.28 }}
            transition={{ duration: 0.45, delay: index * 0.04 }}
            className="space-y-3"
          >
            <h2 className="text-xl font-bold text-black">{item.title}</h2>
            <p className="text-zinc-700 leading-relaxed">{item.body}</p>
            {'points' in item && item.points ? (
              <ul className="mt-3 space-y-2">
                {item.points.map((point) => (
                  <li key={point} className="text-zinc-700 leading-relaxed pl-4 relative">
                    <span className="absolute left-0 top-[0.62em] h-1.5 w-1.5 rounded-full bg-zinc-400" aria-hidden />
                    {point}
                  </li>
                ))}
              </ul>
            ) : null}
          </motion.section>
        ))}
      </main>

      <section className="relative z-10 mx-auto max-w-4xl px-5 pb-20 md:px-6 md:pb-24">
        <div className="flex flex-wrap items-center justify-center gap-5 text-sm font-medium text-zinc-600">
          <Link href="/privacy/holdboard-mac" className="inline-flex items-center gap-1 hover:text-zinc-900">
            Privacy
            <ArrowUpRight size={13} />
          </Link>
          <a href="mailto:karamalasrivatsav@gmail.com?subject=Holdboard%20Support" className="inline-flex items-center gap-1 hover:text-zinc-900">
            Support
            <ArrowUpRight size={13} />
          </a>
          <a href="https://apps.apple.com/in/app/holdboard/id6761204057?mt=12" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-zinc-900">
            App Store
            <ArrowUpRight size={13} />
          </a>
        </div>
        <p className="mt-8 text-center text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">© 2026 Srivatsav Karamala</p>
      </section>
    </article>
  );
}
