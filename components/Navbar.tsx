"use client"; 

import React, { useState } from 'react';
import { LayoutGrid, Menu, X } from 'lucide-react';

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
      <div className="flex items-center justify-between md:justify-start gap-4 md:gap-8 bg-white/90 backdrop-blur-md border border-zinc-200 px-4 md:px-6 py-2.5 md:py-3 rounded-full shadow-lg w-full max-w-[95%] md:w-auto">
        
        {/* Logo / Name */}
        <a href="#about" className="flex items-center gap-3 group md:pr-6 md:border-r border-zinc-100">
          <div className="bg-black p-1.5 rounded-lg group-hover:rotate-12 transition-transform shrink-0">
            <LayoutGrid size={14} className="text-white" />
          </div>
          <span className="font-bold text-xs md:text-sm tracking-tighter text-black whitespace-nowrap">
            SRIVATSAV KARAMALA
          </span>
        </a>

        {/* Desktop Navigation Links - Hidden on Mobile */}
        <div className="hidden md:flex gap-8 text-[11px] uppercase tracking-[0.15em] font-black text-black">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-indigo-600 transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle & Status Dot */}
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1 text-black"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-20 left-4 right-4 bg-white border border-zinc-200 rounded-3xl p-6 shadow-2xl md:hidden animate-in fade-in zoom-in duration-300">
          <div className="flex flex-col gap-6 text-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-sm uppercase tracking-widest font-black text-black hover:text-indigo-600"
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