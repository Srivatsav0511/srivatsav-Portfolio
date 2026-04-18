import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function CodeClarityBlog() {
  return (
    <article className="min-h-screen bg-white text-zinc-900 selection:bg-emerald-100">
      <div className="fixed top-8 left-8 z-50">
        <Link href="/" className="group flex items-center gap-2 bg-white/80 backdrop-blur-md border border-zinc-200 px-4 py-2 rounded-full text-zinc-600 hover:text-black transition-all shadow-sm">
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
          <span className="text-sm font-bold">Back</span>
        </Link>
      </div>

      <header className="max-w-4xl mx-auto px-6 pt-28 pb-10 text-center md:text-left">
        <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 font-bold">By Srivatsav</p>
        <h1 className="mt-4 text-5xl md:text-7xl font-bold tracking-tight text-black">CodeClarity</h1>
        <p className="mt-4 text-xl text-zinc-600">Built for fun, shaped to help developers understand code faster.</p>
      </header>

      <div className="max-w-6xl mx-auto px-6 mb-16">
        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden border border-zinc-200 shadow-sm">
          <Image src="/codeclarity/codeclarity-cover.png" alt="CodeClarity dashboard" fill className="object-cover" priority />
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-6 pb-20 space-y-12">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black">Detailed overview</h2>
          <p className="text-zinc-700 leading-relaxed">
            CodeClarity is a developer-focused web tool that turns raw source code into structured explanations. Instead of generic responses, the output is formatted for practical use:
            what the code does, how the flow works, and where improvements are likely.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            The product is designed for speed and clarity. Engineers can paste unfamiliar snippets and quickly understand behavior without spending extra time context switching across docs,
            forums, and long chat responses.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black">Why I built this app</h2>
          <p className="text-zinc-700 leading-relaxed">
            I built CodeClarity because I wanted a faster way to reason about code while actively building products. Many AI tools are useful but too conversational when the real need is
            structured, actionable explanation.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            This project was an attempt to close that gap: less noise, more signal. The goal was to help developers move from confusion to implementation decisions as quickly as possible.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black">Problems I faced while building</h2>
          <p className="text-zinc-700 leading-relaxed">
            The hardest problem was output reliability. AI responses can vary a lot, and UI rendering breaks when the structure is inconsistent. I had to add strict parsing and fallback rules
            to keep presentation stable.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Another challenge was balancing response quality with latency. Richer prompts improve explanation depth but can increase response time and cost. I iterated on prompt shape and
            response handling to keep performance acceptable for daily use.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Security and key management were also important concerns. I implemented a backend proxy approach so sensitive API access stayed server-side instead of being exposed in the client.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black">AI tools used to enhance work</h2>
          <p className="text-zinc-700 leading-relaxed">
            CodeClarity itself uses an AI model as the core interpretation engine. During development, I used AI-assisted coding support to speed up refactoring and improve clarity in both
            code structure and user-facing wording.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Even with AI support, I manually validated output quality and edge cases to ensure the product remained dependable for real developer workflows.
          </p>
        </section>

        <a href="https://codeclarity-ai.vercel.app/" target="_blank" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white font-bold hover:bg-zinc-800 transition-colors">
          Launch CodeClarity
          <ArrowUpRight size={16} />
        </a>
      </main>
    </article>
  );
}
