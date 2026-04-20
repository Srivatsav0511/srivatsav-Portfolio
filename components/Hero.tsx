'use client';

import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ShieldCheck, Layers3, Gauge, Globe } from 'lucide-react';

export default function Hero() {
  const greetings = ['HELLO,', 'HOLA,', 'NAMASTE,', 'BONJOUR,', 'CIAO,', 'SALAAM,'];
  const [index, setIndex] = useState(0);
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
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % greetings.length), 2500);
    const clock = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }));
    }, 1000);
    return () => {
      clearInterval(timer);
      clearInterval(clock);
    };
  }, [greetings.length]);

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center px-6 max-w-7xl mx-auto pt-24"
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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <motion.div className="lg:col-span-7" style={{ x: titleX, y: titleY }}>
          <div className="h-16 md:h-24 overflow-y-hidden flex items-end">
            <AnimatePresence mode="wait">
              <motion.h2
                key={greetings[index]}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.45 }}
                className="text-4xl md:text-6xl font-black tracking-tighter text-zinc-600 italic font-serif pr-4 uppercase"
              >
                {greetings[index]}
              </motion.h2>
            </AnimatePresence>
          </div>

          <h1 className="text-5xl md:text-8xl font-bold mt-2 mb-6 md:mb-7 tracking-tight text-black leading-[0.9] md:leading-[0.86] text-balance">
            Srivatsav.
            <span className="block mt-2.5 md:mt-3 text-xs md:text-sm text-zinc-500 font-medium tracking-normal">
              I build apps for fun and to help people solve real problems.
            </span>
          </h1>

          <p className="max-w-2xl text-base md:text-xl text-zinc-700 font-medium leading-relaxed">
            I design and ship high-quality digital products with strong attention to detail, smooth interactions, and performance.
            I build mobile applications that feel reliable and premium in real use.
          </p>

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

        <motion.div className="lg:col-span-5 grid grid-cols-2 gap-4" style={{ x: cardX, y: cardY }}>
          <div className="col-span-2 bg-white/80 backdrop-blur-xl border border-white rounded-[28px] p-7 shadow-[0_22px_48px_-30px_rgba(0,0,0,0.55)]">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Local Time / IST</p>
            <h4 className="text-4xl md:text-5xl font-mono font-bold text-black tracking-tighter tabular-nums mt-2">{time}</h4>
          </div>

          {[{ icon: ShieldCheck, title: 'Reliability', text: 'Production-ready code quality' }, { icon: Layers3, title: 'Design', text: 'System-first interface thinking' }, { icon: Gauge, title: 'Performance', text: 'Fast UX under real workloads' }, { icon: Globe, title: 'Coverage', text: 'Mobile, web, and AI workflows' }].map((item, i) => (
            <motion.div key={i} whileHover={{ y: -3 }} className="bg-white/80 backdrop-blur-xl border border-white rounded-3xl p-5 shadow-[0_18px_44px_-32px_rgba(0,0,0,0.6)]">
              <item.icon className="text-zinc-700 mb-3 icon-stroke-anim" size={18} />
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-zinc-400 mb-2">{item.title}</p>
              <p className="text-sm font-semibold text-zinc-700">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
