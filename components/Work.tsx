'use client';

import { ArrowUpRight, Globe, Smartphone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { triggerSubtleHaptic } from './subtleHaptics';

type Project = {
  title: string;
  category: string;
  description: string;
  screenshots: string[];
  link: string;
  linkLabel: string;
  type: 'mobile' | 'web';
  visual?: 'phones' | 'poster';
  tech: string[];
  role: string;
  year: string;
  blogLink: string;
};

function ProjectMedia({ project }: { project: Project }) {
  if (project.type === 'mobile' && project.visual === 'phones') {
    const previews = project.screenshots.slice(0, 3);
    return (
      <div className="grid grid-cols-3 gap-3">
        {previews.map((src, idx) => (
          <div key={src} className="relative aspect-[9/18] rounded-[18px] overflow-hidden border border-zinc-200 bg-zinc-50 shadow-sm">
            <Image src={src} alt={`${project.title} screenshot ${idx + 1}`} fill className="object-cover" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-50 shadow-sm">
      <Image
        src={project.screenshots[0]}
        alt={`${project.title} preview`}
        fill
        className={project.visual === 'poster' ? 'object-cover' : 'object-cover'}
      />
    </div>
  );
}

function WorkCard({ project, index }: { project: Project; index: number }) {
  const isExternal = project.link.startsWith('http');
  const reduceMotion = useReducedMotion();
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const glowX = useMotionValue(160);
  const glowY = useMotionValue(160);

  const rotateX = useTransform(cursorY, [-45, 45], [6, -6]);
  const rotateY = useTransform(cursorX, [-45, 45], [-6, 6]);
  const springRotateX = useSpring(rotateX, { stiffness: 220, damping: 24, mass: 0.6 });
  const springRotateY = useSpring(rotateY, { stiffness: 220, damping: 24, mass: 0.6 });
  const springGlowX = useSpring(glowX, { stiffness: 170, damping: 28 });
  const springGlowY = useSpring(glowY, { stiffness: 170, damping: 28 });

  return (
    <motion.article
      initial={{ opacity: 0, y: 32, scale: 0.985, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      whileHover={reduceMotion ? undefined : { y: -8, scale: 1.012 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      onViewportEnter={() => triggerSubtleHaptic()}
      onMouseMove={(event) => {
        if (reduceMotion) return;
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        cursorX.set(((x - centerX) / centerX) * 45);
        cursorY.set(((y - centerY) / centerY) * 45);
        glowX.set(x);
        glowY.set(y);
      }}
      onMouseLeave={() => {
        cursorX.set(0);
        cursorY.set(0);
      }}
      style={reduceMotion ? undefined : { rotateX: springRotateX, rotateY: springRotateY, transformPerspective: 1200 }}
      className="group relative overflow-hidden glass-surface rounded-[28px] p-5 md:p-6"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-20 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-90"
        style={{
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.85), rgba(255,255,255,0) 58%)',
          left: springGlowX,
          top: springGlowY,
          width: 280,
          height: 280,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        <motion.div
          className="md:col-span-5 space-y-4"
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.45, delay: 0.08 }}
        >
          <div className="flex flex-wrap items-center gap-2.5 text-[10px] font-black uppercase tracking-[0.18em] text-zinc-500">
            <span className="inline-flex items-center gap-1.5">
              {project.type === 'mobile' ? <Smartphone size={13} /> : <Globe size={13} />}
              {project.category}
            </span>
            <span className="w-1 h-1 rounded-full bg-zinc-300" />
            <span>{project.year}</span>
            <span className="w-1 h-1 rounded-full bg-zinc-300" />
            <span>{project.role}</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900">{project.title}</h3>
            {project.title === 'Holdboard' ? (
              <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.12em] bg-zinc-900 text-white">
                Best App
              </span>
            ) : null}
          </div>

          <p className="text-zinc-600 text-sm md:text-base leading-relaxed">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 4).map((item) => (
              <span key={item} className="text-[11px] px-2.5 py-1 rounded-full border border-zinc-200 bg-white text-zinc-700">
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            {isExternal ? (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 text-white text-xs font-bold hover:bg-zinc-700 transition-colors"
              >
                {project.linkLabel}
                <ArrowUpRight size={14} />
              </a>
            ) : (
              <Link
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 text-white text-xs font-bold hover:bg-zinc-700 transition-colors"
              >
                {project.linkLabel}
                <ArrowUpRight size={14} />
              </Link>
            )}

            <Link
              href={project.blogLink}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-zinc-200 text-zinc-700 text-xs font-bold hover:bg-zinc-100 transition-colors"
            >
              Read Blog
              <ArrowUpRight size={13} />
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="md:col-span-7"
          initial={{ opacity: 0, x: 18, scale: 0.98 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.5, delay: 0.12 }}
        >
          <ProjectMedia project={project} />
        </motion.div>
      </div>
    </motion.article>
  );
}

export default function Work() {
  const projects: Project[] = [
    {
      title: 'Holdboard',
      category: 'iOS Clipboard Utility',
      description:
        'A secure clipboard manager for iPhone that organizes copied content instantly and protects sensitive clips with Face ID.',
      screenshots: ['/holdboard/holdboard-cover.jpg'],
      link: 'https://apps.apple.com/us/app/holdboard/id6761117827',
      linkLabel: 'View Product',
      type: 'mobile',
      visual: 'poster',
      tech: ['SwiftUI', 'Core Data', 'LocalAuthentication', 'UIPasteboard'],
      blogLink: '/blog/holdboard',
      role: 'Lead Product',
      year: '2026',
    },
    {
      title: 'FactRead',
      category: 'iOS Application',
      description:
        'Swipe-based fact reading with multilingual narration, adaptive typography, and a Liquid Glass-inspired interface for focused learning.',
      screenshots: [
        '/factread/factread-1.png',
        '/factread/factread-2.png',
        '/factread/factread-3.png',
        '/factread/factread-4.png',
      ],
      link: 'https://apps.apple.com/us/app/factread-swipe-to-read/id6762402891',
      linkLabel: 'View Product',
      type: 'mobile',
      visual: 'phones',
      tech: ['SwiftUI', 'AVFoundation', 'Localization', 'Liquid Glass'],
      blogLink: '/blog/factread',
      role: 'Product + Design',
      year: '2026',
    },
    {
      title: 'MoneyFormula',
      category: 'iOS Finance Utility',
      description:
        'A practical money calculator app with investment, taxation, and planning formulas, plus search and history for fast reuse.',
      screenshots: [
        '/moneyformula/moneyformula-1.png',
        '/moneyformula/moneyformula-2.png',
        '/moneyformula/moneyformula-3.png',
        '/moneyformula/moneyformula-4.png',
      ],
      link: 'https://apps.apple.com/us/app/moneyformula-finance-calc/id6762509637',
      linkLabel: 'View Product',
      type: 'mobile',
      visual: 'phones',
      tech: ['SwiftUI', 'Core Data', 'Formula Engine', 'Search'],
      blogLink: '/blog/moneyformula',
      role: 'iOS Engineering',
      year: '2026',
    },
    {
      title: 'Pureclick Walls',
      category: 'Android Application',
      description: "A high-fidelity wallpaper platform with curated collections and native 'Live Preview' functionality.",
      screenshots: ['/pureclick/pureclick-1.png', '/pureclick/pureclick-2.png', '/pureclick/pureclick-3.png', '/pureclick/pureclick-4.png'],
      link: 'https://play.google.com/store/apps/details?id=com.pureclickwalls.app&hl=en',
      linkLabel: 'View Product',
      type: 'mobile',
      visual: 'phones',
      tech: ['React Native', 'Kotlin', 'Firebase'],
      blogLink: '/blog/pureclick',
      role: 'Mobile Engineering',
      year: '2026',
    },
    {
      title: 'CodeClarity',
      category: 'Web Application',
      description:
        'An AI-powered developer tool that converts complex snippets into clear, structured reasoning and actionable suggestions.',
      screenshots: ['/codeclarity/codeclarity-cover.png'],
      link: 'https://codeclarity-ai.vercel.app/',
      linkLabel: 'View Product',
      type: 'web',
      tech: ['React', 'Node.js', 'TypeScript', 'Tailwind'],
      blogLink: '/blog/codeclarity',
      role: 'Frontend + AI',
      year: '2025',
    },
    {
      title: 'Quick CV',
      category: 'Web Application',
      description:
        'A professional resume builder with real-time preview and ATS-optimized templates for modern job seekers.',
      screenshots: ['/quickcv/quickcv-cover.png'],
      link: 'https://quickcv1.netlify.app/',
      linkLabel: 'View Product',
      type: 'web',
      tech: ['React', 'JavaScript'],
      blogLink: '/blog/quickcv',
      role: 'Product + Frontend',
      year: '2025',
    },
  ];

  return (
    <section id="work" className="py-24 md:py-28 px-6 max-w-7xl mx-auto">
      <SectionHeading title="Work" subtitle="Selected products with focused visual storytelling and clean interaction design." />

      <div className="space-y-5 md:space-y-6">
        {projects.map((project, index) => (
          <WorkCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
