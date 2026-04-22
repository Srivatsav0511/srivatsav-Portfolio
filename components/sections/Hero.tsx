'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { ShieldCheck, Layers3, Gauge, Globe } from 'lucide-react';
import { triggerSubtleHaptic } from '@/components/utils/subtleHaptics';

const GREETINGS = ['HELLO,', 'HOLA,', 'NAMASTE,', 'BONJOUR,', 'CIAO,', 'SALAAM,'];

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [index, setIndex] = useState(0);
  const [typedGreeting, setTypedGreeting] = useState('');
  const [phase, setPhase] = useState<'typing' | 'holding' | 'deleting'>('typing');
  const [isHeroInView, setIsHeroInView] = useState(true);
  const [time, setTime] = useState('');

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 120, damping: 20 });
  const py = useSpring(my, { stiffness: 120, damping: 20 });

  const titleX = useTransform(px, [-40, 40], [-6, 6]);
  const titleY = useTransform(py, [-40, 40], [-4, 4]);
  const cardX = useTransform(px, [-40, 40], [6, -6]);
  const cardY = useTransform(py, [-40, 40], [4, -4]);

  useEffect(() => {
    const clock = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }));
    }, 1000);
    return () => {
      clearInterval(clock);
    };
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
      className="relative min-h-screen flex flex-col justify-center px-6 max-w-7xl mx-auto pt-24 pb-8"
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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-center relative z-10">
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
            initial={{ opacity: 0, y: 22, filter: 'blur(5px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-5xl md:text-8xl font-bold mt-1.5 mb-5 md:mb-6 tracking-tight text-black leading-[0.9] md:leading-[0.86] text-balance"
          >
            Srivatsav.
            <span className="block mt-2.5 md:mt-3 text-xs md:text-sm text-zinc-500 font-medium tracking-normal max-w-xl">
              I build apps for fun and to help people solve real problems.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.52, delay: 0.12 }}
            className="max-w-2xl text-[15px] md:text-xl text-zinc-700 font-medium leading-relaxed"
          >
            I design and ship high-quality digital products with strong attention to detail, smooth interactions, and performance.
            I build mobile applications that feel reliable and premium in real use.
          </motion.p>

          <motion.svg viewBox="0 0 420 80" className="mt-8 w-[220px] text-zinc-800" fill="none" aria-hidden>
            <motion.path
              d="M8 50C35 24 44 62 70 40C90 20 102 14 116 52C126 71 143 26 156 23C166 21 170 55 186 56C211 57 215 18 236 17C262 16 255 64 282 59C314 54 310 31 332 31C351 31 351 49 376 49C391 49 399 41 411 35"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.4, ease: 'easeInOut' }}
            />
          </motion.svg>
        </motion.div>

        <motion.div className="lg:col-span-5 grid grid-cols-2 gap-3.5" style={{ x: cardX, y: cardY }}>
          <div className="col-span-2 glass-surface rounded-[24px] p-5 md:p-6">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Local Time / IST</p>
            <h4 className="text-3xl md:text-5xl font-mono font-bold text-black tracking-tighter tabular-nums mt-2">{time}</h4>
          </div>

          {[{ icon: ShieldCheck, title: 'Reliability', text: 'Production-ready code quality' }, { icon: Layers3, title: 'Design', text: 'System-first interface thinking' }, { icon: Gauge, title: 'Performance', text: 'Fast UX under real workloads' }, { icon: Globe, title: 'Coverage', text: 'Mobile, web, and AI workflows' }].map((item, i) => (
            <motion.div key={i} whileHover={{ y: -3 }} className="glass-surface rounded-3xl p-4">
              <item.icon className="text-zinc-700 mb-2.5 icon-stroke-anim" size={18} />
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-zinc-400 mb-2">{item.title}</p>
              <p className="text-xs md:text-sm font-semibold text-zinc-700">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
