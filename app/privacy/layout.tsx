import type { ReactNode } from 'react';

export default function PrivacyLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <footer className="border-t border-zinc-200 bg-white px-5 py-6 text-center">
        <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em]">
          © 2026 All rights reserved. Srivatsav Karamala
        </p>
      </footer>
    </>
  );
}
