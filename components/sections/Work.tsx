'use client';

import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import { triggerSubtleHaptic } from '@/components/utils/subtleHaptics';

type Project = {
  title: string;
  subtitle: string;
  description: string;
  screenshots: string[];
  link: string;
  blogLink: string;
};

function ProjectMedia({ project, eager = false }: { project: Project; eager?: boolean }) {
  const previews = project.screenshots.slice(0, 3);

  if (previews.length === 1) {
    return (
      <div className="relative w-full aspect-[16/10] overflow-hidden rounded-3xl border border-white/70 bg-white/60 shadow-[0_28px_70px_-55px_rgba(15,23,42,0.7)] backdrop-blur-xl">
        <Image
          src={previews[0]}
          alt={`${project.title} preview`}
          fill
          sizes="(max-width: 768px) 92vw, (max-width: 1024px) 58vw, 42vw"
          priority={eager}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-3">
      {previews.map((src, idx) => (
        <div
          key={`${project.title}-${idx}`}
          className="relative aspect-[9/18] overflow-hidden rounded-[20px] border border-white/75 bg-white/70 shadow-[0_20px_48px_-38px_rgba(15,23,42,0.7)] backdrop-blur-xl"
        >
          <Image
            src={src}
            alt={`${project.title} screenshot ${idx + 1}`}
            fill
            sizes="(max-width: 768px) 28vw, (max-width: 1200px) 18vw, 14vw"
            priority={eager && idx === 0}
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}

function WorkCard({ project, index }: { project: Project; index: number }) {
  const isExternal = project.link.startsWith('http');

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      onViewportEnter={() => triggerSubtleHaptic()}
      className="py-7 md:py-10 border-b border-zinc-200/80 last:border-b-0"
    >
      <div className="grid items-center gap-6 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-7">
          <ProjectMedia project={project} eager={index < 2} />
        </div>

        <div className="md:col-span-5 space-y-4 md:space-y-5">
          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-zinc-500">{project.subtitle}</p>
          <h3 className="text-2xl md:text-[2rem] leading-tight font-semibold tracking-tight text-zinc-900">{project.title}</h3>
          <p className="max-w-[52ch] text-sm md:text-[15px] leading-relaxed text-zinc-600">{project.description}</p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href={project.blogLink}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 underline underline-offset-4 decoration-1 transition-colors hover:text-blue-500"
            >
              Read Post
              <ArrowUpRight size={14} />
            </Link>

            {isExternal ? (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-900 underline underline-offset-4 decoration-1 transition-colors hover:text-zinc-600"
              >
                View Product
                <ArrowUpRight size={14} />
              </a>
            ) : (
              <Link
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-900 underline underline-offset-4 decoration-1 transition-colors hover:text-zinc-600"
              >
                View Product
                <ArrowUpRight size={14} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Work() {
  const projects: Project[] = [
    {
      title: 'Holdboard',
      subtitle: 'iOS Clipboard Utility',
      description:
        'Holdboard is a privacy-first clipboard manager built for people who copy constantly across apps and workflows. It keeps every clip structured in a clean vault so nothing useful gets lost in the scroll. Sensitive snippets are protected with Face ID, while retrieval stays fast enough for real daily use. The experience is tuned to feel calm, reliable, and intentionally lightweight from first launch.',
      screenshots: ['/holdboard/holdboard-cover.jpg'],
      link: 'https://apps.apple.com/us/app/holdboard/id6761117827',
      blogLink: '/blog/holdboard',
    },
    {
      title: 'FactRead',
      subtitle: 'iOS Reading App',
      description:
        'FactRead turns learning into a swipe flow where every screen is built for focus instead of clutter. Readers can move quickly through curated facts, switch narration modes, and tune typography for comfort in long sessions. The layout balances speed with depth, so discovery feels smooth without losing context. It is designed to make daily reading consistent, memorable, and easy to return to.',
      screenshots: ['/factread/factread-1.png', '/factread/factread-2.png', '/factread/factread-3.png'],
      link: 'https://apps.apple.com/us/app/factread-swipe-to-read/id6762402891',
      blogLink: '/blog/factread',
    },
    {
      title: 'MoneyFormula',
      subtitle: 'iOS Finance Utility',
      description:
        'MoneyFormula is built for fast financial decisions when you need precise outputs without spreadsheet friction. It brings common investment, tax, and planning formulas into one focused workflow with quick entry and instant clarity. Search, saved history, and reusable inputs reduce repeated effort for everyday scenarios. The product stays practical, no-noise, and optimized for confident decisions in minutes.',
      screenshots: ['/moneyformula/moneyformula-1.png', '/moneyformula/moneyformula-2.png', '/moneyformula/moneyformula-3.png'],
      link: 'https://apps.apple.com/us/app/moneyformula-finance-calc/id6762509637',
      blogLink: '/blog/moneyformula',
    },
    {
      title: 'Pureclick Walls',
      subtitle: 'Android Wallpaper App',
      description:
        'Pureclick Walls focuses on visual quality and browsing speed so wallpaper discovery feels premium from the first tap. Collections are curated for consistency, while preview interactions are tuned to keep the experience fluid. Performance work behind the scenes keeps image-heavy screens responsive even during deep browsing. The app is shaped to feel immersive, fast, and visually clean end to end.',
      screenshots: ['/pureclick/pureclick-1.png', '/pureclick/pureclick-2.png', '/pureclick/pureclick-3.png'],
      link: 'https://play.google.com/store/apps/details?id=com.pureclickwalls.app&hl=en',
      blogLink: '/blog/pureclick',
    },
    {
      title: 'CodeClarity',
      subtitle: 'AI Web App',
      description:
        'CodeClarity helps developers understand complex snippets by translating raw code into structured, readable reasoning. Instead of generic summaries, it highlights what matters, why it matters, and what to do next. The interface is tuned for speed so users can move from confusion to action with minimal context switching. It is built as a practical companion for real-world debugging, learning, and review.',
      screenshots: ['/codeclarity/codeclarity-cover.png'],
      link: 'https://codeclarity-ai.vercel.app/',
      blogLink: '/blog/codeclarity',
    },
    {
      title: 'Quick CV',
      subtitle: 'Web Resume Builder',
      description:
        'Quick CV is designed for candidates who need professional resumes without wasting time on rigid editors. It offers real-time previewing, clean visual hierarchy, and export-ready output that stays consistent in print. Templates are tuned for practical readability while remaining friendly to automated screening systems. The full flow is streamlined so users can create, refine, and ship a strong resume quickly.',
      screenshots: ['/quickcv/quickcv-cover.png'],
      link: 'https://quickcv1.netlify.app/',
      blogLink: '/blog/quickcv',
    },
  ];

  return (
    <section id="work" className="mx-auto max-w-7xl px-6 py-24 md:py-28">
      <SectionHeading title="Work" subtitle="A minimal selection of products and the stories behind them." />

      <div className="mt-2">
        {projects.map((project, index) => (
          <WorkCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
