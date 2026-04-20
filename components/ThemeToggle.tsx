'use client';

import { MoonStar, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

type ThemeMode = 'light' | 'dark';

function applyTheme(theme: ThemeMode) {
  const root = document.documentElement;
  root.classList.toggle('dark', theme === 'dark');
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window === 'undefined') return 'light';
    return window.localStorage.getItem('portfolio-theme') === 'dark' ? 'dark' : 'light';
  });

  useEffect(() => {
    applyTheme(theme);
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const isDark = theme === 'dark';
  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200/80 bg-white/75 text-zinc-700 backdrop-blur-md transition-colors hover:text-black dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-100"
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {isDark ? <Sun size={16} /> : <MoonStar size={16} />}
    </button>
  );
}
