import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function HoldboardBlog() {
  return (
    <article className="min-h-screen bg-white text-zinc-900 selection:bg-zinc-200">
      <div className="fixed top-4 left-4 md:top-8 md:left-8 z-50">
        <Link href="/#blogs" className="group flex items-center gap-2 bg-white/85 backdrop-blur-md border border-zinc-200 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-zinc-600 hover:text-black transition-all shadow-sm">
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
          <span className="text-xs md:text-sm font-bold">Back</span>
        </Link>
      </div>

      <header className="max-w-4xl mx-auto px-5 md:px-6 pt-24 md:pt-28 pb-8 md:pb-10 text-center md:text-left">
        <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 font-bold">By Srivatsav</p>
        <h1 className="mt-4 text-4xl md:text-7xl font-bold tracking-tight text-black">Holdboard</h1>
        <p className="mt-3 md:mt-4 text-base md:text-xl text-zinc-600">Built for fun, crafted to help people keep their clipboard clean, organized, and safe.</p>
      </header>

      <div className="max-w-6xl mx-auto px-5 md:px-6 mb-12 md:mb-16">
        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden border border-zinc-200 shadow-sm">
          <Image src="/holdboard/holdboard-cover.jpg" alt="Holdboard showcase" fill className="object-cover" priority />
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-5 md:px-6 pb-16 md:pb-20 space-y-10 md:space-y-12">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black">What Holdboard is</h2>
          <p className="text-zinc-700 leading-relaxed">
            Holdboard is an iOS clipboard manager built for people who copy a lot of data every day and need to retrieve it quickly.
            Instead of losing important snippets after one paste, users can keep clips, group them, and reopen them later with context.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            The app supports multiple clip types, quick categorization, and security-focused storage for sensitive entries.
            The main idea is simple: turn temporary clipboard actions into a clean, searchable personal workspace.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Holdboard also includes a custom keyboard, so saved clips can be accessed anywhere, anytime while typing in other apps.
            This removes app-switching friction and makes reuse instant.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black">How Holdboard works</h2>
          <p className="text-zinc-700 leading-relaxed">
            Users copy content as usual, then Holdboard helps organize those clips into meaningful groups. The home layer surfaces recent and useful data,
            while folders and bookmarks provide long-term structure for repeated tasks.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Sensitive clips can be protected with Face ID-based access controls, so private data stays private even when other content remains instantly accessible.
            This split model is what keeps the app both secure and fast.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            The keyboard extension is the most practical part of the workflow. Users can open Holdboard directly from the keyboard bar in any app, filter by type,
            and insert or copy clips without leaving the current screen.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black">How we built it</h2>
          <p className="text-zinc-700 leading-relaxed">
            We built Holdboard with a clean data model first, then designed interfaces around everyday user flows: save, search, reopen, and protect.
            SwiftUI was used for responsive UI composition, while local storage and indexing were tuned for fast retrieval.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            The UX system was designed to stay minimal on the surface but powerful underneath. That means core actions are one tap away,
            while advanced behavior like grouping and lock controls remains intuitive and unobtrusive.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black">Problems faced during building</h2>
          <p className="text-zinc-700 leading-relaxed">
            The first challenge was de-duplication quality. Clipboard data can change slightly and frequently, and storing everything makes history noisy.
            We refined duplicate handling so users keep meaningful entries without clutter.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            The second challenge was balancing security and speed. Too many lock prompts damage usability, while too few reduce protection.
            We tuned lock boundaries so sensitive data is gated while regular workflows stay fast.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            The third challenge was consistency across mixed clip types. Text, links, and media each need different rendering rules,
            but the interface still has to feel like one unified system.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black">AI tools used</h2>
          <p className="text-zinc-700 leading-relaxed">
            We used <strong>Codex</strong> to accelerate implementation, refactoring, and code cleanup during fast iteration cycles.
            Final behavior, privacy boundaries, and UX decisions were manually reviewed and validated.
          </p>
        </section>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="https://apps.apple.com/us/app/holdboard/id6761117827"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full sm:w-auto justify-center items-center gap-2 px-6 py-3 rounded-full bg-black text-white font-bold hover:bg-zinc-800 transition-colors"
          >
            Download now
          </a>
          <Link href="/privacy/holdboard" className="inline-flex w-full sm:w-auto justify-center items-center gap-2 px-6 py-3 rounded-full border border-zinc-300 text-zinc-800 font-bold hover:bg-zinc-100 transition-colors">
            Privacy Policy
          </Link>
        </div>
      </main>
    </article>
  );
}
