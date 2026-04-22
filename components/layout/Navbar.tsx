'use client';

import { useEffect, useState } from 'react';
import { LayoutGrid, Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const { scrollY } = useScroll();
  const width = useSpring(compact ? 960 : 1040, { stiffness: 180, damping: 25 });

  useEffect(() => {
    return scrollY.on('change', (y) => setCompact(y > 18));
  }, [scrollY]);

  const navLinks = [
    { name: 'About', href: '/#about' },
    { name: 'Work', href: '/#work' },
    { name: 'Blogs', href: '/#blogs' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav className="sticky top-3.5 md:top-5 z-[110] w-full px-4 md:px-6 flex justify-center">
      <motion.div
        style={{ width }}
        className="flex items-center justify-between gap-4 glass-surface px-4 md:px-6 py-2.5 md:py-3 rounded-full max-w-[1040px]"
      >
        <Link
          href="/#about"
          data-cursor="Open"
          className="flex items-center gap-3 group md:pr-6 md:border-r border-zinc-200/70 shrink-0 cursor-pointer"
        >
          <div className="bg-zinc-900 p-1.5 rounded-lg transition-transform group-hover:rotate-12">
            <LayoutGrid size={14} className="text-white" />
          </div>
          <span className="font-bold text-xs md:text-sm tracking-tight text-zinc-900 whitespace-nowrap">SRIVATSAV</span>
        </Link>

        <div className="hidden md:flex items-center gap-7 text-[10px] uppercase tracking-[0.2em] font-black text-zinc-700">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              data-cursor="Open"
              href={link.href}
              className="hover:text-black transition-colors cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            data-cursor="Open"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white text-xs font-bold tracking-wide hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            Let&apos;s Talk
            <ArrowUpRight size={14} />
          </Link>

          <button onClick={() => setIsOpen((v) => !v)} className="md:hidden p-1 text-black">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.div>

      {isOpen && (
        <div className="absolute top-20 left-4 right-4 glass-surface rounded-3xl p-6 md:hidden animate-in fade-in zoom-in duration-300">
          <div className="flex flex-col gap-5 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm uppercase tracking-widest font-black text-zinc-700 hover:text-black cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
