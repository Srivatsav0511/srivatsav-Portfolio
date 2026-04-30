'use client';

import { motion } from 'framer-motion';

export default function WaveDivider() {
  return (
    <div className="pointer-events-none relative z-20 mx-auto h-0 max-w-7xl px-6" aria-hidden>
      <svg viewBox="0 0 1200 80" className="absolute left-6 right-6 top-0 h-7 w-[calc(100%-3rem)] -translate-y-1/2 fill-none text-zinc-400/80 md:h-9">
        <defs>
          <linearGradient id="wave-divider-stroke" x1="0" x2="1200" y1="0" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.08" />
            <stop offset="18%" stopColor="currentColor" stopOpacity="0.72" />
            <stop offset="52%" stopColor="currentColor" stopOpacity="0.96" />
            <stop offset="84%" stopColor="currentColor" stopOpacity="0.72" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0 38C120 7 220 70 340 38C450 10 560 66 680 40C810 12 915 67 1025 38C1090 22 1144 19 1200 37"
          stroke="url(#wave-divider-stroke)"
          strokeWidth="3.4"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        />
        <motion.path
          d="M0 38C120 7 220 70 340 38C450 10 560 66 680 40C810 12 915 67 1025 38C1090 22 1144 19 1200 37"
          stroke="rgba(255,255,255,0.78)"
          strokeWidth="1"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.75 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1.28, delay: 0.04, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  );
}
