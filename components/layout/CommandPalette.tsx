'use client';

import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Compass, Sparkles } from 'lucide-react';
import { triggerSubtleHaptic } from '@/components/utils/subtleHaptics';

type Props = {
  studioMode: boolean;
  setStudioMode: (value: boolean) => void;
};

type CommandItem = {
  label: string;
  run: () => void;
  hint: string;
};

function scrollToHash(hash: string) {
  const id = hash.replace('#', '');
  const node = document.getElementById(id);
  if (!node) return;
  node.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function CommandPalette({ studioMode, setStudioMode }: Props) {
  const [open, setOpen] = useState(false);

  const commands = useMemo<CommandItem[]>(
    () => [
      { label: 'Go to About', hint: '#about', run: () => scrollToHash('#about') },
      { label: 'Go to Pulse', hint: '#pulse', run: () => scrollToHash('#pulse') },
      { label: 'Go to Work', hint: '#work', run: () => scrollToHash('#work') },
      { label: 'Go to Lab', hint: '#lab', run: () => scrollToHash('#lab') },
      { label: 'Go to Contact', hint: '#contact', run: () => scrollToHash('#contact') },
      {
        label: studioMode ? 'Studio Mode: Turn Off' : 'Studio Mode: Turn On',
        hint: 'toggle',
        run: () => setStudioMode(!studioMode),
      },
    ],
    [setStudioMode, studioMode]
  );

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const isMacShortcut = event.metaKey && event.key.toLowerCase() === 'k';
      const isWinShortcut = event.ctrlKey && event.key.toLowerCase() === 'k';
      if (!isMacShortcut && !isWinShortcut) return;

      const activeTag = (document.activeElement as HTMLElement | null)?.tagName;
      if (activeTag === 'INPUT' || activeTag === 'TEXTAREA') return;

      event.preventDefault();
      setOpen((prev) => !prev);
      triggerSubtleHaptic();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[250] bg-zinc-950/35 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.99 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-20 w-full max-w-2xl rounded-[28px] border border-white/80 bg-white/88 p-4 shadow-[0_36px_90px_-55px_rgba(15,23,42,0.8)] backdrop-blur-2xl md:p-5"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between gap-3 border-b border-zinc-200/70 pb-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-zinc-500">
                <Compass size={12} />
                Command Palette
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full border border-zinc-300 bg-white px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-zinc-600"
              >
                Esc
              </button>
            </div>

            <div className="space-y-2">
              {commands.map((command) => (
                <button
                  key={command.label}
                  type="button"
                  data-cursor="Run"
                  onClick={() => {
                    command.run();
                    triggerSubtleHaptic();
                    setOpen(false);
                  }}
                  className="group flex w-full items-center justify-between rounded-2xl border border-zinc-200 bg-white/85 px-3.5 py-3 text-left transition-colors hover:border-zinc-900 hover:bg-zinc-900"
                >
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-800 transition-colors group-hover:text-white">
                    <Sparkles size={13} />
                    {command.label}
                  </span>
                  <span className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.12em] text-zinc-500 transition-colors group-hover:text-zinc-200">
                    {command.hint}
                    <ArrowUpRight size={12} />
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
