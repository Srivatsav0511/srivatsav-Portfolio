'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const greetings = ['Hello', 'Hola', 'Bonjour', 'Ciao', 'Hallo', 'Namaste', 'Konnichiwa'];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [nameAnimKey, setNameAnimKey] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const greetTimer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 1400);

    return () => {
      window.clearInterval(greetTimer);
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

          <p className="max-w-3xl text-base leading-relaxed text-zinc-600 md:text-xl">
            I build thoughtful apps that make daily life easier with clean interfaces, smooth interactions, and products that simply work.
          </p>
        </div>

        <div className="w-full max-w-[390px] lg:col-span-5 lg:justify-self-end xl:col-span-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="relative mb-4"
          >
            <Image
              src="/about/hero/portrait-frame.png"
              alt="Srivatsav vector portrait"
              width={720}
              height={720}
              className="block h-auto w-full"
              priority
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
