import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function QuickCVBlog() {
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
        <h1 className="mt-4 text-5xl md:text-7xl font-bold tracking-tight text-black">QuickCV</h1>
        <p className="mt-4 text-xl text-zinc-600">Built for fun, made to help people create better resumes faster.</p>
      </header>

      <div className="max-w-6xl mx-auto px-6 mb-16">
        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden border border-zinc-200 shadow-sm">
          <Image src="/quickcv.png" alt="QuickCV workspace" fill className="object-cover" priority />
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-6 pb-20 space-y-12">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black">Detailed overview</h2>
          <p className="text-zinc-700 leading-relaxed">
            QuickCV is a web-based resume builder that gives users a live preview while they edit content. The product focuses on practical speed:
            fill details, review formatting instantly, and export a professional PDF without additional design software.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            It is designed for real job-search scenarios where users need clean structure, ATS-friendly formatting, and a reliable output pipeline.
            Instead of heavy templates and hidden controls, the interface keeps actions visible and predictable.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black">Why I built this app</h2>
          <p className="text-zinc-700 leading-relaxed">
            I built QuickCV because many resume tools are either expensive or complicated for first-time users. I wanted a product that gives people confidence quickly,
            especially when they are already stressed during job applications.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            The main idea was to reduce friction. Users should not need to understand design systems just to produce a strong resume. They should focus on their content,
            and the tool should handle layout quality for them.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black">Problems I faced while building</h2>
          <p className="text-zinc-700 leading-relaxed">
            PDF export quality was the biggest challenge. Browser-generated PDFs can become blurry or inconsistent depending on device and scaling settings.
            I had to fine-tune rendering behavior to keep output sharp and professional.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Another challenge was keeping preview and form state perfectly synchronized. Users expect immediate visual feedback while typing, so updates had to feel instant
            without creating unnecessary re-renders.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            ATS compatibility also required careful formatting choices. Rich visual layouts can break machine readability, so I balanced clean design with parser-safe document structure.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black">AI tools used to enhance work</h2>
          <p className="text-zinc-700 leading-relaxed">
            I used AI support during development mainly for faster coding assistance, copy refinement, and quick iteration on form and export utilities.
            It helped reduce repetitive work and improved development speed.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Final behavior, template decisions, and output testing were still verified manually to ensure resumes remain dependable across different user profiles.
          </p>
        </section>

        <a href="https://quickcv1.netlify.app/" target="_blank" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white font-bold hover:bg-zinc-800 transition-colors">
          Launch QuickCV
          <ArrowUpRight size={16} />
        </a>
      </main>
    </article>
  );
}
