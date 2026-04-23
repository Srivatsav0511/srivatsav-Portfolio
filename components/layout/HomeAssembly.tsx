'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
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
  const [showWhiteReveal, setShowWhiteReveal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const introActive = playIconIntro && !reduceMotion;
  const iconRainItems = isMobile ? ICON_RAIN_ITEMS_MOBILE : ICON_RAIN_ITEMS_DESKTOP;

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const shouldPlay = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!shouldPlay) return;

    const startIntro = (withShock: boolean) => {
      setShowBootIntro(true);
      setPlayIconIntro(true);
      if (!withShock) return;
      try {
        const hadShock = window.sessionStorage.getItem(FIRST_OPEN_SHOCK_KEY) === '1';
        if (!hadShock) {
          window.sessionStorage.setItem(FIRST_OPEN_SHOCK_KEY, '1');
          triggerShockHaptic();
        } else {
          triggerImpactHaptic();
        }
      } catch {
        triggerImpactHaptic();
      }
    };

    const isTouchPrimary = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    if (isTouchPrimary) {
      const onFirstTouchStart = () => {
        startIntro(true);
        window.removeEventListener('pointerdown', onFirstTouchStart);
      };
      window.addEventListener('pointerdown', onFirstTouchStart, { passive: true });
      return () => {
        window.removeEventListener('pointerdown', onFirstTouchStart);
      };
    }

    const startTimer = window.setTimeout(() => {
      startIntro(false);
    }, 0);

    return () => {
      setPlayIconIntro(false);
      setShowBootIntro(false);
      window.clearTimeout(startTimer);
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
    const doneTimer = window.setTimeout(() => {
      setShowWhiteReveal(true);
      setPlayIconIntro(false);
      setShowBootIntro(false);
    }, introDurationMs);

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
    const entryImpactTimers = iconRainItems.map((item) =>
      window.setTimeout(pulseImpact, Math.floor((item.delay + item.duration * 0.2) * 1000))
    );

    return () => {
      window.clearTimeout(doneTimer);
      sideImpactTimers.forEach((timer) => window.clearTimeout(timer));
      floorImpactTimers.forEach((timer) => window.clearTimeout(timer));
      entryImpactTimers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [playIconIntro, reduceMotion, iconRainItems]);

  useEffect(() => {
    if (!showWhiteReveal) return;
    const revealTimer = window.setTimeout(() => {
      setShowWhiteReveal(false);
    }, 900);
    return () => window.clearTimeout(revealTimer);
  }, [showWhiteReveal]);

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
              className="absolute inset-0 bg-zinc-950"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
            />
          ) : null}
          <motion.div
            className={`absolute inset-0 ${showBootIntro ? 'bg-transparent' : 'bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.95),rgba(255,255,255,0.15)_42%,rgba(255,255,255,0)_72%)]'}`}
            initial={{ opacity: 1 }}
            animate={{ opacity: showBootIntro ? 0 : 0 }}
            transition={{ duration: reduceMotion ? 0.2 : 1.9, ease: [0.22, 1, 0.36, 1] }}
          />
          {iconRainItems.map((item, idx) => (
            <motion.div
              key={`${item.src}-${idx}`}
              className="absolute top-[-26%] will-change-transform"
              style={{ left: item.left, width: item.size, height: item.size }}
              initial={{ x: 0, y: '-28vh', rotate: item.spin[0], scale: 0.8, opacity: 0 }}
              animate={{
                x: item.xPath,
                y: ['-24vh', '44vh', '96vh', '124vh'],
                rotate: item.spin,
                scale: [0.86, 1, 1.08, 0.9],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: item.duration,
                delay: item.delay,
                ease: [0.16, 0.92, 0.32, 1],
                opacity: { duration: item.duration + 0.16, delay: item.delay },
                times: [0, 0.52, 0.88, 1],
              }}
            >
              <motion.div
                className="relative h-full w-full overflow-hidden rounded-[22px] bg-white/85 shadow-[0_34px_70px_-40px_rgba(15,23,42,0.85)] backdrop-blur-xl"
                animate={{ scale: [1, 1, 1.1, 0.98], boxShadow: ['0_34px_70px_-40px_rgba(15,23,42,0.85)', '0_34px_70px_-40px_rgba(15,23,42,0.85)', '0_20px_44px_-24px_rgba(15,23,42,0.95)', '0_10px_24px_-18px_rgba(15,23,42,0.7)'] }}
                transition={{ duration: item.duration, delay: item.delay, times: [0, item.sideHitAt, item.floorHitAt, 1] }}
              >
                <Image src={item.src} alt="App icon" fill sizes="68px" className="object-contain p-1.5" priority />
              </motion.div>
            </motion.div>
          ))}
        </div>
      ) : null}

      <AnimatePresence>
        {showWhiteReveal ? (
          <motion.div
            className="pointer-events-none fixed inset-0 z-[285] bg-[var(--background)]"
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            exit={{ y: '-100%' }}
            transition={{ duration: reduceMotion ? 0.01 : 0.82, ease: [0.16, 1, 0.3, 1] }}
          />
        ) : null}
      </AnimatePresence>

      <Navbar />

      <motion.div
        className={`relative z-10 ${showBootIntro || showWhiteReveal ? 'pointer-events-none' : ''}`}
        initial={{ opacity: 0, filter: 'blur(4px)' }}
        animate={{ opacity: showBootIntro || showWhiteReveal ? 0 : 1, filter: showBootIntro || showWhiteReveal ? 'blur(4px)' : 'blur(0px)' }}
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
