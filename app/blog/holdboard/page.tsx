import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function HoldboardBlog() {
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
        <h1 className="mt-4 text-5xl md:text-7xl font-bold tracking-tight text-black">Holdboard</h1>
        <p className="mt-4 text-xl text-zinc-600">Built for fun, crafted to help people keep their clipboard clean, organized, and safe.</p>
      </header>

      <div className="max-w-6xl mx-auto px-6 mb-16">
        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden border border-zinc-200 shadow-sm">
          <Image src="/holdboard.jpg" alt="Holdboard showcase" fill className="object-cover" priority />
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-6 pb-20 space-y-12">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black">Detailed overview</h2>
          <p className="text-zinc-700 leading-relaxed">
            Holdboard is a clipboard utility for iOS that treats copied content as valuable information, not temporary noise. The app captures useful entries and gives users practical controls
            such as folders, bookmarks, and secure locks so they can return to important snippets without repeating the same copy steps.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Instead of a flat list, Holdboard is built as a structured workspace where users can separate personal and professional clips, mark long-term items, and protect sensitive entries.
            This makes it useful for developers, students, and professionals who constantly switch between links, notes, and reusable text.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black">Why I built this app</h2>
          <p className="text-zinc-700 leading-relaxed">
            I built Holdboard after repeatedly losing copied data that I needed later. The default clipboard behavior works for short actions, but it breaks down when users handle many snippets
            during active work. I wanted an app that keeps that history useful instead of disposable.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            The project also gave me a chance to build a utility product that feels premium without becoming complex. My goal was to keep the interaction calm and quick, while still adding
            serious features like Face ID locking and structured organization.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black">Problems I faced while building</h2>
          <p className="text-zinc-700 leading-relaxed">
            The first challenge was reducing duplicate clipboard captures. Copy behavior can change quickly, and storing every tiny variation makes the app noisy. I had to refine duplicate
            detection so users keep meaningful history while avoiding clutter.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            The second challenge was balancing security with speed. If lock checks happen too often, the app feels heavy. If they happen too rarely, sensitive content is not protected enough.
            I had to tune access points so secure content remains private while regular content stays instant.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            The third challenge was handling mixed data types in a consistent way. Text, links, and media need different rendering and storage behavior. The UI had to stay coherent even when
            clip types changed rapidly during normal user workflows.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black">AI tools used to enhance work</h2>
          <p className="text-zinc-700 leading-relaxed">
            For Holdboard, I used <strong>Codex</strong> to improve development speed and technical cleanup. Codex supported refactoring tasks, implementation drafts, and code organization,
            especially when iterating quickly across multiple feature paths.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Final decisions around privacy behavior, UX flow, and security boundaries were manually reviewed and tested by me. Codex helped accelerate execution, while product judgment and
            release quality remained under direct control.
          </p>
        </section>
      </main>
    </article>
  );
}
