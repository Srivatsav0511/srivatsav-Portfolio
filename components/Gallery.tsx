'use client';

import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import SectionHeading from './SectionHeading';

const galleryItems = [
  '/holdboard/holdboard-cover.jpg',
  '/factread/factread-1.png',
  '/moneyformula/moneyformula-1.png',
  '/pureclick/pureclick-1.png',
  '/codeclarity/codeclarity-cover.png',
  '/quickcv/quickcv-cover.png',
  '/factread/factread-3.png',
  '/moneyformula/moneyformula-4.png',
];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (active === null) return;
      if (e.key === 'Escape') setActive(null);
      if (e.key === 'ArrowRight') setActive((p) => (p === null ? null : (p + 1) % galleryItems.length));
      if (e.key === 'ArrowLeft') setActive((p) => (p === null ? null : (p - 1 + galleryItems.length) % galleryItems.length));
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active]);

  const onTouchStart = (x: number) => setTouchStartX(x);
  const onTouchEnd = (x: number) => {
    if (touchStartX === null || active === null) return;
    const dx = x - touchStartX;
    if (Math.abs(dx) > 45) {
      if (dx < 0) setActive((active + 1) % galleryItems.length);
      if (dx > 0) setActive((active - 1 + galleryItems.length) % galleryItems.length);
    }
    setTouchStartX(null);
  };

  return (
    <section id="gallery" className="py-28 px-6 max-w-7xl mx-auto">
      <SectionHeading title="Visual Gallery" subtitle="Selected visual shots across products." />

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
        {galleryItems.map((src, index) => (
          <motion.button
            key={src}
            type="button"
            data-cursor="Open"
            data-magnetic
            onClick={() => setActive(index)}
            className="group mb-4 w-full break-inside-avoid rounded-2xl overflow-hidden border border-zinc-200/80 bg-white shadow-sm"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: index * 0.04 }}
          >
            <div className="relative w-full aspect-[4/5]">
              <Image src={src} alt={`Gallery item ${index + 1}`} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-[160] bg-black/75 backdrop-blur-md p-4 md:p-8 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="relative w-full max-w-4xl"
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              onTouchStart={(e) => onTouchStart(e.changedTouches[0].clientX)}
              onTouchEnd={(e) => onTouchEnd(e.changedTouches[0].clientX)}
            >
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/20">
                <Image src={galleryItems[active]} alt="Expanded gallery image" fill className="object-cover" />
              </div>
              <div className="mt-3 text-center text-zinc-200 text-sm">{active + 1} / {galleryItems.length}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
