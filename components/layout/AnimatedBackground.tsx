'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

export default function AnimatedBackground() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <motion.div className="pointer-events-none absolute inset-0 overflow-hidden" style={{ y }}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,rgba(255,255,255,0.98),transparent_31%),radial-gradient(circle_at_84%_14%,rgba(228,228,231,0.62),transparent_34%),radial-gradient(circle_at_48%_98%,rgba(244,244,245,0.94),transparent_37%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(161,161,170,0.2),transparent_27%),radial-gradient(circle_at_80%_75%,rgba(212,212,216,0.28),transparent_33%)] animate-[ambientPulse_14s_ease-in-out_infinite]" />
      <div className="absolute -left-[36%] top-[6%] h-[32rem] w-[32rem] rounded-full border border-zinc-300/45 md:border-zinc-300/38" />
      <div className="absolute -left-[24%] top-[18%] h-[24rem] w-[24rem] rounded-full border border-zinc-300/32 md:border-zinc-300/26" />
      <div className="absolute -right-[32%] bottom-[12%] h-[26rem] w-[26rem] rounded-full border border-zinc-300/34 md:border-zinc-300/28" />

      <motion.div
        aria-hidden
        className="absolute -top-40 -right-24 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.75),rgba(228,228,231,0.1)_55%,transparent_75%)] blur-3xl"
        animate={reduceMotion ? undefined : { x: [0, -36, 0], y: [0, 26, 0], scale: [1, 1.08, 1], rotate: [0, 8, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-40 -left-24 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle_at_60%_40%,rgba(214,211,209,0.5),rgba(231,229,228,0.14)_52%,transparent_72%)] blur-3xl"
        animate={reduceMotion ? undefined : { x: [0, 28, 0], y: [0, -22, 0], scale: [1, 1.06, 1], rotate: [0, -7, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      <svg className="absolute -top-20 -left-20 w-[38rem] h-[38rem] md:w-[42rem] md:h-[42rem] opacity-55 md:opacity-46" viewBox="0 0 600 600" fill="none" aria-hidden>
        <motion.path
          stroke="currentColor"
          className="text-zinc-300/85"
          strokeWidth="1.35"
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

      <svg className="absolute -bottom-28 -right-28 w-[30rem] h-[30rem] md:w-[34rem] md:h-[34rem] opacity-52 md:opacity-44" viewBox="0 0 600 600" fill="none" aria-hidden>
        <motion.path
          stroke="currentColor"
          className="text-zinc-300/85"
          strokeWidth="1.25"
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
