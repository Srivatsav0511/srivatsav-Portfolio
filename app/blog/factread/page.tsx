import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function FactReadBlog() {
  const screenshots = [
    '/factread/factread-1.png',
    '/factread/factread-2.png',
    '/factread/factread-3.png',
    '/factread/factread-4.png',
    '/factread/factread-5.png',
  ];

  return (
    <article className="min-h-screen bg-white text-zinc-900 selection:bg-zinc-200">
      <div className="fixed top-8 left-8 z-50">
        <Link href="/" className="group flex items-center gap-2 bg-white/80 backdrop-blur-md border border-zinc-200 px-4 py-2 rounded-full text-zinc-600 hover:text-black transition-all shadow-sm">
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
          <span className="text-sm font-bold">Back</span>
        </Link>
      </div>

      <header className="max-w-4xl mx-auto px-6 pt-28 pb-10 text-center md:text-left">
        <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 font-bold">By Srivatsav</p>
        <h1 className="mt-4 text-5xl md:text-7xl font-bold tracking-tight text-black">FactRead</h1>
        <p className="mt-4 text-xl text-zinc-600">Built for fun, designed to help people learn one useful fact at a time.</p>
      </header>

      <div className="max-w-6xl mx-auto px-6 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {screenshots.map((src, index) => (
            <div key={src} className="relative aspect-[9/19] rounded-2xl overflow-hidden border border-zinc-100 shadow-sm">
              <Image src={src} alt={`FactRead screenshot ${index + 1}`} fill className="object-cover" priority={index < 2} />
            </div>
          ))}
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-6 pb-20 space-y-12">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black">Detailed overview</h2>
          <p className="text-zinc-700 leading-relaxed">
            FactRead is an iOS reading app built around one clear interaction: swipe and continue learning. Instead of presenting users with endless feeds and scattered article fragments,
            the app focuses on one complete fact card at a time. Every screen decision was made to keep cognitive load low, so users can stay in flow without losing context.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            The product combines readable typography, language flexibility, and built-in narration. Users can switch reading styles, increase contrast, and listen to facts when they do not
            want to stare at a screen. In practice, this makes FactRead useful during short breaks, travel, or quick study sessions where people want value in minutes, not long sessions.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black">Why I built this app</h2>
          <p className="text-zinc-700 leading-relaxed">
            I built FactRead because I wanted a better way to consume small pieces of knowledge without opening heavy apps full of distractions. Most content products are designed to maximize
            screen time, but my goal here was the opposite: help users learn quickly and move on.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            I also wanted to prove that educational apps can feel modern and personal without becoming complicated. By keeping the interaction model simple and the visual language calm,
            FactRead became both a personal experiment and a practical tool that people can actually use every day.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black">Problems I faced while building</h2>
          <p className="text-zinc-700 leading-relaxed">
            The first major challenge was readability across multiple visual styles. Light themes, quiet themes, and higher-contrast themes all had to preserve hierarchy and text clarity,
            especially for longer facts. I iterated on spacing, line height, and weight combinations until each mode stayed comfortable for continuous reading.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            The second challenge was narration quality. Different languages produce very different pacing, and a voice experience that sounds acceptable in one language can feel abrupt in another.
            I had to tune playback defaults and card transitions so users do not feel interruption between reading and listening modes.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            The third challenge was performance consistency. Swipe-first interfaces only work when every gesture feels immediate. I had to optimize content preparation and state transitions so the
            app stays fluid while handling long paragraphs and mode changes.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black">AI tools used to enhance work</h2>
          <p className="text-zinc-700 leading-relaxed">
            For FactRead, I used <strong>Codex</strong> to speed up implementation and improve development quality. Codex helped with refactoring UI structure, tightening component logic,
            and reviewing rough technical drafts into cleaner, production-ready versions.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            I still validated all behavior manually on top of that, especially for typography, transitions, and narration flow. Codex accelerated the process, but final product decisions,
            UX tradeoffs, and quality checks were handled directly by me.
          </p>
        </section>

        <div className="pt-3">
          <Link href="/privacy/factread" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white font-bold hover:bg-zinc-800 transition-colors">
            Privacy Policy
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </main>
    </article>
  );
}
