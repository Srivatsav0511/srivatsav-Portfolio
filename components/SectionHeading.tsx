'use client';

import { motion } from 'framer-motion';

export default function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  const words = title.split(' ');

  return (
    <div className="mb-10 md:mb-12">
      <h2 className="text-[17px] font-black uppercase tracking-[0.34em] text-zinc-700 mb-3 flex flex-wrap gap-x-2">
        {words.map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.45, delay: i * 0.04 }}
          >
            {word}
          </motion.span>
        ))}
      </h2>
      {subtitle ? <p className="text-zinc-500 text-sm mb-4">{subtitle}</p> : null}
      <motion.div
        className="h-[1px] w-full bg-zinc-200"
        initial={{ scaleX: 0, transformOrigin: 'left' }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.9 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />
    </div>
  );
}
