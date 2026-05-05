'use client';

import Contact from '@/components/sections/Contact';
import Hero from '@/components/sections/Hero';
import Navbar from '@/components/layout/Navbar';
import WaveDivider from '@/components/layout/WaveDivider';
import Work from '@/components/sections/Work';

export default function HomeAssembly() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-[var(--background)] text-[var(--foreground)] selection:bg-zinc-200">
      <Navbar />
      <div className="relative z-10">
        <div className="premium-section room-section room-hero">
          <Hero />
        </div>

        <WaveDivider />

        <div className="premium-section room-section room-work">
          <Work />
        </div>

        <WaveDivider />

        <div className="premium-section room-section room-contact">
          <Contact />
        </div>
      </div>
    </main>
  );
}
