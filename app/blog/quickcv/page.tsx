import { ArrowLeft, Terminal, Cpu, Zap, Box, ShieldCheck, User, Code, Layers, Sparkles, FileText, Layout, Download, MousePointerClick } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function QuickCVBlog() {
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
          The Craft <br /> 
          <span className="text-zinc-400">of QuickCV.</span>
        </h1>

        <p className="text-xl md:text-2xl text-zinc-500 leading-relaxed font-medium max-w-2xl">
          A high-performance, ATS-optimized resume engine designed to bridge the gap between career data and professional presentation.
        </p>
      </header>

      {/* 3. Hero Visual */}
      <div className="max-w-5xl mx-auto px-6 mb-20">
        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-zinc-100 border border-zinc-100 shadow-2xl">
          <Image 
            src="/quickcv.png" 
            alt="QuickCV Workspace" 
            fill 
            className="object-cover"
            priority 
          />
        </div>
      </div>

      {/* 4. The Content Flow */}
      <main className="max-w-2xl mx-auto px-6 space-y-24">
        
        {/* The Project Vision */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-zinc-400">
            <Sparkles size={18} />
            <h2 className="text-xs font-black uppercase tracking-[0.3em]">The Vision</h2>
          </div>
          <p className="text-lg leading-relaxed text-zinc-700">
            Most resume builders today are trapped behind paywalls or suffer from clunky, non-intuitive interfaces. <strong>QuickCV</strong> was engineered to be a completely free, developer-grade alternative. 
          </p>
          <p className="text-lg leading-relaxed text-zinc-700">
            The goal was simple: <strong>Zero friction.</strong> A side-by-side workspace where every keystroke is reflected instantly on a pixel-perfect A4 canvas. No &quot;Generate Preview&quot; buttons—just pure, real-time synchronization.
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
              <h4 className="font-bold text-black text-xl font-sans tracking-tight">Reactive State Management</h4>
              <p className="text-zinc-500 mt-2 leading-relaxed">Built with <strong>React.js</strong> and <strong>React Hook Form</strong>. This allows the application to handle complex, nested array structures (Experience, Education, Projects) without the performance overhead of traditional state updates.</p>
            </div>

            <div className="relative">
              <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-zinc-200 border-4 border-white" />
              <h4 className="font-bold text-black text-xl font-sans tracking-tight">PDF Export Pipeline</h4>
              <p className="text-zinc-500 mt-2 leading-relaxed">A custom implementation of <strong>html2canvas</strong> and <strong>jsPDF</strong>. The engine uses a $2\times$ scale factor to ensure 300 DPI print quality, bypassing the blurriness usually associated with browser-based PDF generation.</p>
            </div>

            <div className="relative">
              <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-zinc-200 border-4 border-white" />
              <h4 className="font-bold text-black text-xl font-sans tracking-tight">Geometric Layout Engine</h4>
              <p className="text-zinc-500 mt-2 leading-relaxed">CSS-driven A4 simulation ($210mm \times 297mm$). The engine uses absolute pixel mapping to ensure that the digital preview is a 1:1 match with the physical printed document.</p>
            </div>
          </div>
        </section>

        {/* Engineering Logic */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-zinc-400">
            <Cpu size={18} />
            <h2 className="text-xs font-black uppercase tracking-[0.3em]">Engineering Logic</h2>
          </div>
          <p className="text-lg leading-relaxed text-zinc-700">
            To solve the &quot;Context Switch&quot; between the form and the preview, I developed a <strong>Reverse-Focus Bridge</strong>.
          </p>

          <div className="bg-zinc-50 rounded-3xl p-8 border border-zinc-100">
             <h4 className="font-bold text-black mb-4 flex items-center gap-2 tracking-tight">
               <MousePointerClick size={18} className="text-emerald-600" />
               The Bidirectional Bridge
             </h4>
             <p className="text-zinc-600 leading-relaxed italic mb-2">
               &quot;Click the Document, Edit the Form.&quot;
             </p>
             <p className="text-zinc-600 text-sm leading-relaxed">
               By mapping specific data-paths to the preview elements, clicking any text on the resume automatically scrolls the editor to the correct input field and highlights it. This creates a seamless &quot;What You See Is What You Edit&quot; (WYSIWYE) flow.
             </p>
          </div>
        </section>

        {/* The Export Engine */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-zinc-400">
            <Terminal size={18} />
            <h2 className="text-xs font-black uppercase tracking-[0.3em]">The Export Engine</h2>
          </div>
          <p className="text-lg leading-relaxed text-zinc-700">
            The &quot;Content-Aware Cropper&quot; ensures that whitespace at the bottom of the document is calculated and trimmed before the PDF is finalized.
          </p>

          <div className="group bg-zinc-900 rounded-3xl p-8 font-mono text-sm leading-relaxed overflow-x-auto shadow-2xl relative">
            <div className="absolute top-4 right-6 text-zinc-600 text-[10px] uppercase font-black">pdf_engine_v1.ts</div>
            <code className="text-emerald-400">
              <span className="text-zinc-500">// Content-Aware Whitespace Trimming</span><br/>
              const imageData = ctx.getImageData(0, 0, w, h).data;<br/>
              let lastContentRow = -1;<br/>
              <span className="text-zinc-500">// Scan rows bottom-up for pixel data</span><br/>
              for (let row = h - 1; row &gt;= 0; row--) &#123;<br/>
              &nbsp;&nbsp;if (checkRowHasContent(row)) &#123; lastContentRow = row; break; &#125;<br/>
              &#125;
            </code>
          </div>
        </section>

        {/* 5. Centered Bottom Section (Button & Footer) */}
        <div className="pt-8 pb-16 space-y-20">
          <div className="flex flex-col items-center justify-center">
            <a 
              href="https://quickcv1.netlify.app/" 
              target="_blank"
              className="group inline-flex items-center gap-2 px-10 py-5 bg-black text-white rounded-full font-bold transition-all hover:bg-zinc-800 hover:scale-105 active:scale-95 shadow-xl"
            >
              Launch QuickCV
              <FileText size={16} fill="white" className="group-hover:animate-pulse" />
            </a>
            <span className="mt-4 text-zinc-400 text-[10px] uppercase tracking-widest font-black">
              100% Free • Open Access
            </span>
          </div>

          <footer className="flex flex-col items-center text-center">
            <div className="h-[1px] w-24 bg-zinc-100 mb-12" />
            <div className="space-y-3">
              <p className="text-zinc-400 text-sm italic">
                Designed and Developed by Srivatsav Karamala.
              </p>
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