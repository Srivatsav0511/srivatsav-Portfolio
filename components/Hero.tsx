'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ShieldCheck, Layers3, Gauge, Globe } from 'lucide-react';

export default function Hero() {
  const greetings = ['HELLO,', 'HOLA,', 'NAMASTE,', 'BONJOUR,', 'CIAO,', 'SALAAM,'];
  const [index, setIndex] = useState(0);
  const [time, setTime] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 2500);

    const clock = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        }),
      );
    }, 1000);

    return () => {
      clearInterval(timer);
      clearInterval(clock);
    };
  }, [greetings.length]);

  return (
    <section id="about" className="min-h-screen flex flex-col justify-center px-6 max-w-7xl mx-auto pt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
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

          <h1 className="text-6xl md:text-8xl font-bold mt-2 mb-7 tracking-tight text-black leading-[0.9] text-balance">
            Srivatsav.
            <span className="block mt-3 text-sm md:text-base text-zinc-500 font-medium tracking-normal">
              I build apps for fun and to help people solve real problems.
            </span>
          </h1>

          <p className="max-w-2xl text-lg md:text-xl text-zinc-700 font-medium leading-relaxed">
            I design and ship high-quality digital products with a strong focus on performance, clarity, and visual polish.
            I build mobile applications that feel reliable and professional in real use.
          </p>

        </div>

        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          <div className="col-span-2 bg-white/80 backdrop-blur-xl border border-white rounded-[28px] p-7 shadow-[0_22px_48px_-30px_rgba(0,0,0,0.55)]">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Local Time / IST</p>
            <h4 className="text-4xl md:text-5xl font-mono font-bold text-black tracking-tighter tabular-nums mt-2">{time}</h4>
          </div>

          <div className="bg-white/80 backdrop-blur-xl border border-white rounded-3xl p-5 shadow-[0_18px_44px_-32px_rgba(0,0,0,0.6)]">
            <ShieldCheck className="text-zinc-700 mb-3" size={18} />
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-zinc-400 mb-2">Reliability</p>
            <p className="text-sm font-semibold text-zinc-700">Production-ready code quality</p>
          </div>

          <div className="bg-white/80 backdrop-blur-xl border border-white rounded-3xl p-5 shadow-[0_18px_44px_-32px_rgba(0,0,0,0.6)]">
            <Layers3 className="text-zinc-700 mb-3" size={18} />
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-zinc-400 mb-2">Design</p>
            <p className="text-sm font-semibold text-zinc-700">System-first interface thinking</p>
          </div>

          <div className="bg-white/80 backdrop-blur-xl border border-white rounded-3xl p-5 shadow-[0_18px_44px_-32px_rgba(0,0,0,0.6)]">
            <Gauge className="text-zinc-700 mb-3" size={18} />
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-zinc-400 mb-2">Performance</p>
            <p className="text-sm font-semibold text-zinc-700">Fast UX under real workloads</p>
          </div>

          <div className="bg-white/80 backdrop-blur-xl border border-white rounded-3xl p-5 shadow-[0_18px_44px_-32px_rgba(0,0,0,0.6)]">
            <Globe className="text-zinc-700 mb-3" size={18} />
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-zinc-400 mb-2">Coverage</p>
            <p className="text-sm font-semibold text-zinc-700">Mobile, web, and AI workflows</p>
          </div>
        </div>
      </div>
    </section>
  );
}
