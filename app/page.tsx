import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Work from '@/components/Work';
import Blogs from '@/components/Blogs';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-zinc-50 selection:bg-zinc-200 overflow-x-clip">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(255,255,255,0.65),transparent_30%),radial-gradient(circle_at_85%_8%,rgba(228,228,231,0.35),transparent_28%),radial-gradient(circle_at_48%_100%,rgba(255,255,255,0.5),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.28] [background-size:22px_22px] [background-image:linear-gradient(to_right,rgba(255,255,255,0.45)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.45)_1px,transparent_1px)]" />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Work />
        <Blogs />
        <Contact />
      </div>
    </main>
  );
}
