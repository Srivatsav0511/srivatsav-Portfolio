'use client';

import { motion } from 'framer-motion';

export default function WaveDivider() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-6 md:py-10" aria-hidden>
      <svg viewBox="0 0 1200 80" className="w-full h-8 text-zinc-300 fill-none">
        <motion.path
          d="M0 38C120 7 220 70 340 38C450 10 560 66 680 40C810 12 915 67 1025 38C1090 22 1144 19 1200 37"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  );
}
