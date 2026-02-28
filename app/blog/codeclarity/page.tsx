import { ArrowLeft, Terminal, Cpu, Zap, Box, ShieldCheck, User, Code, Layers, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function CodeClarityBlog() {
  return (
    <article className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-emerald-100">
      
      {/* 1. Fixed Back Button - Top Left */}
      <div className="fixed top-8 left-8 z-50">
        <Link href="/" className="group flex items-center gap-2 bg-white/80 backdrop-blur-md border border-zinc-200 px-4 py-2 rounded-full text-zinc-600 hover:text-black transition-all shadow-sm">
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
          <span className="text-sm font-bold">Back</span>
        </Link>
      </div>

      {/* 2. Editorial Header */}
      <header className="max-w-3xl mx-auto px-6 pt-32 pb-12 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-3 text-emerald-600 font-bold text-xs uppercase tracking-widest mb-6">
          <span className="bg-emerald-50 px-2 py-1 rounded">Case Study</span>
          <span>•</span>
          <span className="text-zinc-400">Feb 2026</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9] text-black">
          The Logic <br /> 
          <span className="text-zinc-400">of CodeClarity.</span>
        </h1>

        <p className="text-xl md:text-2xl text-zinc-500 leading-relaxed font-medium max-w-2xl">
          An AI-native documentation engine designed to bridge the gap between complex source code and human intuition.
        </p>
      </header>

      {/* 3. Hero Visual */}
      <div className="max-w-5xl mx-auto px-6 mb-20">
        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-zinc-100 border border-zinc-100 shadow-2xl">
          <Image 
            src="/codeclarity.png" 
            alt="CodeClarity Dashboard" 
            fill 
            className="object-cover"
            priority 
          />
        </div>
      </div>

      {/* 4. The Content Flow */}
      <main className="max-w-2xl mx-auto px-6 space-y-24">
        
        {/* Deep Detail: What is CodeClarity? */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-zinc-400">
            <Sparkles size={18} />
            <h2 className="text-xs font-black uppercase tracking-[0.3em]">The Product</h2>
          </div>
          <p className="text-lg leading-relaxed text-zinc-700">
            CodeClarity isn&apos;t just another GPT wrapper; it&apos;s a developer-first productivity layer. It takes raw code snippets—ranging from complex Python algorithms to dense React components—and generates a structured analysis. 
          </p>
          <p className="text-lg leading-relaxed text-zinc-700">
            Unlike standard chat interfaces that give verbose, conversational answers, CodeClarity provides <strong>Atomic Breakdowns</strong>. It identifies variables, explains the control flow, predicts the logical output, and offers optimization suggestions in a clean, non-distracting UI.
          </p>
        </section>

        {/* Vertical Tech Stack */}
        <section className="space-y-8 border-t border-zinc-50 pt-20">
          <div className="flex items-center gap-2 text-zinc-400">
            <Box size={18} />
            <h2 className="text-xs font-black uppercase tracking-[0.3em]">The Tech Stack</h2>
          </div>
          
          <div className="space-y-10 border-l border-zinc-100 pl-8 ml-2">
            <div className="relative">
              <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-black border-4 border-white" />
              <h4 className="font-bold text-black text-xl font-sans tracking-tight">Frontend Architecture</h4>
              <p className="text-zinc-500 mt-2 leading-relaxed">Built with <strong>React.js</strong> and <strong>TypeScript</strong>. I utilized <strong>Tailwind CSS</strong> for a system-level minimalist aesthetic and <strong>Lucide</strong> for iconography. The state management handles real-time API streaming and local persistence via <code>localStorage</code>.</p>
            </div>

            <div className="relative">
              <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-zinc-200 border-4 border-white" />
              <h4 className="font-bold text-black text-xl font-sans tracking-tight">Backend Logic</h4>
              <p className="text-zinc-500 mt-2 leading-relaxed">A <strong>Node.js</strong> and <strong>Express</strong> environment serving as a secure middleware. This layer acts as a buffer between the client and the AI, handling CORS, request sanitization, and error boundaries.</p>
            </div>

            <div className="relative">
              <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-zinc-200 border-4 border-white" />
              <h4 className="font-bold text-black text-xl font-sans tracking-tight">Intelligence Engine</h4>
              <p className="text-zinc-500 mt-2 leading-relaxed">Powered by the <strong>Google Gemini 1.5 Flash API</strong>. I specifically chose the Flash model for its incredibly low latency and high-throughput capabilities, which are essential for a &quot;real-time&quot; feel.</p>
            </div>
          </div>
        </section>

        {/* Behind the Project */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-zinc-400">
            <User size={18} />
            <h2 className="text-xs font-black uppercase tracking-[0.3em]">Behind the Project</h2>
          </div>
          <p className="text-lg leading-relaxed text-zinc-700">
            I built CodeClarity because I was tired of the &quot;Context Switch.&quot; Every time I had to ask an AI about a piece of code, I had to explain my environment and wait for a conversational response. I wanted a tool that behaved like a <strong>compiler for humans</strong>—input code, output understanding. No small talk.
          </p>
        </section>

        {/* Engineering Logic */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-zinc-400">
            <Cpu size={18} />
            <h2 className="text-xs font-black uppercase tracking-[0.3em]">Engineering Logic</h2>
          </div>
          <p className="text-lg leading-relaxed text-zinc-700">
            To prevent unnecessary API costs and provide instant feedback, I implemented a <strong>Heuristic Code Detector</strong> on the client side.
          </p>

          <div className="bg-zinc-50 rounded-3xl p-8 border border-zinc-100">
             <h4 className="font-bold text-black mb-4 flex items-center gap-2 tracking-tight">
               <ShieldCheck size={18} className="text-emerald-600" />
               Secure Token Proxy
             </h4>
             <p className="text-zinc-600 leading-relaxed italic mb-2">
               &quot;Never trust the client.&quot;
             </p>
             <p className="text-zinc-600 text-sm leading-relaxed">
               By engineering a backend proxy, the sensitive Gemini API keys remain entirely server-side. This architecture also allows for future-proofing, such as adding user authentication or database-backed history without rewriting the frontend logic.
             </p>
          </div>
        </section>

        {/* The Parser Implementation */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-zinc-400">
            <Terminal size={18} />
            <h2 className="text-xs font-black uppercase tracking-[0.3em]">The Parsing Engine</h2>
          </div>
          <p className="text-lg leading-relaxed text-zinc-700">
            The core challenge was <strong>Structural Integrity</strong>. AI outputs are non-deterministic. I designed a custom regex-based tokenizer that force-splits the AI response into a structured UI layout.
          </p>

          <div className="group bg-zinc-900 rounded-3xl p-8 font-mono text-sm leading-relaxed overflow-x-auto shadow-2xl relative">
            <div className="absolute top-4 right-6 text-zinc-600 text-[10px] uppercase font-black">logic_v1.ts</div>
            <code className="text-emerald-400">
              <span className="text-zinc-500">// Regex-based block extraction</span><br/>
              const parts = raw.split(/Summary:|Breakdown:|Output:/i);<br/>
              const responseObj = &#123;<br/>
              &nbsp;&nbsp;summary: parts[1]?.trim(),<br/>
              &nbsp;&nbsp;steps: parts[2]?.split(&quot;-&quot;).filter(Boolean)<br/>
              &#125;;
            </code>
          </div>
        </section>

        {/* 5. Centered Bottom Section (Button & Footer) */}
        <div className="pt-8 pb-16 space-y-20">
          <div className="flex flex-col items-center justify-center">
            <a 
              href="https://codeclarity-ai.vercel.app/" 
              target="_blank"
              className="group inline-flex items-center gap-2 px-10 py-5 bg-black text-white rounded-full font-bold transition-all hover:bg-zinc-800 hover:scale-105 active:scale-95 shadow-xl"
            >
              Launch CodeClarity
              <Zap size={16} fill="white" className="group-hover:animate-pulse" />
            </a>
            <span className="mt-4 text-zinc-400 text-[10px] uppercase tracking-widest font-black">
              Available on Web
            </span>
          </div>

          <footer className="flex flex-col items-center text-center">
            <div className="h-[1px] w-24 bg-zinc-100 mb-12" />
            <div className="space-y-3">
              <p className="text-zinc-300 text-[10px] uppercase tracking-widest font-bold">
                © 2026 All Rights Reserved.
              </p>
            </div>
          </footer>
        </div>
      </main>
    </article>
  );
}