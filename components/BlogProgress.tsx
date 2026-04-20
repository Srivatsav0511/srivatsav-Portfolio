'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export default function BlogProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-zinc-900 origin-left z-[250]"
      style={{ scaleX }}
      aria-hidden
    />
  );
}
