'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type Project = {
  title: string;
  icon: string;
  kind: 'mobile' | 'web';
  date: string;
  description: string;
  media: { src: string; alt: string; type: 'desktop' | 'mobile' }[];
  autoSlide?: boolean;
  productLink: string;
};

const projects: Project[] = [
  {
    title: 'Holdboard for MacOS',
    icon: '/apps/holdboard-macos/icon.png',
    kind: 'mobile',
    date: 'May 2026',
    description:
      'Holdboard for Mac brings clipboard control to desktop with rich previews, fast retrieval, and smart organization for links, files, and media. It is designed for speed during real work, not just storage.',
    media: [
      { src: '/apps/holdboard-macos/previews/preview-01.png', alt: 'Holdboard Mac preview 1', type: 'desktop' },
      { src: '/apps/holdboard-macos/previews/preview-02.png', alt: 'Holdboard Mac preview 2', type: 'desktop' },
      { src: '/apps/holdboard-macos/previews/preview-03.png', alt: 'Holdboard Mac preview 3', type: 'desktop' },
    ],
    autoSlide: true,
    productLink: 'https://apps.apple.com/us/app/holdboard/id6761117827',
  },
  {
    title: 'Holdboard for iOS',
    icon: '/apps/holdboard-ios/icon.png',
    kind: 'mobile',
    date: 'Feb 2026',
    description:
      'Holdboard is a privacy-first clipboard manager built for people who copy constantly across apps and workflows. It keeps every clip structured in a clean vault so nothing useful gets lost.',
    media: [
      { src: '/apps/holdboard-ios/previews/preview-01.png', alt: 'Holdboard screenshot 1', type: 'mobile' },
      { src: '/apps/holdboard-ios/previews/preview-02.png', alt: 'Holdboard screenshot 2', type: 'mobile' },
      { src: '/apps/holdboard-ios/previews/preview-03.png', alt: 'Holdboard screenshot 3', type: 'mobile' },
    ],
    productLink: 'https://apps.apple.com/us/app/holdboard/id6761117827',
  },
  {
    title: 'FactRead',
    icon: '/factread/factread-Icon.png',
    kind: 'mobile',
    date: 'Mar 2026',
    description:
      'FactRead turns learning into a swipe flow where every screen is built for focus instead of clutter. The layout balances speed with depth so daily reading stays consistent and easy to return to.',
    media: [
      { src: '/factread/factread-1.png', alt: 'FactRead screenshot 1', type: 'mobile' },
      { src: '/factread/factread-2.png', alt: 'FactRead screenshot 2', type: 'mobile' },
      { src: '/factread/factread-3.png', alt: 'FactRead screenshot 3', type: 'mobile' },
    ],
    productLink: 'https://apps.apple.com/us/app/factread-swipe-to-read/id6762402891',
  },
  {
    title: 'MoneyFormula',
    icon: '/moneyformula/moneyformula-icon.png',
    kind: 'mobile',
    date: 'Mar 2026',
    description:
      'MoneyFormula gives practical finance calculators in one place for daily use. Users can run quick calculations for planning, tax, and investment decisions with clear outputs.',
    media: [
      { src: '/moneyformula/moneyformula-1.png', alt: 'MoneyFormula screenshot 1', type: 'mobile' },
      { src: '/moneyformula/moneyformula-2.png', alt: 'MoneyFormula screenshot 2', type: 'mobile' },
      { src: '/moneyformula/moneyformula-3.png', alt: 'MoneyFormula screenshot 3', type: 'mobile' },
    ],
    productLink: 'https://apps.apple.com/in/app/moneyformula-finance-calc/id6762509637',
  },
  {
    title: 'Pureclick Walls',
    icon: '/pureclick/pureclick-icon.png',
    kind: 'mobile',
    date: 'Dec 2025',
    description:
      'Pureclick helps users quickly compare options and complete purchases with less friction. It is designed to make discovery, decision-making, and checkout feel lightweight and clear.',
    media: [
      { src: '/pureclick/pureclick-1.png', alt: 'Pureclick screenshot 1', type: 'mobile' },
      { src: '/pureclick/pureclick-2.png', alt: 'Pureclick screenshot 2', type: 'mobile' },
      { src: '/pureclick/pureclick-3.png', alt: 'Pureclick screenshot 3', type: 'mobile' },
    ],
    productLink: 'https://play.google.com/store/apps/details?id=com.pureclickwalls.app&pcampaignid=web_share',
  },
  {
    title: 'CodeClarity',
    icon: '/codeclarity/codeclarity-cover.png',
    kind: 'web',
    date: 'Nov 2025',
    description:
      'CodeClarity helps developers understand complex snippets by translating raw code into structured, readable reasoning. The interface is tuned for speed so users can move from confusion to action quickly.',
    media: [{ src: '/codeclarity/codeclarity-cover.png', alt: 'CodeClarity preview', type: 'desktop' }],
    productLink: 'https://codeclarity-ai.vercel.app/',
  },
  {
    title: 'Quick CV',
    icon: '/quickcv/quickcv-cover.png',
    kind: 'web',
    date: 'Oct 2025',
    description:
      'Quick CV is designed for candidates who need professional resumes without wasting time on rigid editors. The full flow is streamlined so users can create, refine, and export quickly.',
    media: [{ src: '/quickcv/quickcv-cover.png', alt: 'Quick CV preview', type: 'desktop' }],
    productLink: 'https://quickcv1.netlify.app/',
  },
];

export default function Work() {
  const [isWorkInView, setIsWorkInView] = useState(false);
  const [slides, setSlides] = useState<Record<string, number>>({});

  useEffect(() => {
    const autoSlideProjects = projects.filter((project) => project.autoSlide && project.media.length > 1);
    if (autoSlideProjects.length === 0 || !isWorkInView) return;

    const timer = window.setInterval(() => {
      setSlides((prev) => {
        const next = { ...prev };
        autoSlideProjects.forEach((project) => {
          const current = prev[project.title] ?? 0;
          next[project.title] = (current + 1) % project.media.length;
        });
        return next;
      });
    }, 3000);

    return () => window.clearInterval(timer);
  }, [isWorkInView]);

  return (
    <motion.section
      id="work"
      className="mx-auto max-w-7xl px-6 py-24 md:py-28"
      onViewportEnter={() => {
        setIsWorkInView(true);
        setSlides((prev) => {
          const next = { ...prev };
          projects
            .filter((project) => project.autoSlide && project.media.length > 1)
            .forEach((project) => {
              next[project.title] = 0;
            });
          return next;
        });
      }}
      onViewportLeave={() => setIsWorkInView(false)}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mb-10 md:mb-12">
        <h2 className="mb-2.5 flex flex-wrap gap-x-2 text-[15px] font-black uppercase tracking-[0.28em] text-zinc-700 md:text-[16px]">Work</h2>
        <p className="mb-4 max-w-3xl text-sm text-zinc-500 md:text-[15px]">Built, tested, shipped: products that balance design craft with utility.</p>
      </div>

      <div className="mt-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
            className="group border-b border-zinc-200/80 py-8 last:border-b-0 md:py-12"
          >
            <div className="grid items-center gap-7 md:grid-cols-12 md:gap-10">
              <div className="md:col-span-7">
                {project.media[0].type === 'desktop' ? (
                  project.autoSlide && project.media.length > 1 ? (
                    <div>
                      <div className="cinematic-media relative aspect-[16/10] w-full overflow-hidden rounded-3xl transition duration-300 group-hover:shadow-[0_40px_80px_-50px_rgba(15,23,42,0.5)]">
                        {project.media.map((shot, shotIndex) => (
                          <Image
                            key={shot.src}
                            src={shot.src}
                            alt={shot.alt}
                            fill
                            className={`object-cover transition-opacity duration-500 ${((slides[project.title] ?? 0) === shotIndex) ? 'opacity-100' : 'opacity-0'}`}
                            sizes="(max-width: 768px) 92vw, (max-width: 1024px) 58vw, 42vw"
                          />
                        ))}
                      </div>
                      <div className="mt-3 flex items-center justify-center gap-2">
                        {project.media.map((shot, dotIndex) => (
                          <button
                            key={`${project.title}-${shot.src}`}
                            type="button"
                            aria-label={`Go to slide ${dotIndex + 1}`}
                            onClick={() => setSlides((prev) => ({ ...prev, [project.title]: dotIndex }))}
                            className={`h-2.5 w-2.5 rounded-full transition ${((slides[project.title] ?? 0) === dotIndex) ? 'bg-zinc-900' : 'bg-zinc-300 hover:bg-zinc-500'}`}
                          />
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="cinematic-media relative aspect-[16/10] w-full overflow-hidden rounded-3xl transition duration-300 group-hover:shadow-[0_40px_80px_-50px_rgba(15,23,42,0.5)]">
                      <Image src={project.media[0].src} alt={project.media[0].alt} fill className="object-cover" sizes="(max-width: 768px) 92vw, (max-width: 1024px) 58vw, 42vw" />
                    </div>
                  )
                ) : (
                  <div className="grid grid-cols-3 gap-3">
                    {project.media.map((shot) => (
                      (() => {
                        const isHoldboardIOS = shot.src.includes('/apps/holdboard-ios/');
                        return (
                          <div key={shot.src} className="relative aspect-[9/18] overflow-hidden rounded-[28px]">
                            <Image
                              src={shot.src}
                              alt={shot.alt}
                              fill
                              className={`rounded-[28px] ${isHoldboardIOS ? 'object-contain' : 'object-cover'}`}
                              sizes="(max-width: 768px) 28vw, (max-width: 1200px) 18vw, 14vw"
                            />
                          </div>
                        );
                      })()
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-4 text-center md:col-span-5 md:space-y-5 md:text-left">
                <div className="flex items-center justify-center gap-3 md:justify-start">
                  {project.kind === 'mobile' ? (
                    <div className="relative h-10 w-10 overflow-hidden rounded-xl">
                      <Image src={project.icon} alt={`${project.title} icon`} fill className="object-cover" />
                    </div>
                  ) : null}
                  <h3 className="text-3xl font-semibold leading-tight text-zinc-900 md:text-[2.1rem] [font-family:var(--font-sf-pro-display)]">{project.title}</h3>
                </div>
                <p className="text-sm font-medium tracking-wide text-zinc-500">{project.date}</p>
                <p className="mx-auto max-w-[52ch] text-sm leading-relaxed text-zinc-600 md:mx-0 md:text-[15px]">{project.description}</p>
                <div className="flex flex-wrap items-center justify-center gap-4 pt-2 md:justify-start">
                  <a
                    href={project.productLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-900 underline decoration-1 underline-offset-4 transition-colors hover:text-zinc-600"
                  >
                    View Product <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
