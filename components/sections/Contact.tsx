import { Mail, Github, Linkedin, Play, ArrowUpRight, MessageSquare, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
  const socials = [
    { icon: <Github size={18} />, name: 'Github', href: 'https://github.com/srivatsav0511', handle: '@srivatsav0511' },
    { icon: <Linkedin size={18} />, name: 'LinkedIn', href: 'https://www.linkedin.com/in/srivatsavk', handle: 'srivatsavk' },
    { icon: <Play size={18} fill="currentColor" />, name: 'Google Play', href: 'https://play.google.com/store/apps/developer?id=Srivatsav+K', handle: 'Srivatsav K' },
  ];

  return (
    <section id="contact" className="py-24 md:py-28 px-6 border-t border-zinc-200/80">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-[16px] font-black uppercase tracking-[0.32em] text-zinc-700 mb-3">Contact</h2>
          <div className="h-[1px] w-full bg-zinc-200" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-start">
          <div className="rounded-[30px] glass-surface p-6 md:p-7">
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-black leading-[0.98] text-balance">Let&apos;s build your next product.</h3>
            <p className="mt-3 text-zinc-600 text-base leading-relaxed">
              Open to product engineering collaborations across iOS, web, and AI-powered experiences.
            </p>

            <div className="mt-6 space-y-3">
              <a
                href="mailto:karamalasrivatsav@gmail.com"
                className="group flex items-center justify-between p-4 rounded-2xl border border-zinc-200 bg-zinc-50 hover:bg-black hover:border-black transition-all"
              >
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-zinc-700 group-hover:text-white" />
                  <div className="min-w-0">
                    <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-zinc-500">Email</p>
                    <p className="font-bold text-zinc-900 group-hover:text-white break-all text-sm md:text-base">karamalasrivatsav@gmail.com</p>
                  </div>
                </div>
                <ArrowUpRight size={18} className="text-zinc-400 group-hover:text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl border border-zinc-200 bg-zinc-50">
                  <MapPin size={18} className="text-zinc-400 mb-2" />
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Location</p>
                  <p className="font-semibold text-zinc-800 text-sm mt-1">Hyderabad, India</p>
                </div>
                <div className="p-3.5 rounded-2xl border border-zinc-200 bg-zinc-50">
                  <MessageSquare size={18} className="text-zinc-400 mb-2" />
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Status</p>
                  <p className="font-semibold text-emerald-600 text-sm mt-1">Available</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[30px] glass-surface p-6 md:p-7">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-5">Professional Links</p>
            <div className="space-y-2">
              {socials.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  className="group flex items-center justify-between p-3.5 rounded-xl border border-zinc-100 hover:border-zinc-200 hover:bg-zinc-50 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-zinc-400 group-hover:text-black transition-colors">{social.icon}</span>
                    <div>
                      <p className="text-xs font-black uppercase tracking-widest text-black">{social.name}</p>
                      <p className="text-[11px] text-zinc-400 font-medium">{social.handle}</p>
                    </div>
                  </div>
                  <ArrowUpRight size={14} className="text-zinc-300 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-7 border-t border-zinc-200/80 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] text-center md:text-left">
            © 2026 All rights reserved. Srivatsav Karamala
          </p>
          <p className="text-zinc-400 text-sm">Designed and engineered for premium product storytelling.</p>
        </div>
      </div>
    </section>
  );
}
