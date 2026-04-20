'use client';

import { useEffect, useState } from 'react';
import { LayoutGrid, Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const { scrollY } = useScroll();
  const width = useSpring(compact ? 960 : 1040, { stiffness: 180, damping: 25 });

  useEffect(() => {
    return scrollY.on('change', (y) => setCompact(y > 18));
  }, [scrollY]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Blogs', href: '#blogs' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-[110] w-full px-4 md:px-6 flex justify-center">
      <motion.div
        style={{ width }}
        className="flex items-center justify-between gap-4 bg-white/70 backdrop-blur-2xl border border-white/80 px-4 md:px-6 py-2.5 md:py-3 rounded-full shadow-[0_30px_60px_-35px_rgba(0,0,0,0.65)] max-w-[1040px] dark:bg-zinc-900/70 dark:border-zinc-700/70"
      >
        <a href="#about" data-cursor="Open" className="flex items-center gap-3 group md:pr-6 md:border-r border-zinc-200/70 shrink-0">
          <div className="bg-black p-1.5 rounded-lg transition-transform group-hover:rotate-12 dark:bg-zinc-100">
            <LayoutGrid size={14} className="text-white dark:text-zinc-900" />
          </div>
          <span className="font-bold text-xs md:text-sm tracking-tight text-black whitespace-nowrap dark:text-zinc-100">SRIVATSAV</span>
        </a>

        <div className="hidden md:flex items-center gap-7 text-[10px] uppercase tracking-[0.2em] font-black text-zinc-700 dark:text-zinc-300">
          {navLinks.map((link) => (
            <a key={link.name} data-cursor="Open" href={link.href} className="hover:text-black transition-colors dark:hover:text-zinc-100">
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            data-cursor="Open"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white text-xs font-bold tracking-wide hover:bg-zinc-800 transition-colors"
          >
            Let&apos;s Talk
            <ArrowUpRight size={14} />
          </a>

          <button onClick={() => setIsOpen((v) => !v)} className="md:hidden p-1 text-black dark:text-zinc-100">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.div>

      {isOpen && (
        <div className="absolute top-20 left-4 right-4 bg-white/90 backdrop-blur-2xl border border-white rounded-3xl p-6 shadow-2xl md:hidden animate-in fade-in zoom-in duration-300 dark:bg-zinc-900/90 dark:border-zinc-700">
          <div className="flex flex-col gap-5 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm uppercase tracking-widest font-black text-zinc-700 hover:text-black dark:text-zinc-300 dark:hover:text-zinc-100"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
