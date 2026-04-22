'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Disc3, Mic2 } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { triggerSubtleHaptic } from '@/components/utils/subtleHaptics';

type PulseItem = {
  title: string;
  status: string;
  summary: string;
  next: string;
  vibe: string;
  progress: number;
  icon: typeof Mic2;
};

const pulseItems: PulseItem[] = [
  {
    title: 'Announcer',
    status: 'Building',
    summary: 'Voice-forward app inspired by the recent graduation-video energy, focused on expressive announcements and crisp playback.',
    next: 'Finalizing tone packs and first-launch creation flow.',
    vibe: 'High energy, creator-first.',
    progress: 62,
    icon: Mic2,
  },
  {
    title: 'Mechanical Keyboard App',
    status: 'Building',
    summary: 'A tactile keyboard experience with punchy key feedback, premium themes, and a clean performance-first typing pipeline.',
    next: 'Shipping key sound profiles and haptic calibration presets.',
    vibe: 'Tactile, sharp, minimal.',
    progress: 48,
    icon: Disc3,
  },
];

export default function ProductPulse() {
  return (
    <section id="pulse" className="mx-auto max-w-7xl px-6 py-24 md:py-28">
      <SectionHeading title="Live Product Pulse" subtitle="What I am actively building right now, with real momentum and next shipping moves." />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
        {pulseItems.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 22, filter: 'blur(5px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
            onViewportEnter={() => triggerSubtleHaptic()}
            className="rounded-[26px] border border-white/80 bg-white/70 p-5 shadow-[0_24px_64px_-48px_rgba(15,23,42,0.8)] backdrop-blur-xl md:p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-zinc-500">
                <item.icon size={12} />
                {item.status}
              </div>
              <span className="rounded-full bg-zinc-900 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-white">{item.progress}%</span>
            </div>

            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-900">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">{item.summary}</p>

            <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-zinc-200">
              <motion.div
                className="h-full rounded-full bg-zinc-900"
                initial={{ width: 0 }}
                whileInView={{ width: `${item.progress}%` }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.8, delay: 0.1 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>

            <div className="mt-4 space-y-2 text-xs text-zinc-600">
              <p>
                <span className="font-bold uppercase tracking-[0.08em] text-zinc-900">Next</span> {item.next}
              </p>
              <p>
                <span className="font-bold uppercase tracking-[0.08em] text-zinc-900">Vibe</span> {item.vibe}
              </p>
            </div>

            <div className="mt-5 inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-[0.12em] text-zinc-800">
              In Progress
              <ArrowUpRight size={12} />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
