import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function CodeClarityBlog() {
  return (
    <article className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-zinc-700">
      <div className="sticky top-4 md:top-8 z-50 w-fit ml-4 md:ml-8">
        <Link href="/#work" className="group flex items-center gap-2 bg-zinc-900 border border-zinc-700 px-4 py-2 rounded-full text-zinc-300 hover:text-white hover:bg-zinc-800 transition-all shadow-sm">
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
          <span className="text-sm font-bold">Back</span>
        </Link>
      </div>

      <header className="relative z-10 max-w-4xl mx-auto px-6 pt-28 pb-10 text-center md:text-left">
        <p className="text-xs uppercase tracking-[0.25em] text-zinc-400 font-bold">By Srivatsav</p>
        <h1 className="mt-4 text-5xl md:text-7xl font-bold tracking-tight text-white">CodeClarity</h1>
        <p className="mt-4 text-xl text-zinc-300">Built for fun, shaped to help developers understand code faster.</p>
      </header>

      <div className="relative z-10 max-w-6xl mx-auto px-6 mb-16">
        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-sm">
          <Image src="/codeclarity/codeclarity-cover.png" alt="CodeClarity dashboard" fill className="object-cover" priority />
        </div>
      </div>

      <main className="relative z-10 max-w-3xl mx-auto px-6 pb-20 space-y-10">
        <section className="space-y-4 border-b border-zinc-800 pb-8">
          <h2 className="text-2xl font-bold text-white">Tech stack</h2>
          <p className="text-zinc-300 leading-relaxed">
            Next.js, React, OpenAI API.
          </p>
        </section>

        <section className="space-y-4 border-b border-zinc-800 pb-8">
          <h2 className="text-2xl font-bold text-white">Detailed overview</h2>
          <p className="text-zinc-300 leading-relaxed">
            CodeClarity is a developer-focused web tool that turns raw source code into structured explanations. Instead of generic responses, the output is formatted for practical use:
            what the code does, how the flow works, and where improvements are likely.
          </p>
          <p className="text-zinc-300 leading-relaxed">
            The product is designed for speed and clarity. Engineers can paste unfamiliar snippets and quickly understand behavior without spending extra time context switching across docs,
            forums, and long chat responses.
          </p>
        </section>

        <section className="space-y-4 border-b border-zinc-800 pb-8">
          <h2 className="text-2xl font-bold text-white">Why I built this app</h2>
          <p className="text-zinc-300 leading-relaxed">
            I built CodeClarity because I kept wasting time decoding unfamiliar code during active product development. Most AI tools were helpful, but many responses felt too conversational when what I actually needed was a crisp engineering breakdown.
          </p>
          <p className="text-zinc-300 leading-relaxed">
            I wanted something closer to how real developers think while debugging: less noise, more signal, and clear next actions. This project was my attempt to turn that need into a usable workflow that moves people from confusion to implementation decisions quickly.
          </p>
        </section>

        <section className="space-y-4 border-b border-zinc-800 pb-8">
          <h2 className="text-2xl font-bold text-white">Problems I faced while building</h2>
          <p className="text-zinc-300 leading-relaxed">
            The hardest problem was output reliability. AI responses can vary a lot, and UI rendering breaks when the structure is inconsistent. I had to add strict parsing and fallback rules
            to keep presentation stable.
          </p>
          <p className="text-zinc-300 leading-relaxed">
            Another challenge was balancing response quality with latency. Richer prompts improve explanation depth but can increase response time and cost. I iterated on prompt shape and
            response handling to keep performance acceptable for daily use.
          </p>
          <p className="text-zinc-300 leading-relaxed">
            Security and key management were also important concerns. I implemented a backend proxy approach so sensitive API access stayed server-side instead of being exposed in the client.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">AI tools used to enhance work</h2>
          <p className="text-zinc-300 leading-relaxed">
            CodeClarity itself uses an AI model as the core interpretation engine. During development, I used AI-assisted coding support to speed up refactoring and improve clarity in both
            code structure and user-facing wording.
          </p>
          <p className="text-zinc-300 leading-relaxed">
            Even with AI support, I manually validated output quality and edge cases to ensure the product remained dependable for real developer workflows.
          </p>
        </section>

        <a href="https://codeclarity-ai.vercel.app/" target="_blank" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-100 text-zinc-950 font-bold hover:bg-white transition-colors">
          Launch CodeClarity
          <ArrowUpRight size={16} />
        </a>
      </main>
    </article>
  );
}
