import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function MoneyFormulaBlog() {
  const screenshots = [
    '/moneyformula/moneyformula-1.png',
    '/moneyformula/moneyformula-2.png',
    '/moneyformula/moneyformula-3.png',
    '/moneyformula/moneyformula-4.png',
    '/moneyformula/moneyformula-5.png',
  ];

  return (
    <article className="min-h-screen bg-white text-zinc-900 selection:bg-zinc-200">
      <div className="fixed top-4 left-4 md:top-8 md:left-8 z-50">
        <Link href="/#blogs" className="group flex items-center gap-2 bg-white/80 backdrop-blur-md border border-zinc-200 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-zinc-600 hover:text-black transition-all shadow-sm">
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
          <span className="text-xs md:text-sm font-bold">Back</span>
        </Link>
      </div>

      <header className="max-w-4xl mx-auto px-5 md:px-6 pt-24 md:pt-28 pb-8 md:pb-10 text-center md:text-left">
        <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 font-bold">By Srivatsav</p>
        <h1 className="mt-4 text-4xl md:text-7xl font-bold tracking-tight text-black">MoneyFormula</h1>
        <p className="mt-3 md:mt-4 text-base md:text-xl text-zinc-600">Built for fun, made to help people calculate money decisions in seconds.</p>
      </header>

      <div className="max-w-6xl mx-auto px-5 md:px-6 mb-12 md:mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          {screenshots.map((src, index) => (
            <div key={src} className="relative aspect-[9/19] rounded-2xl overflow-hidden border border-zinc-100 shadow-sm">
              <Image src={src} alt={`MoneyFormula screenshot ${index + 1}`} fill className="object-cover" priority={index < 2} />
            </div>
          ))}
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-5 md:px-6 pb-16 md:pb-20 space-y-10 md:space-y-12">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black">Detailed overview</h2>
          <p className="text-zinc-700 leading-relaxed">
            MoneyFormula is a mobile finance utility app that brings common investment and taxation calculations into one place. Instead of jumping between websites,
            spreadsheets, and calculator apps, users can open one screen, enter values, and get clean output instantly.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            The app includes formula categories, quick search, saved history, and favorites for frequently used calculations. It is designed for practical daily use,
            especially for users who want fast answers without financial jargon-heavy interfaces.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black">Why I built this app</h2>
          <p className="text-zinc-700 leading-relaxed">
            I built MoneyFormula because most personal finance calculators are scattered across many websites with inconsistent UI and unclear outputs.
            I wanted a single mobile experience where people can calculate, compare, and revisit financial scenarios quickly.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black">Problems I faced while building</h2>
          <p className="text-zinc-700 leading-relaxed">
            The main challenge was designing formula inputs that stay simple while still supporting realistic edge cases. I also had to ensure that result cards remain
            understandable for non-technical users and that the history module stays performant with repeated usage.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black">AI tools used to enhance work</h2>
          <p className="text-zinc-700 leading-relaxed">
            For MoneyFormula, I used <strong>Codex</strong> to speed up repetitive implementation tasks, refine component structure, and improve code clarity while iterating quickly.
            Formula correctness, validation boundaries, and financial output behavior were manually reviewed before release.
          </p>
        </section>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="https://apps.apple.com/us/search?term=MoneyFormula"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full sm:w-auto justify-center items-center gap-2 px-6 py-3 rounded-full bg-black text-white font-bold hover:bg-zinc-800 transition-colors"
          >
            Download now
          </a>
          <Link href="/privacy/moneyformula" className="inline-flex w-full sm:w-auto justify-center items-center gap-2 px-6 py-3 rounded-full border border-zinc-300 text-zinc-800 font-bold hover:bg-zinc-100 transition-colors">
            Privacy Policy
          </Link>
        </div>
      </main>
    </article>
  );
}
