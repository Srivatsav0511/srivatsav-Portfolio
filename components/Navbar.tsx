'use client';

import { useState } from 'react';
import { LayoutGrid, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Blogs', href: '#blogs' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-[100] w-full px-4 md:px-6 flex justify-center">
      <div className="flex items-center justify-between gap-4 bg-white/65 backdrop-blur-2xl border border-white/80 px-4 md:px-6 py-2.5 md:py-3 rounded-full shadow-[0_30px_60px_-35px_rgba(0,0,0,0.65)] w-full max-w-[1040px]">
        <a href="#about" className="flex items-center gap-3 group md:pr-6 md:border-r border-zinc-200/70 shrink-0">
          <div className="bg-black p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
            <LayoutGrid size={14} className="text-white" />
          </div>
          <span className="font-bold text-xs md:text-sm tracking-tight text-black whitespace-nowrap">SRIVATSAV</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.18em] font-black text-zinc-700">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-black transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white text-xs font-bold tracking-wide hover:bg-zinc-800 transition-colors"
          >
            Let&apos;s Talk
            <ArrowUpRight size={14} />
          </a>

          <button onClick={() => setIsOpen((v) => !v)} className="md:hidden p-1 text-black">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-20 left-4 right-4 bg-white/85 backdrop-blur-2xl border border-white rounded-3xl p-6 shadow-2xl md:hidden animate-in fade-in zoom-in duration-300">
          <div className="flex flex-col gap-5 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm uppercase tracking-widest font-black text-zinc-700 hover:text-black"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center gap-2 mt-2 px-4 py-2 rounded-full bg-black text-white text-xs font-bold tracking-wide"
            >
              Let&apos;s Talk
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
