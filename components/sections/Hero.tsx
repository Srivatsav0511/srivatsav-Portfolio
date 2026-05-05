'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const greetings = ['Hello', 'Hola', 'Bonjour', 'Ciao', 'Hallo', 'Namaste', 'Konnichiwa'];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [time, setTime] = useState('');
  const [nameAnimKey, setNameAnimKey] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const greetTimer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 1400);

    const clock = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }));
    };

    clock();
    const clockTimer = window.setInterval(clock, 1000);

    return () => {
      window.clearInterval(greetTimer);
      window.clearInterval(clockTimer);
    };
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setNameAnimKey((prev) => prev + 1);
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative mx-auto flex min-h-screen max-w-7xl items-start px-6 pb-8 pt-20 md:pt-24 lg:items-center lg:pt-20">
      <div className="relative z-10 grid w-full grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <div className="flex h-14 items-end overflow-y-hidden md:h-24">
            <h2 className="typing-greeting pr-4 text-3xl font-semibold italic tracking-tight text-zinc-700 md:text-6xl" aria-live="polite">
              <span className="greeting-script inline-flex items-baseline">
                {greetings[index]}
                <span className="typing-caret" aria-hidden="true">
                  |
                </span>
              </span>
              <span className="ml-2 font-sans not-italic">I&apos;m</span>
            </h2>
          </div>

          <motion.h1
            key={nameAnimKey}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.04,
                },
              },
            }}
            className="premium-display mb-5 mt-1.5 text-5xl font-bold leading-[0.9] text-black md:mb-6 md:text-8xl md:leading-[0.86]"
          >
            {'Srivatsav.'.split('').map((char, idx) => (
              <motion.span
                key={`${char}-${idx}`}
                variants={{
                  hidden: { opacity: 0, y: 18, filter: 'blur(6px)' },
                  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
                }}
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          <p className="max-w-3xl text-lg leading-relaxed text-zinc-700 md:text-2xl">I build apps that make daily life easier.</p>
          <p className="mt-2 max-w-3xl text-base leading-relaxed text-zinc-600 md:text-xl">
            I focus on clean UI, smooth interactions, and products that just work.
          </p>
        </div>

        <div className="w-full max-w-[310px] lg:col-span-5 lg:justify-self-end xl:col-span-4">
          <div className="glass-surface rounded-[24px] bg-[linear-gradient(160deg,rgba(255,255,255,0.9),rgba(255,255,255,0.72))] px-4 py-4 text-center md:px-5 md:py-5">
            <p className="text-[9px] font-black uppercase tracking-[0.24em] text-zinc-400">Local Time / IST</p>
            <h4 className="mt-1.5 font-mono text-[1.8rem] font-bold leading-none tracking-tight text-black tabular-nums md:text-[2.1rem]">{time}</h4>
            <p className="mt-1.5 text-[10px] font-semibold tracking-wide text-zinc-600">Hyderabad, India</p>
            <div className="mx-auto mt-3 h-px w-[92%] bg-zinc-200/80" />
          </div>
        </div>
      </div>
    </section>
  );
}
