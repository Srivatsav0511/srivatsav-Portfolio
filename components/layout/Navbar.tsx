'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, LayoutGrid, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [time, setTime] = useState('');
  const [activeSection, setActiveSection] = useState<'about' | 'work' | 'contact' | 'blogs' | ''>('');
  const [compact, setCompact] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: false }));
    };
    tick();
    const timer = window.setInterval(tick, 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (pathname === '/blogs') return;

    const sections = ['about', 'work', 'contact']
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const onScroll = () => {
      const marker = window.innerHeight * 0.33;
      let next: 'about' | 'work' | 'contact' = 'about';

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= marker) {
          const id = section.id;
          if (id === 'about' || id === 'work' || id === 'contact') {
            next = id;
          }
        }
      }

      setActiveSection((prev) => (prev === next ? prev : next));
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [pathname]);

  const resolvedActiveSection = pathname === '/blogs' ? 'blogs' : activeSection;

  return (
    <nav className="sticky top-0 z-[120] px-4 pt-0 md:px-6 md:pt-0">
      <div
        className={`mx-auto flex items-center justify-between rounded-full border border-zinc-200 bg-[linear-gradient(145deg,rgba(255,255,255,0.96),rgba(255,255,255,0.88))] shadow-[0_24px_56px_-36px_rgba(15,23,42,0.4),inset_0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-2xl transition-all duration-300 ${
          compact
            ? 'h-11.5 w-fit px-3 py-1.5 md:h-auto md:w-full md:max-w-[920px] md:px-4 md:py-2'
            : 'h-12.5 w-fit px-3 py-2 md:h-auto md:w-full md:max-w-[1060px] md:px-5 md:py-2.5'
        }`}
      >
        <Link href="/#about" className="group relative z-10 inline-flex items-center gap-2 rounded-full px-2 py-1.5 transition hover:bg-white/90 md:px-2.5">
          <span className="rounded-lg bg-zinc-900 p-1.5">
            <LayoutGrid size={15} className="text-white" />
          </span>
          <span className="hidden text-[10px] font-black tracking-[0.08em] text-zinc-900 md:inline md:text-[13px]">SRIVATSAV KARAMALA</span>
          <span className="hidden rounded-full border border-zinc-200/80 bg-white/90 px-3 py-1.5 text-[12px] font-semibold tracking-wide text-zinc-700 md:inline">
            {time} IST
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          <Link
            href="/#about"
            className={`rounded-full px-3 py-2 text-[11px] font-bold uppercase tracking-[0.14em] transition-all duration-300 ${
              resolvedActiveSection === 'about' ? 'bg-zinc-900 text-white shadow-sm' : 'text-zinc-600 hover:bg-white hover:text-zinc-900'
            }`}
          >
            About
          </Link>
          <Link
            href="/#work"
            className={`rounded-full px-3 py-2 text-[11px] font-bold uppercase tracking-[0.14em] transition-all duration-300 ${
              resolvedActiveSection === 'work' ? 'bg-zinc-900 text-white shadow-sm' : 'text-zinc-600 hover:bg-white hover:text-zinc-900'
            }`}
          >
            Work
          </Link>
          <Link
            href="/blogs"
            className={`rounded-full px-3 py-2 text-[11px] font-bold uppercase tracking-[0.14em] transition ${
              resolvedActiveSection === 'blogs' ? 'bg-zinc-900 text-white shadow-sm' : 'text-zinc-600 hover:bg-white hover:text-zinc-900'
            }`}
          >
            Blog
          </Link>
        </div>

        <div className="relative z-10 ml-auto flex items-center gap-1.5 md:hidden">
          <span className="rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-[10px] font-semibold tracking-wide text-zinc-700">
            {time}
          </span>
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex h-8.5 w-8.5 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition hover:bg-zinc-50"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={14} /> : <Menu size={14} />}
          </button>
        </div>

        <Link
          href="/#contact"
          className={`hidden items-center gap-1.5 rounded-full px-3 py-2 text-[10px] font-semibold tracking-wide transition-all duration-300 md:inline-flex md:px-4 md:text-xs ${
            resolvedActiveSection === 'contact' ? 'bg-zinc-900 text-white shadow-sm' : 'bg-zinc-900 text-white hover:bg-zinc-700'
          }`}
        >
          Let&apos;s Talk
          <ArrowUpRight size={13} />
        </Link>
      </div>

      {menuOpen ? (
        <div className="mx-auto mt-2 w-[min(96vw,360px)] rounded-2xl border border-zinc-200 bg-white/96 p-2 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.45)] backdrop-blur-xl md:hidden">
          <Link href="/#about" onClick={() => setMenuOpen(false)} className="block rounded-xl px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-zinc-700 hover:bg-zinc-100">
            About
          </Link>
          <Link href="/#work" onClick={() => setMenuOpen(false)} className="block rounded-xl px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-zinc-700 hover:bg-zinc-100">
            Work
          </Link>
          <Link href="/#contact" onClick={() => setMenuOpen(false)} className="block rounded-xl px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-zinc-700 hover:bg-zinc-100">
            Contact
          </Link>
          <Link href="/blogs" onClick={() => setMenuOpen(false)} className="block rounded-xl px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-zinc-700 hover:bg-zinc-100">
            Blog
          </Link>
        </div>
      ) : null}
    </nav>
  );
}
