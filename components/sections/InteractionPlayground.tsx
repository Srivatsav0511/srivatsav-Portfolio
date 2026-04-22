'use client';

import { motion } from 'framer-motion';
import { Sparkles, Waves, Zap } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { triggerSubtleHaptic } from '@/components/utils/subtleHaptics';

type Props = {
  studioMode: boolean;
  setStudioMode: (value: boolean) => void;
};

export default function InteractionPlayground({ studioMode, setStudioMode }: Props) {
  const runRipple = () => {
    triggerSubtleHaptic();
    document.documentElement.animate(
      [
        { filter: 'brightness(1)' },
        { filter: 'brightness(1.04)' },
        { filter: 'brightness(1)' },
      ],
      { duration: 320, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' }
    );
  };

  return (
    <section id="lab" className="mx-auto max-w-7xl px-6 py-24 md:py-28">
      <SectionHeading title="Interaction Playground" subtitle="A live zone to feel motion, haptics, and tactile behavior before it ships into products." />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
        <motion.article
          whileHover={{ y: -4 }}
          className="rounded-[26px] border border-white/85 bg-white/76 p-5 shadow-[0_26px_70px_-50px_rgba(15,23,42,0.75)] backdrop-blur-xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-zinc-500">
            <Sparkles size={12} />
            Studio Mode
          </div>
          <h3 className="mt-4 text-xl font-semibold tracking-tight text-zinc-900">Motion Amplifier</h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600">Switch between balanced mode and production-designer mode with stronger depth and tactile intensity.</p>
          <button
            type="button"
            data-cursor={studioMode ? 'Studio On' : 'Studio Off'}
            onClick={() => {
              setStudioMode(!studioMode);
              triggerSubtleHaptic();
            }}
            className={`mt-5 inline-flex rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.12em] transition-colors ${
              studioMode ? 'bg-zinc-900 text-white' : 'bg-white border border-zinc-300 text-zinc-700 hover:border-zinc-900 hover:text-zinc-900'
            }`}
          >
            Studio {studioMode ? 'On' : 'Off'}
          </button>
        </motion.article>

        <motion.article
          whileHover={{ y: -4 }}
          className="rounded-[26px] border border-white/85 bg-white/76 p-5 shadow-[0_26px_70px_-50px_rgba(15,23,42,0.75)] backdrop-blur-xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-zinc-500">
            <Zap size={12} />
            Haptic Test
          </div>
          <h3 className="mt-4 text-xl font-semibold tracking-tight text-zinc-900">Pulse Check</h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600">Test tactile micro-feedback rhythm tuned for intentional clicks, state changes, and navigation actions.</p>
          <button
            type="button"
            data-cursor="Pulse"
            onClick={runRipple}
            className="mt-5 inline-flex rounded-full bg-blue-600 px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-white transition-colors hover:bg-blue-500"
          >
            Trigger Pulse
          </button>
        </motion.article>

        <motion.article
          whileHover={{ y: -4 }}
          className="rounded-[26px] border border-white/85 bg-white/76 p-5 shadow-[0_26px_70px_-50px_rgba(15,23,42,0.75)] backdrop-blur-xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-zinc-500">
            <Waves size={12} />
            Flow Shortcut
          </div>
          <h3 className="mt-4 text-xl font-semibold tracking-tight text-zinc-900">Command Palette</h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600">Use keyboard-first navigation. Press <span className="font-bold text-zinc-900">⌘K</span> on Mac or <span className="font-bold text-zinc-900">Ctrl+K</span> on Windows.</p>
          <p className="mt-5 text-[11px] font-black uppercase tracking-[0.12em] text-zinc-500">Jump faster, think less.</p>
        </motion.article>
      </div>
    </section>
  );
}
