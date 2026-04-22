'use client';

import { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import AnimatedBackground from '@/components/layout/AnimatedBackground';
import Blogs from '@/components/sections/Blogs';
import Contact from '@/components/sections/Contact';
import CustomCursor from '@/components/layout/CustomCursor';
import Hero from '@/components/sections/Hero';
import Navbar from '@/components/layout/Navbar';
import WaveDivider from '@/components/layout/WaveDivider';
import Work from '@/components/sections/Work';

export default function HomeAssembly() {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const navEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
    const isReload = navEntry?.type === 'reload';

    if (isReload && window.location.hash === '#blogs') {
      history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, []);

  return (
    <main className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-zinc-200 overflow-x-clip">
      <AnimatedBackground />
      <div className="pointer-events-none absolute inset-0 opacity-[0.16] [background-size:24px_24px] [background-image:linear-gradient(to_right,rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.5)_1px,transparent_1px)]" />

      <CustomCursor />
      <Navbar />

      <motion.div className="relative z-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: reduceMotion ? 0.01 : 0.5 }}>
        <motion.div
          initial={{ opacity: 0, y: 18, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: reduceMotion ? 0.01 : 0.62, delay: reduceMotion ? 0 : 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <Hero />
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
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0.01 : 0.6 }}
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
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: reduceMotion ? 0.01 : 0.6 }}
        >
          <Blogs />
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
