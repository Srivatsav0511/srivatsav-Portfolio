'use client';

import { ArrowUpRight, Smartphone, Globe, ShieldCheck, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import SectionHeading from './SectionHeading';

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
  impact: string;
  role: string;
  year: string;
  privacyLink?: string;
};

function InteractiveCard({ project }: { project: Project }) {
  const isExternal = project.link.startsWith('http');
  const mobileGridClass = project.screenshots.length > 4 ? 'grid-cols-2 md:grid-cols-5' : 'grid-cols-2 md:grid-cols-4';

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const sx = useSpring(rx, { stiffness: 140, damping: 18 });
  const sy = useSpring(ry, { stiffness: 140, damping: 18 });
  const rotateX = useTransform(sy, [-12, 12], [6, -6]);
  const rotateY = useTransform(sx, [-12, 12], [-6, 6]);

  return (
    <motion.div
      className={`group relative overflow-hidden rounded-[36px] p-7 md:p-10 min-h-[420px] flex flex-col justify-between shadow-[0_24px_70px_-38px_rgba(0,0,0,0.45)] ${
        project.type === 'mobile'
          ? 'bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 text-white border border-white/10'
          : 'bg-white/80 backdrop-blur-xl border border-white text-black'
      }`}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      whileInView={{ opacity: [0, 1], y: [24, 0] }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45 }}
      onMouseMove={(e) => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / 30;
        const y = (e.clientY - rect.top - rect.height / 2) / 30;
        rx.set(x);
        ry.set(y);
      }}
      onMouseLeave={() => {
        rx.set(0);
        ry.set(0);
      }}
    >
      <div className="pointer-events-none absolute inset-y-0 -left-24 w-24 bg-white/20 blur-2xl opacity-0 group-hover:opacity-100 group-hover:left-[105%] transition-all duration-1000" />

      <div className="space-y-8 relative z-10" style={{ transform: 'translateZ(20px)' }}>
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest ${project.type === 'mobile' ? 'opacity-60' : 'text-zinc-400'}`}>
            {project.type === 'mobile' ? <Smartphone size={14} /> : <Globe size={14} />}
            {project.category}
          </div>

          <div className="flex items-center gap-3">
            {project.privacyLink && (
              <Link href={project.privacyLink} data-cursor="Open" data-magnetic className="flex items-center gap-2 px-4 py-2.5 rounded-full font-bold text-xs transition-all bg-white/10 border border-white/25 text-white hover:bg-white/20">
                Privacy
                <ShieldCheck size={13} />
              </Link>
            )}

            {isExternal ? (
              <a href={project.link} target="_blank" data-cursor="View" data-magnetic className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all ${project.type === 'mobile' ? 'bg-white text-black hover:bg-zinc-200' : 'bg-black text-white hover:bg-zinc-800'}`}>
                {project.linkLabel}
                <ArrowUpRight size={16} />
              </a>
            ) : (
              <Link href={project.link} data-cursor="Open" data-magnetic className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all ${project.type === 'mobile' ? 'bg-white text-black hover:bg-zinc-200' : 'bg-black text-white hover:bg-zinc-800'}`}>
                {project.linkLabel}
                <ArrowUpRight size={16} />
              </Link>
            )}
          </div>
        </div>

        <div className="max-w-3xl space-y-5">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px] uppercase tracking-[0.2em] font-black text-zinc-400 flex gap-3">
            <span>{project.year}</span>
            <span>•</span>
            <span>{project.role}</span>
          </div>

          <p className={`text-2xl md:text-[2rem] leading-[1.2] tracking-tight font-medium ${project.type === 'mobile' ? 'text-zinc-200' : 'text-zinc-700'}`}>
            {project.description}
          </p>

          <div className={`rounded-2xl px-5 py-4 border ${project.type === 'mobile' ? 'bg-white/5 border-white/10' : 'bg-zinc-50 border-zinc-200'}`}>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-2 flex items-center gap-2 opacity-75">
              <Sparkles size={12} />
              Product Impact
            </p>
            <p className={`text-sm ${project.type === 'mobile' ? 'text-zinc-200' : 'text-zinc-700'}`}>{project.impact}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <span key={item} className={`text-xs px-3 py-1.5 rounded-full border ${project.type === 'mobile' ? 'border-white/20 bg-white/5 text-zinc-200' : 'border-zinc-200 bg-white text-zinc-700'}`}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 relative z-10" style={{ transform: 'translateZ(32px)' }}>
        {project.type === 'mobile' && project.visual === 'phones' ? (
          <div className={`grid ${mobileGridClass} gap-4`}>
            {project.screenshots.map((src, idx) => (
              <div key={idx} className="relative aspect-[9/19] rounded-[18px] overflow-hidden border border-white/10 shadow-2xl transition-all duration-700 group-hover:even:-translate-y-5 group-hover:odd:translate-y-2">
                <Image src={src} alt={`${project.title} screenshot ${idx + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        ) : (
          <div className={`relative w-full aspect-[16/9] rounded-3xl overflow-hidden border shadow-2xl transition-transform duration-700 group-hover:scale-[1.015] ${project.type === 'mobile' ? 'border-white/15' : 'border-zinc-100'}`}>
            <Image src={project.screenshots[0]} alt={`${project.title} preview`} fill className="object-cover" />
          </div>
        )}
      </div>

      {project.type === 'mobile' && (
        <>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-zinc-400/10 blur-[120px] rounded-full pointer-events-none" />
        </>
      )}
    </motion.div>
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
      impact: 'Improves retrieval speed for repeated copy workflows while maintaining privacy controls.',
      privacyLink: '/privacy/holdboard',
      role: 'Lead Product + Engineering',
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
        '/factread/factread-5.png',
      ],
      link: 'https://apps.apple.com/us/search?term=FactRead',
      linkLabel: 'View Product',
      type: 'mobile',
      visual: 'phones',
      tech: ['SwiftUI', 'AVFoundation', 'Localization', 'Liquid Glass'],
      impact: 'Transforms passive scrolling into active daily learning with readable, audio-enabled fact cards.',
      privacyLink: '/privacy/factread',
      role: 'Product + Interaction Design',
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
        '/moneyformula/moneyformula-5.png',
      ],
      link: 'https://apps.apple.com/us/search?term=MoneyFormula',
      linkLabel: 'View Product',
      type: 'mobile',
      visual: 'phones',
      tech: ['SwiftUI', 'Core Data', 'Formula Engine', 'Search'],
      impact: 'Gives users clear financial outputs quickly and keeps recurring calculations easy to revisit.',
      privacyLink: '/privacy/moneyformula',
      role: 'Product + Motion UI',
      year: '2026',
    },
    {
      title: 'Pureclick Walls',
      category: 'Android Application',
      description:
        "A high-fidelity wallpaper platform with curated collections and native 'Live Preview' functionality.",
      screenshots: ['/pureclick/pureclick-1.png', '/pureclick/pureclick-2.png', '/pureclick/pureclick-3.png', '/pureclick/pureclick-4.png'],
      link: 'https://play.google.com/store/apps/details?id=com.pureclickwalls.app&hl=en',
      linkLabel: 'View Product',
      type: 'mobile',
      visual: 'phones',
      tech: ['React Native', 'Kotlin', 'Firebase'],
      impact: 'Delivers premium wallpapers without ad-heavy flow or visual quality loss.',
      privacyLink: '/privacy/pureclick-walls',
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
      impact: 'Shortens debugging and onboarding time by making code intent understandable in seconds.',
      role: 'Frontend + AI Workflow',
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
      impact: 'Helps users ship professional resumes quickly without design or formatting friction.',
      role: 'Product + Frontend',
      year: '2025',
    },
  ];

  return (
    <section id="work" className="py-28 px-6 max-w-7xl mx-auto">
      <SectionHeading title="Work" subtitle="Interactive products built across mobile and web." />

      <div className="space-y-16">
        {projects.map((project) => (
          <div key={project.title} className="space-y-6">
            <div className="flex items-center gap-3">
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-black">{project.title}</h3>
              {project.title === 'Holdboard' && (
                <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.12em] bg-black text-white">
                  Best App
                </span>
              )}
            </div>
            <InteractiveCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
