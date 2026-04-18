import { ArrowRight, Clock3 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Blogs() {
  const posts = [
    {
      title: 'FactRead: Swipe.Read.Wonder',
      excerpt:
        'Building an iOS reading app with Liquid Glass-inspired surfaces, multilingual narration, and adaptive readability controls.',
      date: 'Apr 2026',
      project: 'iOS / Reading',
      image: '/factread/factreadicon.png',
      href: '/blog/factread',
      readTime: '7 min read',
    },

    {
      title: 'MoneyFormula: Every Formula, One App',
      excerpt:
        'How MoneyFormula simplifies daily finance calculations with fast inputs, clean results, saved history, and instant category search.',
      date: 'Apr 2026',
      project: 'iOS / Finance',
      image: '/moneyformula/moneyformula-1.png',
      href: '/blog/moneyformula',
      readTime: '6 min read',
    },
    {
      title: 'Holdboard: Clipboard, Reimagined',
      excerpt:
        'Engineering a secure clipboard vault with Face ID protection, structured folders, and low-friction retrieval for real workflows.',
      date: 'Apr 2026',
      project: 'iOS / Utility',
      image: '/holdboard/holdboard-icon.png',
      href: '/blog/holdboard',
      readTime: '8 min read',
    },
    {
      title: 'Design of Pureclick Walls',
      excerpt:
        'A deep dive into native wallpaper APIs, performance decisions, and visual quality controls inside an Android product.',
      date: 'Jan 2026',
      project: 'Android',
      image: '/pureclick/pureclick-icon.png',
      href: '/blog/pureclick',
      readTime: '6 min read',
    },
    {
      title: 'The Logic of Clarity',
      excerpt:
        'How CodeClarity converts raw snippets into structured developer understanding with practical output and optimization paths.',
      date: 'Nov 2025',
      project: 'AI / Web',
      image: '/codeclarity/codeclarity-cover.png',
      href: '/blog/codeclarity',
      readTime: '6 min read',
    },
    {
      title: 'Building Quick CV',
      excerpt:
        'Designing a real-time resume system with ATS-safe formatting and print-quality export without paid-tool lock-in.',
      date: 'Sept 2025',
      project: 'Web / Productivity',
      image: '/quickcv/quickcv-cover.png',
      href: '/blog/quickcv',
      readTime: '5 min read',
    },
  ];

  return (
    <section id="blogs" className="py-28 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-[18px] font-black uppercase tracking-[0.38em] text-zinc-700 mb-4">Case Studies</h2>
        <div className="h-[1px] w-full bg-zinc-200" />
      </div>

      <div className="space-y-8">
        {posts.map((post, index) => (
          <article
            key={index}
            className="group flex flex-col md:flex-row items-center gap-8 md:gap-10 p-6 md:p-8 rounded-[32px] border border-white bg-white/80 backdrop-blur-xl transition-all duration-500 hover:shadow-[0_24px_70px_-45px_rgba(0,0,0,0.45)]"
          >
            <div className="relative w-full md:w-[36%] aspect-[16/10] rounded-3xl overflow-hidden shadow-sm bg-zinc-100 border border-zinc-200/70">
              <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>

            <div className="flex-1 space-y-4">
              <div className="flex flex-wrap items-center gap-3 text-[10px] font-black uppercase tracking-widest text-zinc-400">
                <span>{post.date}</span>
                <span className="w-1 h-1 bg-zinc-300 rounded-full" />
                <span>{post.project}</span>
                <span className="w-1 h-1 bg-zinc-300 rounded-full" />
                <span className="inline-flex items-center gap-1.5 normal-case tracking-normal font-semibold text-zinc-500">
                  <Clock3 size={12} />
                  {post.readTime}
                </span>
              </div>

              <h4 className="text-3xl md:text-4xl font-bold tracking-tight text-black text-balance">{post.title}</h4>
              <p className="text-zinc-600 text-lg leading-relaxed max-w-2xl">{post.excerpt}</p>

              <Link href={post.href} className="inline-flex items-center gap-3 pt-2 text-[12px] font-black uppercase tracking-widest text-black">
                Read Full Breakdown
                <span className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center transition-all group-hover:bg-black group-hover:text-white group-hover:border-black">
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
