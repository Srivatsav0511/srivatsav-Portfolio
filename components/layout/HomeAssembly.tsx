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
const DESKTOP_INTRO_SLOWDOWN = 2.05;
const MOBILE_INTRO_SLOWDOWN = 1.45;
const INTRO_STAGGER_SLOWDOWN = 1.18;

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
  const [isMobile, setIsMobile] = useState(false);
  const introActive = playIconIntro && !reduceMotion;
  const iconRainItems = isMobile ? ICON_RAIN_ITEMS_MOBILE : ICON_RAIN_ITEMS_DESKTOP;
  const introSlowdown = isMobile ? MOBILE_INTRO_SLOWDOWN : DESKTOP_INTRO_SLOWDOWN;

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const shouldPlay = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!shouldPlay) return;

    const startIntro = (withShock: boolean) => {
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

    const getScaledDelayMs = (item: IconDropItem) => Math.floor(item.delay * INTRO_STAGGER_SLOWDOWN * 1000);
    const getScaledDurationMs = (item: IconDropItem) => Math.floor(item.duration * introSlowdown * 1000);
    const introDurationMs =
      Math.max(...iconRainItems.map((item) => getScaledDelayMs(item) + getScaledDurationMs(item))) + 260;
    const doneTimer = window.setTimeout(() => {
      setPlayIconIntro(false);
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
      window.setTimeout(pulseImpact, getScaledDelayMs(item) + Math.floor(getScaledDurationMs(item) * item.sideHitAt))
    );
    const floorImpactTimers = iconRainItems.map((item) =>
      window.setTimeout(pulseImpact, getScaledDelayMs(item) + Math.floor(getScaledDurationMs(item) * item.floorHitAt))
    );
    const entryImpactTimers = iconRainItems.map((item) =>
      window.setTimeout(pulseImpact, getScaledDelayMs(item) + Math.floor(getScaledDurationMs(item) * 0.24))
    );

    return () => {
      window.clearTimeout(doneTimer);
      sideImpactTimers.forEach((timer) => window.clearTimeout(timer));
      floorImpactTimers.forEach((timer) => window.clearTimeout(timer));
      entryImpactTimers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [playIconIntro, reduceMotion, iconRainItems, introSlowdown]);

  return (
    <main className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-zinc-200 overflow-x-clip">
      <motion.div
        className="fixed left-0 top-0 z-[230] h-[3px] w-full origin-left bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-400"
        style={{ scaleX: progressX }}
      />
      <AnimatedBackground />
      <div className="pointer-events-none absolute inset-0 opacity-[0.3] md:opacity-[0.22] [background-size:24px_24px] [background-image:linear-gradient(to_right,rgba(161,161,170,0.22)_1px,transparent_1px),linear-gradient(to_bottom,rgba(161,161,170,0.2)_1px,transparent_1px)]" />

      {playIconIntro ? (
        <div className="pointer-events-none fixed inset-0 z-[190] overflow-hidden">
          {iconRainItems.map((item, idx) => (
            <motion.div
              key={`${item.src}-${idx}`}
              className="absolute top-[-26%] will-change-transform"
              style={{ left: item.left, width: item.size, height: item.size }}
              initial={{ x: 0, y: '-28vh', rotate: item.spin[0], scale: 0.8, opacity: 0 }}
              animate={{
                x: [0, item.xPath[1] * 0.7, item.xPath[1], item.xPath[2], item.xPath[3], item.xPath[3] * 0.62, item.xPath[3] * 0.42],
                y: ['-28vh', '-8vh', '26vh', '68vh', '95vh', '84vh', '108vh'],
                rotate: [item.spin[0], item.spin[1] * 0.5, item.spin[1], item.spin[2], item.spin[3], item.spin[3] * 0.45, item.spin[3] * 0.2],
                scale: [0.84, 0.98, 1.02, 0.98, 1.08, 0.94, 0.96],
                opacity: [0, 0.95, 1, 1, 1, 0.96, 0],
              }}
              transition={{
                duration: item.duration * introSlowdown,
                delay: item.delay * INTRO_STAGGER_SLOWDOWN,
                ease: 'linear',
                times: [0, 0.12, 0.32, 0.64, 0.82, 0.9, 1],
              }}
            >
              <motion.div
                className="relative h-full w-full"
                animate={{
                  scale: [1, 1, 1, 1.01, 1.08, 0.92, 0.98],
                  filter: [
                    'drop-shadow(0 28px 40px rgba(15,23,42,0.22))',
                    'drop-shadow(0 28px 40px rgba(15,23,42,0.22))',
                    'drop-shadow(0 24px 36px rgba(15,23,42,0.3))',
                    'drop-shadow(0 18px 30px rgba(15,23,42,0.34))',
                    'drop-shadow(0 12px 24px rgba(15,23,42,0.38))',
                    'drop-shadow(0 10px 20px rgba(15,23,42,0.28))',
                    'drop-shadow(0 8px 16px rgba(15,23,42,0.18))',
                  ],
                }}
                transition={{
                  duration: item.duration * introSlowdown,
                  delay: item.delay * INTRO_STAGGER_SLOWDOWN,
                  ease: 'linear',
                  times: [0, 0.12, 0.32, 0.64, 0.82, 0.9, 1],
                }}
              >
                <Image src={item.src} alt="App icon" fill sizes="68px" className="object-contain" priority />
              </motion.div>
            </motion.div>
          ))}
        </div>
      ) : null}

      <Navbar />

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, filter: 'blur(4px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
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
