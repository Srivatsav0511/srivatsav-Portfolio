'use client';

import { useEffect, useState } from 'react';
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import Image from 'next/image';
import AnimatedBackground from '@/components/layout/AnimatedBackground';
import Contact from '@/components/sections/Contact';
import Hero from '@/components/sections/Hero';
import Navbar from '@/components/layout/Navbar';
import WaveDivider from '@/components/layout/WaveDivider';
import Work from '@/components/sections/Work';
import { triggerImpactHaptic, triggerShockHaptic, triggerSubtleHaptic } from '@/components/utils/subtleHaptics';

type IconDropItem = {
  src: string;
  left: string;
  size: number;
  delay: number;
  duration: number;
  xPath: [number, number, number, number];
  sideHitAt: number;
  floorHitAt: number;
  spin: [number, number, number, number];
};

const FIRST_OPEN_SHOCK_KEY = 'home-intro-shock-v1';

const ICON_RAIN_ITEMS_DESKTOP = [
  {
    src: '/holdboard/holdboardicon.png',
    left: '10%',
    size: 62,
    delay: 0.02,
    duration: 1.08,
    xPath: [0, -28, 20, -6],
    sideHitAt: 0.5,
    floorHitAt: 0.86,
    spin: [-16, -28, -6, 10],
  },
  {
    src: '/factread/factread-Icon.png',
    left: '24%',
    size: 66,
    delay: 0.08,
    duration: 1.14,
    xPath: [0, 24, -16, 5],
    sideHitAt: 0.5,
    floorHitAt: 0.88,
    spin: [-10, 20, -8, 12],
  },
  {
    src: '/moneyformula/moneyformula-icon.png',
    left: '38%',
    size: 64,
    delay: 0.14,
    duration: 1.1,
    xPath: [0, 30, -18, 6],
    sideHitAt: 0.5,
    floorHitAt: 0.88,
    spin: [-14, 22, -10, 10],
  },
  {
    src: '/pureclick/pureclick-icon.png',
    left: '52%',
    size: 68,
    delay: 0.2,
    duration: 1.16,
    xPath: [0, -26, 17, -6],
    sideHitAt: 0.5,
    floorHitAt: 0.9,
    spin: [-10, -22, 4, 16],
  },
  {
    src: '/holdboard/holdboardicon.png',
    left: '68%',
    size: 58,
    delay: 0.28,
    duration: 1.08,
    xPath: [0, 24, -16, 5],
    sideHitAt: 0.5,
    floorHitAt: 0.86,
    spin: [-16, 19, -8, 8],
  },
  {
    src: '/factread/factread-Icon.png',
    left: '82%',
    size: 62,
    delay: 0.34,
    duration: 1.12,
    xPath: [0, -30, 20, -8],
    sideHitAt: 0.5,
    floorHitAt: 0.9,
    spin: [-14, -22, 8, 14],
  },
] as const satisfies IconDropItem[];

const ICON_RAIN_ITEMS_MOBILE = [
  {
    src: '/holdboard/holdboardicon.png',
    left: '4%',
    size: 60,
    delay: 0.05,
    duration: 1.92,
    xPath: [0, -120, 34, -10],
    sideHitAt: 0.39,
    floorHitAt: 0.9,
    spin: [-18, -32, -10, 8],
  },
  {
    src: '/factread/factread-Icon.png',
    left: '20%',
    size: 64,
    delay: 0.13,
    duration: 1.98,
    xPath: [0, 140, -30, 8],
    sideHitAt: 0.39,
    floorHitAt: 0.9,
    spin: [-12, 22, -8, 10],
  },
  {
    src: '/moneyformula/moneyformula-icon.png',
    left: '36%',
    size: 62,
    delay: 0.2,
    duration: 1.96,
    xPath: [0, -132, 32, -8],
    sideHitAt: 0.39,
    floorHitAt: 0.9,
    spin: [-16, -24, -8, 9],
  },
  {
    src: '/pureclick/pureclick-icon.png',
    left: '52%',
    size: 66,
    delay: 0.28,
    duration: 2.02,
    xPath: [0, 132, -34, 10],
    sideHitAt: 0.39,
    floorHitAt: 0.9,
    spin: [-14, 24, -7, 12],
  },
  {
    src: '/holdboard/holdboardicon.png',
    left: '68%',
    size: 58,
    delay: 0.35,
    duration: 1.98,
    xPath: [0, -120, 28, -7],
    sideHitAt: 0.39,
    floorHitAt: 0.9,
    spin: [-14, -22, -6, 9],
  },
  {
    src: '/factread/factread-Icon.png',
    left: '84%',
    size: 60,
    delay: 0.42,
    duration: 2.0,
    xPath: [0, 118, -30, 8],
    sideHitAt: 0.39,
    floorHitAt: 0.9,
    spin: [-16, 24, -8, 11],
  },
] as const satisfies IconDropItem[];

export default function HomeAssembly() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progressX = useSpring(scrollYProgress, { stiffness: 110, damping: 25, mass: 0.35 });

  const [playIconIntro, setPlayIconIntro] = useState(false);
  const [showBootIntro, setShowBootIntro] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const introActive = playIconIntro && !reduceMotion;
  const iconRainItems = isMobile ? ICON_RAIN_ITEMS_MOBILE : ICON_RAIN_ITEMS_DESKTOP;

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const shouldPlay = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!shouldPlay) return;

    const startTimer = window.setTimeout(() => {
      setShowBootIntro(true);
      setPlayIconIntro(true);
    }, 0);

    const introTotalMs = 3000;
    const doneTimer = window.setTimeout(() => {
      setPlayIconIntro(false);
      setShowBootIntro(false);
    }, introTotalMs);

    const triggerFirstTouchShock = () => {
      try {
        const hadShock = window.sessionStorage.getItem(FIRST_OPEN_SHOCK_KEY) === '1';
        if (!hadShock) {
          window.sessionStorage.setItem(FIRST_OPEN_SHOCK_KEY, '1');
          triggerShockHaptic();
        }
      } catch {
        triggerImpactHaptic();
      }
      window.removeEventListener('pointerdown', triggerFirstTouchShock);
    };

    window.addEventListener('pointerdown', triggerFirstTouchShock, { passive: true });
    return () => {
      window.clearTimeout(startTimer);
      window.clearTimeout(doneTimer);
      window.removeEventListener('pointerdown', triggerFirstTouchShock);
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const media = window.matchMedia('(max-width: 768px)');
    const sync = () => setIsMobile(media.matches);
    sync();
    media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType !== 'touch') return;
      const target = event.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest('button, a, [role="button"], [data-haptic="true"]');
      if (!interactive) return;
      triggerSubtleHaptic();
    };

    window.addEventListener('pointerdown', onPointerDown, { passive: true });
    return () => window.removeEventListener('pointerdown', onPointerDown);
  }, []);

  useEffect(() => {
    if (!playIconIntro || reduceMotion) return;

    const introDurationMs =
      Math.max(...iconRainItems.map((item) => Math.floor((item.delay + item.duration) * 1000))) + 220;
    const doneTimer = window.setTimeout(() => setPlayIconIntro(false), introDurationMs);

    const playImpactAudio = () => {
      try {
        const AudioCtx = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(120, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(68, ctx.currentTime + 0.08);
        gain.gain.setValueAtTime(0.0001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.09, ctx.currentTime + 0.012);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.09);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.1);
      } catch {
        // Ignore when autoplay/audio contexts are blocked.
      }
    };

    const pulseImpact = () => {
      triggerImpactHaptic();
      playImpactAudio();
    };

    const sideImpactTimers = iconRainItems.map((item) =>
      window.setTimeout(pulseImpact, Math.floor((item.delay + item.duration * item.sideHitAt) * 1000))
    );
    const floorImpactTimers = iconRainItems.map((item) =>
      window.setTimeout(pulseImpact, Math.floor((item.delay + item.duration * item.floorHitAt) * 1000))
    );

    return () => {
      window.clearTimeout(doneTimer);
      sideImpactTimers.forEach((timer) => window.clearTimeout(timer));
      floorImpactTimers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [playIconIntro, reduceMotion, iconRainItems]);

  return (
    <main className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-zinc-200 overflow-x-clip">
      <motion.div
        className="fixed left-0 top-0 z-[230] h-[3px] w-full origin-left bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-400"
        style={{ scaleX: progressX }}
      />
      <AnimatedBackground />
      <div className="pointer-events-none absolute inset-0 opacity-[0.3] md:opacity-[0.22] [background-size:24px_24px] [background-image:linear-gradient(to_right,rgba(161,161,170,0.22)_1px,transparent_1px),linear-gradient(to_bottom,rgba(161,161,170,0.2)_1px,transparent_1px)]" />

      {playIconIntro ? (
        <div
          className={`pointer-events-none fixed inset-0 overflow-hidden ${showBootIntro ? 'z-[290] bg-zinc-950' : 'z-[190]'}`}
        >
          {showBootIntro ? (
            <motion.div
              className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(56,189,248,0.18),rgba(2,6,23,0.96)_52%,rgba(2,6,23,1)_100%)]"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
            />
          ) : null}
          <motion.div
            className={`absolute inset-0 ${showBootIntro ? 'bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),rgba(255,255,255,0.02)_42%,rgba(255,255,255,0)_72%)]' : 'bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.95),rgba(255,255,255,0.15)_42%,rgba(255,255,255,0)_72%)]'}`}
            initial={{ opacity: 1 }}
            animate={{ opacity: showBootIntro ? 0.35 : 0 }}
            transition={{ duration: reduceMotion ? 0.2 : 1.9, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.div
            className="absolute inset-x-0 top-0 h-2 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.85),rgba(56,189,248,0.2),rgba(56,189,248,0))]"
            animate={{ opacity: [0.2, 0.8, 0.24], scaleX: [0.95, 1.04, 0.96] }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute inset-y-0 left-0 w-1.5 bg-[linear-gradient(180deg,rgba(56,189,248,0.12),rgba(56,189,248,0.65),rgba(56,189,248,0.12))] blur-[1px]"
            animate={{ opacity: [0.15, 0.75, 0.18, 0.82, 0.1], scaleY: [1, 1.05, 1, 1.04, 1] }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute inset-y-0 right-0 w-1.5 bg-[linear-gradient(180deg,rgba(56,189,248,0.12),rgba(56,189,248,0.65),rgba(56,189,248,0.12))] blur-[1px]"
            animate={{ opacity: [0.15, 0.72, 0.18, 0.84, 0.12], scaleY: [1, 1.05, 1, 1.04, 1] }}
            transition={{ duration: 1.85, ease: 'easeInOut', delay: 0.04 }}
          />
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-3 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.58),rgba(56,189,248,0.1),rgba(56,189,248,0))]"
            animate={{ opacity: [0.14, 0.55, 0.2, 0.72, 0.1], scaleX: [0.9, 1.03, 0.95, 1.06, 0.9] }}
            transition={{ duration: 1.9, ease: 'easeInOut' }}
          />
          {iconRainItems.map((item, idx) => (
            <motion.div
              key={`${item.src}-${idx}`}
              className="absolute top-[-15%] will-change-transform"
              style={{ left: item.left, width: item.size, height: item.size }}
              initial={{ x: 0, y: '-18vh', rotate: item.spin[0], scale: 0.82, opacity: 0 }}
              animate={{
                x: item.xPath,
                y: ['-12vh', '62vh', '96vh', '108vh'],
                rotate: item.spin,
                scale: [0.9, 1, 1.06, 0.93],
                opacity: [0, 1, 1, 0.2],
              }}
              transition={{
                duration: item.duration,
                delay: item.delay,
                ease: [0.17, 0.84, 0.44, 1],
                opacity: { duration: item.duration + 0.16, delay: item.delay },
                times: [0, 0.52, 0.88, 1],
              }}
            >
              <motion.div
                className="relative h-full w-full overflow-hidden rounded-[22px] border border-white/75 bg-white/85 shadow-[0_34px_70px_-40px_rgba(15,23,42,0.85)] backdrop-blur-xl"
                animate={{ scale: [1, 1, 1.1, 0.98], boxShadow: ['0_34px_70px_-40px_rgba(15,23,42,0.85)', '0_34px_70px_-40px_rgba(15,23,42,0.85)', '0_20px_44px_-24px_rgba(15,23,42,0.95)', '0_10px_24px_-18px_rgba(15,23,42,0.7)'] }}
                transition={{ duration: item.duration, delay: item.delay, times: [0, item.sideHitAt, item.floorHitAt, 1] }}
              >
                <Image src={item.src} alt="App icon" fill sizes="68px" className="object-contain p-1.5" priority />
              </motion.div>
            </motion.div>
          ))}
          {showBootIntro ? (
            <div className="absolute inset-0 z-20 flex items-center justify-center px-6">
              <motion.div
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="w-full max-w-[420px] rounded-[28px] border border-white/24 bg-white/6 px-5 py-6 text-center shadow-[0_30px_90px_-44px_rgba(8,47,73,0.72)] backdrop-blur-2xl"
              >
                <p className="text-[10px] font-black uppercase tracking-[0.34em] text-zinc-300">Experience Loading</p>
                <h3 className="mt-2 text-3xl md:text-[2.5rem] font-bold tracking-[0.02em] text-white">SRIVATSAV</h3>
                <p className="mt-2 text-xs md:text-sm font-medium text-zinc-300">Liquid glass motion · tactile intro · premium reveal</p>
                <div className="mx-auto mt-5 h-1.5 w-full max-w-[270px] overflow-hidden rounded-full bg-white/18">
                  <motion.div
                    className="h-full w-full origin-left bg-[linear-gradient(90deg,rgba(56,189,248,0.42),rgba(56,189,248,0.98),rgba(255,255,255,0.9))]"
                    initial={{ scaleX: 0.08, opacity: 0.5 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 2.25, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </motion.div>
            </div>
          ) : null}
        </div>
      ) : null}

      <Navbar />

      <motion.div
        className={`relative z-10 ${showBootIntro ? 'pointer-events-none' : ''}`}
        initial={{ opacity: 0, filter: 'blur(4px)' }}
        animate={{ opacity: showBootIntro ? 0 : 1, filter: showBootIntro ? 'blur(4px)' : 'blur(0px)' }}
        transition={{ duration: reduceMotion ? 0.01 : 0.72, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          initial={{ opacity: 0, y: 18, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: reduceMotion ? 0.01 : 0.62, delay: reduceMotion ? 0 : 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <Hero introActive={introActive} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scaleX: 0.94 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.9 }}
          transition={{ duration: reduceMotion ? 0.01 : 0.52 }}
        >
          <WaveDivider />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: reduceMotion ? 0.01 : 0.6, delay: reduceMotion ? 0 : 0.12 }}
        >
          <Work />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scaleX: 0.94 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.9 }}
          transition={{ duration: reduceMotion ? 0.01 : 0.52 }}
        >
          <WaveDivider />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: reduceMotion ? 0.01 : 0.6 }}
        >
          <Contact />
        </motion.div>
      </motion.div>
    </main>
  );
}
