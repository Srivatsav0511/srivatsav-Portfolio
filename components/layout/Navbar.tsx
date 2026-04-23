'use client';

import { useEffect, useRef, useState } from 'react';
import { LayoutGrid, Menu, X, ArrowUpRight, Clock3 } from 'lucide-react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import Link from 'next/link';

function getGreetingLine(date: Date) {
  const hour = date.getHours();

  if (hour >= 6 && hour < 12) {
    return 'Good morning, legend. Your ideas woke up before the sun.';
  }

  if (hour >= 12 && hour < 17) {
    return 'Lunch is temporary. Great products are forever.';
  }

  if (hour >= 17 && hour < 21) {
    return 'Sunset outside, grindset inside.';
  }

  if (hour >= 21 && hour < 24) {
    return 'Night shift for the overpowered.';
  }

  return 'Insomnia? No. Innovation window.';
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const [timeLabel, setTimeLabel] = useState('');
  const [greetingLine, setGreetingLine] = useState('');
  const [showGreeting, setShowGreeting] = useState(false);
  const greetingRef = useRef('');
  const hideGreetingTimerRef = useRef<number | null>(null);
  const { scrollY } = useScroll();
  const width = useSpring(compact ? 960 : 1040, { stiffness: 180, damping: 25 });

  useEffect(() => {
    return scrollY.on('change', (y) => setCompact(y > 18));
  }, [scrollY]);

  useEffect(() => {
    const formatTime = () => {
      const now = new Date();
      setTimeLabel(
        now.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
      const nextGreeting = getGreetingLine(now);
      if (greetingRef.current !== nextGreeting) {
        greetingRef.current = nextGreeting;
        setGreetingLine(nextGreeting);
        setShowGreeting(true);
        if (hideGreetingTimerRef.current) {
          window.clearTimeout(hideGreetingTimerRef.current);
        }
        hideGreetingTimerRef.current = window.setTimeout(() => {
          setShowGreeting(false);
        }, 4200);
      }
    };

    formatTime();
    const timer = window.setInterval(formatTime, 1000);
    return () => {
      window.clearInterval(timer);
      if (hideGreetingTimerRef.current) {
        window.clearTimeout(hideGreetingTimerRef.current);
      }
    };
  }, []);

  const navLinks = [
    { name: 'About', href: '/#about' },
    { name: 'Work', href: '/#work' },
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

          {compact ? (
            <motion.div
              initial={{ opacity: 0, y: -6, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className="inline-flex items-center gap-1.5 rounded-[12px] border border-zinc-200 bg-white/85 px-3 py-1.5 text-[10px] md:text-xs font-semibold text-zinc-700 shadow-sm"
            >
              <Clock3 size={12} />
              <span className="font-mono tabular-nums tracking-normal">{timeLabel}</span>
            </motion.div>
          ) : null}
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

          <button onClick={() => setIsOpen((v) => !v)} className="md:hidden p-1 text-black" data-cursor="Menu">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {showGreeting && greetingLine ? (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.985 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 top-full mt-2 w-[calc(100%-2rem)] max-w-[760px] -translate-x-1/2 rounded-2xl border border-white/85 bg-white/80 px-4 py-2.5 text-center shadow-[0_24px_60px_-44px_rgba(15,23,42,0.7)] backdrop-blur-xl"
          >
            <p className="text-sm md:text-[15px] font-semibold tracking-tight text-zinc-900">{greetingLine}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>

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
