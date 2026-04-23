import { ArrowLeft, ArrowUpRight, CircleHelp, Mail } from 'lucide-react';
import Link from 'next/link';

export default function FactReadSupportPage() {
  return (
    <article className="min-h-screen bg-white text-zinc-900">
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-zinc-50 border border-zinc-200 px-4 py-2 rounded-full text-zinc-600 hover:text-black transition-colors"
        >
          <ArrowLeft size={16} />
          <span className="text-sm font-bold">Back to Portfolio</span>
        </Link>

        <header className="mt-10 mb-8">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-700 font-black bg-zinc-100 px-3 py-1 rounded-full">
            <CircleHelp size={14} />
            FactRead Support
          </div>
          <h1 className="mt-5 text-4xl md:text-6xl font-bold tracking-tight">Support</h1>
          <p className="mt-4 text-zinc-600 text-lg">Need help with FactRead? Reach out and we&apos;ll assist quickly.</p>
        </header>

        <main className="space-y-8 leading-relaxed text-zinc-700">
          <section>
            <h2 className="text-xl font-bold text-black mb-2">Common help topics</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Playback controls and audio not starting.</li>
              <li>Theme, font, or brightness settings behavior.</li>
              <li>Language availability and text rendering issues.</li>
              <li>Bug reports or app performance feedback.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-2">Contact</h2>
            <a
              href="mailto:karamalasrivatsav@gmail.com?subject=FactRead%20Support"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-black text-white font-bold hover:bg-zinc-800 transition-colors"
            >
              <Mail size={16} />
              Email Support
            </a>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-2">Legal</h2>
            <div className="flex flex-wrap items-center gap-4 text-sm font-semibold">
              <Link
                href="/privacy/factread"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 underline underline-offset-4 decoration-1 transition-colors hover:text-blue-500"
              >
                Privacy Policy
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </section>
        </main>
      </div>
    </article>
  );
}
