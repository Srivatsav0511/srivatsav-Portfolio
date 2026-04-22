'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [active, setActive] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const dotX = useSpring(x, { stiffness: 800, damping: 50 });
  const dotY = useSpring(y, { stiffness: 800, damping: 50 });
  const ringX = useSpring(x, { stiffness: 250, damping: 28 });
  const ringY = useSpring(y, { stiffness: 250, damping: 28 });

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const fine = window.matchMedia('(pointer:fine)').matches;
    if (reduce || !fine) return;

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const onOver = (e: Event) => {
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>('a,button,[data-cursor]');
      setActive(Boolean(el));
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
    };
  }, [x, y]);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[210] hidden md:block"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
        animate={{ scale: active ? 1.35 : 1, opacity: active ? 0.9 : 0.6 }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      >
        <div className="h-8 w-8 rounded-full border border-zinc-900/45 bg-white/20 backdrop-blur-sm" />
      </motion.div>

      <motion.div
        className="pointer-events-none fixed z-[220] hidden md:block"
        style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%' }}
        animate={{ scale: active ? 0.75 : 1 }}
        transition={{ duration: 0.2 }}
      >
        <div className="h-2 w-2 rounded-full bg-zinc-900" />
      </motion.div>
    </>
  );
}
