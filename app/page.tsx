import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Work from '@/components/Work';
import Blogs from '@/components/Blogs';
import Contact from '@/components/Contact';
import AnimatedBackground from '@/components/AnimatedBackground';
import CustomCursor from '@/components/CustomCursor';
import WaveDivider from '@/components/WaveDivider';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-zinc-200 dark:selection:bg-zinc-700 overflow-x-clip">
      <AnimatedBackground />
      <div className="pointer-events-none absolute inset-0 opacity-[0.2] [background-size:22px_22px] [background-image:linear-gradient(to_right,rgba(255,255,255,0.42)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.42)_1px,transparent_1px)]" />

      <CustomCursor />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <WaveDivider />
        <Work />
        <WaveDivider />
        <Blogs />
        <WaveDivider />
        <Contact />
      </div>
    </main>
  );
}
