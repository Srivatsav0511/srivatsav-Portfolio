'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function AnimatedBackground() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <motion.div className="pointer-events-none absolute inset-0 overflow-hidden" style={{ y }}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(255,255,255,0.9),transparent_28%),radial-gradient(circle_at_80%_12%,rgba(228,228,231,0.46),transparent_30%),radial-gradient(circle_at_50%_95%,rgba(244,244,245,0.8),transparent_34%)]" />

      <svg className="absolute -top-20 -left-20 w-[42rem] h-[42rem] opacity-40" viewBox="0 0 600 600" fill="none" aria-hidden>
        <motion.path
          stroke="currentColor"
          className="text-zinc-300"
          strokeWidth="1.2"
          d="M145 88C260 34 436 67 504 178C565 278 530 440 414 507C290 577 124 532 67 410C17 303 30 153 145 88Z"
          animate={{
            d: [
              'M145 88C260 34 436 67 504 178C565 278 530 440 414 507C290 577 124 532 67 410C17 303 30 153 145 88Z',
              'M159 71C280 34 452 96 521 210C577 306 520 448 390 519C268 586 111 524 57 394C8 281 38 136 159 71Z',
              'M145 88C260 34 436 67 504 178C565 278 530 440 414 507C290 577 124 532 67 410C17 303 30 153 145 88Z',
            ],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>

      <svg className="absolute -bottom-28 -right-28 w-[34rem] h-[34rem] opacity-45" viewBox="0 0 600 600" fill="none" aria-hidden>
        <motion.path
          stroke="currentColor"
          className="text-zinc-300"
          strokeWidth="1.1"
          d="M120 185C169 74 322 28 443 79C548 124 592 245 553 350C510 462 394 548 272 548C151 551 44 467 32 347C20 285 78 231 120 185Z"
          animate={{
            d: [
              'M120 185C169 74 322 28 443 79C548 124 592 245 553 350C510 462 394 548 272 548C151 551 44 467 32 347C20 285 78 231 120 185Z',
              'M99 190C142 80 301 21 426 70C538 115 602 240 563 359C519 481 391 568 258 551C145 536 49 461 35 343C27 279 61 224 99 190Z',
              'M120 185C169 74 322 28 443 79C548 124 592 245 553 350C510 462 394 548 272 548C151 551 44 467 32 347C20 285 78 231 120 185Z',
            ],
          }}
          transition={{ duration: 21, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>
    </motion.div>
  );
}
