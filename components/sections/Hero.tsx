'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { triggerSubtleHaptic } from '@/components/utils/subtleHaptics';

const GREETINGS = ['HELLO,', 'HOLA,', 'NAMASTE,', 'BONJOUR,', 'CIAO,', 'SALAAM,'];

export default function Hero({ introActive = false }: { introActive?: boolean }) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [index, setIndex] = useState(0);
  const [typedGreeting, setTypedGreeting] = useState('');
  const [phase, setPhase] = useState<'typing' | 'holding' | 'deleting'>('typing');
  const [isHeroInView, setIsHeroInView] = useState(true);
  const [timeLabel, setTimeLabel] = useState('');
  const [dateLabel, setDateLabel] = useState('');

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 120, damping: 20 });
  const py = useSpring(my, { stiffness: 120, damping: 20 });

  const titleX = useTransform(px, [-40, 40], [-6, 6]);
  const titleY = useTransform(py, [-40, 40], [-4, 4]);
  const cardX = useTransform(px, [-40, 40], [6, -6]);
  const cardY = useTransform(py, [-40, 40], [4, -4]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeLabel(
        now.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
      setDateLabel(
        now.toLocaleDateString([], {
          weekday: 'short',
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        })
      );
    };
    updateTime();
    const timer = window.setInterval(updateTime, 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const target = sectionRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroInView(entry.isIntersecting);
      },
      { threshold: 0.45 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isHeroInView && phase === 'typing' && typedGreeting.length > 0) {
      triggerSubtleHaptic();
    }
  }, [isHeroInView, phase, typedGreeting]);

  useEffect(() => {
    const activeGreeting = GREETINGS[index];
    let delay = 90;

    if (phase === 'holding') delay = 900;
    if (phase === 'deleting') delay = 45;

    const timer = window.setTimeout(() => {
      if (phase === 'typing') {
        if (typedGreeting.length < activeGreeting.length) {
          setTypedGreeting(activeGreeting.slice(0, typedGreeting.length + 1));
          return;
        }
        setPhase('holding');
        return;
      }

      if (phase === 'holding') {
        setPhase('deleting');
        return;
      }

      if (phase === 'deleting') {
        if (typedGreeting.length > 0) {
          setTypedGreeting(activeGreeting.slice(0, typedGreeting.length - 1));
          return;
        }

        setIndex((prev) => (prev + 1) % GREETINGS.length);
        setPhase('typing');
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [index, phase, typedGreeting]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen flex items-start lg:items-center px-6 max-w-7xl mx-auto pt-32 md:pt-28 lg:pt-24 pb-8"
      onMouseMove={(e) => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        mx.set((e.clientX - rect.left - rect.width / 2) / 14);
        my.set((e.clientY - rect.top - rect.height / 2) / 14);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
    >
      <div className="relative z-10 grid w-full grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
        <motion.div className="lg:col-span-7" style={{ x: titleX, y: titleY }}>
          <div className="h-14 md:h-24 overflow-y-hidden flex items-end">
            <motion.h2
              className="typing-greeting text-3xl md:text-6xl font-semibold tracking-tight text-zinc-700 italic pr-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              aria-live="polite"
            >
              <span className="greeting-script inline-flex items-baseline">
                {typedGreeting}
                <span className="typing-caret" aria-hidden>|</span>
              </span>
              <span className="ml-2 font-sans font-semibold not-italic">I&apos;m</span>
            </motion.h2>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 22, filter: 'blur(8px)', scale: 0.94 }}
            animate={
              introActive
                ? { opacity: 1, y: 0, filter: 'blur(0px)', scale: [0.94, 1.06, 1] }
                : { opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }
            }
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: introActive ? 0.82 : 0.45, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-8xl font-bold mt-1.5 mb-5 md:mb-6 tracking-tight text-black leading-[0.9] md:leading-[0.86] text-balance"
          >
            Srivatsav.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-5 md:mb-6 max-w-3xl text-base md:text-xl font-normal tracking-tight text-zinc-700 leading-tight"
          >
            <p>
             I build apps for fun and ship products that make daily life easier. I care about clean UI, smooth interactions, and things that just work.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:col-span-5 xl:col-span-4 lg:justify-self-end w-full max-w-[300px]"
          style={{ x: cardX, y: cardY }}
          initial={{ opacity: 0, y: 16, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, delay: 0.12 }}
        >
          <div className="glass-surface rounded-[22px] pl-3.5 pr-2.5 py-3.5 text-center md:rounded-[24px] md:pl-4 md:pr-3 md:py-4">
            <p className="text-[9px] font-black uppercase tracking-[0.24em] text-zinc-400">Local Time / IST</p>
            <h4 className="mt-1.5 text-[1.7rem] md:text-[2rem] font-mono font-bold leading-none tracking-tight text-black tabular-nums">{timeLabel}</h4>
            <p className="mt-1.5 text-[10px] font-semibold tracking-wide text-zinc-600">{dateLabel}</p>
            <div className="mt-2.5 mx-auto h-px w-[92%] bg-zinc-200/80" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
