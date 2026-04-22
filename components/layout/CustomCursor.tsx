'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { MousePointer2 } from 'lucide-react';

const CHIP_WIDTH = 220;
const CHIP_HEIGHT = 38;
const VIEWPORT_PADDING = 16;
const ESCAPE_RADIUS = 130;
const ESCAPE_DISTANCE = 150;

export default function CustomCursor() {
  const [enabled] = useState(() => {
    if (typeof window === 'undefined') return false;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const fine = window.matchMedia('(pointer:fine)').matches;
    return !reduce && fine;
  });
  const [visible, setVisible] = useState(false);

  const chipX = useMotionValue(-400);
  const chipY = useMotionValue(-400);
  const x = useSpring(chipX, { stiffness: 320, damping: 28, mass: 0.6 });
  const y = useSpring(chipY, { stiffness: 320, damping: 28, mass: 0.6 });

  useEffect(() => {
    if (!enabled) return;

    const heroEl = document.getElementById('about');
    if (!heroEl) return;

    const getHeroRect = () => heroEl.getBoundingClientRect();
    const clampX = (value: number) => {
      const rect = getHeroRect();
      const minX = rect.left + VIEWPORT_PADDING;
      const maxX = rect.right - CHIP_WIDTH - VIEWPORT_PADDING;
      return Math.min(Math.max(value, minX), maxX);
    };
    const clampY = (value: number) => {
      const rect = getHeroRect();
      const minY = rect.top + VIEWPORT_PADDING;
      const maxY = rect.bottom - CHIP_HEIGHT - VIEWPORT_PADDING;
      return Math.min(Math.max(value, minY), maxY);
    };

    const initialRect = getHeroRect();
    chipX.set(clampX(initialRect.left + initialRect.width * 0.62));
    chipY.set(clampY(initialRect.top + initialRect.height * 0.34));

    const onMove = (e: PointerEvent) => {
      const cursorX = e.clientX;
      const cursorY = e.clientY;
      const rect = getHeroRect();
      const inHero = cursorX >= rect.left && cursorX <= rect.right && cursorY >= rect.top && cursorY <= rect.bottom;

      if (!inHero) {
        setVisible(false);
        return;
      }

      setVisible(true);

      const currentX = chipX.get();
      const currentY = chipY.get();
      const centerX = currentX + CHIP_WIDTH / 2;
      const centerY = currentY + CHIP_HEIGHT / 2;

      const dx = centerX - cursorX;
      const dy = centerY - cursorY;
      const distance = Math.hypot(dx, dy);

      if (distance < ESCAPE_RADIUS) {
        const baseAngle = Math.atan2(dy || Math.random() - 0.5, dx || Math.random() - 0.5);
        const angle = baseAngle + (Math.random() - 0.5) * 0.5;
        const nextX = currentX + Math.cos(angle) * ESCAPE_DISTANCE;
        const nextY = currentY + Math.sin(angle) * ESCAPE_DISTANCE;
        chipX.set(clampX(nextX));
        chipY.set(clampY(nextY));
      }
    };

    const onPointerLeaveViewport = () => setVisible(false);
    const onResize = () => {
      chipX.set(clampX(chipX.get()));
      chipY.set(clampY(chipY.get()));
    };
    const onScroll = () => {
      chipX.set(clampX(chipX.get()));
      chipY.set(clampY(chipY.get()));
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('blur', onPointerLeaveViewport);
    document.addEventListener('mouseleave', onPointerLeaveViewport);
    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('blur', onPointerLeaveViewport);
      document.removeEventListener('mouseleave', onPointerLeaveViewport);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
    };
  }, [chipX, chipY, enabled]);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-[220] hidden md:flex items-center gap-2.5"
      style={{ x, y }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.9 }}
      transition={{ duration: 0.2 }}
    >
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-[8px] border border-sky-500/60 bg-white/95 text-sky-600 shadow-[0_12px_28px_-16px_rgba(2,132,199,0.65)]">
        <MousePointer2 size={14} />
      </span>
      <span className="rounded-full border border-zinc-200 bg-white/95 px-3.5 py-1.5 text-xs font-semibold tracking-tight text-zinc-900 shadow-[0_18px_44px_-28px_rgba(15,23,42,0.75)] backdrop-blur-sm">
        Srivatsav Karamala
      </span>
    </motion.div>
  );
}
