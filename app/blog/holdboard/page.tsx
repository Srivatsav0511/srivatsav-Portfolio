'use client';

import { ArrowLeft, ArrowUpRight } from 'lucide-react';
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
            <p className="mt-3 text-xs md:text-sm font-semibold tracking-tight text-zinc-600">$0.99 one-time purchase. No subscription.</p>
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
            title: 'Tech stack',
            body: 'SwiftUI, iOS, LocalAuthentication.',
          },
          {
            title: 'Why Holdboard was built',
            body: 'Holdboard started from a repeat pain in real work sessions: copied content is temporary, but tasks are not. During debugging, payments, support chats, and content writing, I needed more than one active clip. iOS clipboard behavior is intentionally simple, so critical items like OTPs and links were frequently lost when I copied the next item. I built Holdboard to solve this gap with a product that feels quick during normal typing, but reliable and private when content is sensitive.',
            points: [
              'Primary goal: preserve useful copied content across rapid context switching.',
              'Product goal: reduce tap count between copy, organize, and reuse operations.',
              'Security goal: protect sensitive entries without degrading common flows.',
            ],
          },
          {
            title: 'App workflow',
            body: 'The app is designed as a loop users repeat all day, not as a one-time archive. Every step optimizes for fast return-to-task behavior.',
            points: [
              'Capture: user copies content, then opens Holdboard app or keyboard extension to save it intentionally.',
              'Normalize: clip is converted into a consistent model (type, source, timestamp, metadata).',
              'Classify: clip is assigned to group/tag so retrieval remains predictable at scale.',
              'Protect: users can lock entries behind Face ID and separate private from regular clips.',
              'Retrieve: from keyboard or app, user pastes/copies instantly with minimal context switching.',
              'Retain/Clean: optional auto-delete policies remove stale clips and keep vault quality high.',
            ],
          },
          {
            title: 'Architecture overview',
            body: 'Holdboard is intentionally split into small modules so each responsibility is isolated and easier to harden. This reduced regression risk while iterating quickly.',
            points: [
              'Main App module: library view, tagging, edit/delete actions, settings, Face ID gate, and retention controls.',
              'Keyboard Extension module: low-latency list rendering, quick search/filter, and immediate paste/copy actions.',
              'Storage module: normalized clip schema, duplicate detection, ordering, and policy-based expiry.',
              'Security module: lock state transitions, protected action checks, and sensitive-surface masking.',
              'Sync boundary: app and keyboard share only necessary data paths to reduce accidental leak/overexposure.',
            ],
          },
          {
            title: 'Main challenge: keyboard extension',
            body: 'The keyboard extension was the hardest engineering area. It runs in a constrained environment where users still expect instant response. Any delay feels broken because this happens mid-typing.',
            points: [
              'Runtime constraints: tighter memory/time limits than the full app made heavy UI/state patterns unsafe.',
              'State handoff: app-to-keyboard communication required strict boundaries to avoid stale or inconsistent data.',
              'UX pressure: retrieval had to be near-instant even with large clip history.',
              'Privacy pressure: sensitive clips needed guardrails without interrupting every normal action.',
            ],
          },
          {
            title: 'GIF support and richer media handling',
            body: 'After stabilizing text-first workflows, I implemented GIF/media support. This looked simple in UI, but required repeated fixes around rendering and payload handling in keyboard context.',
            points: [
              'Rendering consistency issues appeared across different source apps and paste targets.',
              'Preview behavior needed fallback logic when full media rendering was not reliable.',
              'Insertion reliability required multiple passes to prevent partial/failed paste outcomes.',
            ],
          },
          {
            title: 'Auto-delete logic: repeated bug-fix cycles',
            body: 'Auto-delete looked straightforward but became one of the most iterative systems. Early logic removed clips in edge cases where users expected retention.',
            points: [
              'Initial bug class: expiry and manual actions collided, causing unexpected removals.',
              'Second bug class: ordering/race issues created inconsistent cleanup timing.',
              'Fix approach: separate retention evaluation from UI mutation path and revalidate before delete.',
              'Outcome: predictable retention behavior with lower risk of accidental loss.',
            ],
          },
          {
            title: 'Background limits and App Store constraints',
            body: 'A core constraint is platform policy. Continuous, always-on clipboard background behavior is not a safe shipping strategy for App Store review. Product design had to align with acceptable iOS behavior from day one.',
            points: [
              'The app does not attempt permanent background clipboard monitoring.',
              'Capture is intentionally user-driven: open app or keyboard to save/manage clips.',
              'This keeps the feature set policy-safe and lowers rejection risk.',
              'Tradeoff accepted: slightly more explicit user action in exchange for reliable, shippable behavior.',
            ],
          },
          {
            title: 'Build outcome',
            body: 'Holdboard shipped as a keyboard-first clipboard system focused on practical reliability: fast retrieval, explicit capture, and strong privacy boundaries. Instead of overpromising impossible background behavior, the product is scoped around what iOS supports consistently and what can pass review safely. That scope made the app stable enough for real daily use.',
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

      <section className="relative z-10 max-w-4xl mx-auto px-5 md:px-6 pb-20 md:pb-24">
        <div className="rounded-3xl border border-zinc-200 bg-white/85 p-6 md:p-8 text-center shadow-sm">
          <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-black">Get Holdboard</p>
          <h3 className="mt-2 text-xl md:text-2xl font-bold tracking-tight text-black">Download the app and review privacy details</h3>
          <div className="mt-5 flex flex-col items-center gap-3">
            <AppStoreBadge href="https://apps.apple.com/us/app/holdboard/id6761117827" />
            <Link
              href="/privacy/holdboard"
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
