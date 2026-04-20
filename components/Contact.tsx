import { Mail, Github, Linkedin, Play, ArrowUpRight, MessageSquare, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
  const socials = [
    { icon: <Github size={18} />, name: 'Github', href: 'https://github.com/srivatsav0511', handle: '@srivatsav0511' },
    { icon: <Linkedin size={18} />, name: 'LinkedIn', href: 'https://www.linkedin.com/in/srivatsavk', handle: 'srivatsavk' },
    { icon: <Play size={18} fill="currentColor" />, name: 'Google Play', href: 'https://play.google.com/store/apps/developer?id=Srivatsav+K', handle: 'Srivatsav K' },
  ];

  return (
    <section id="contact" className="py-28 px-6 border-t border-zinc-200/80">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <h2 className="text-[18px] font-black uppercase tracking-[0.38em] text-zinc-700 mb-4">Contact</h2>
          <div className="h-[1px] w-full bg-zinc-200" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="rounded-[32px] border border-white bg-white/85 backdrop-blur-xl p-8 shadow-[0_24px_70px_-45px_rgba(0,0,0,0.45)]">
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-black leading-[0.95] text-balance">Let&apos;s build your next product.</h3>
            <p className="mt-4 text-zinc-600 text-lg leading-relaxed">
              Open to product engineering collaborations across iOS, web, and AI-powered experiences.
            </p>

            <div className="mt-7 space-y-4">
              <a
                href="mailto:karamalasrivatsav@gmail.com"
                className="group flex items-center justify-between p-5 rounded-2xl border border-zinc-200 bg-zinc-50 hover:bg-black hover:border-black transition-all"
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
                <div className="p-4 rounded-2xl border border-zinc-200 bg-zinc-50">
                  <MapPin size={18} className="text-zinc-400 mb-2" />
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Location</p>
                  <p className="font-semibold text-zinc-800 text-sm mt-1">Hyderabad, India</p>
                </div>
                <div className="p-4 rounded-2xl border border-zinc-200 bg-zinc-50">
                  <MessageSquare size={18} className="text-zinc-400 mb-2" />
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Status</p>
                  <p className="font-semibold text-emerald-600 text-sm mt-1">Available</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-white bg-white/85 backdrop-blur-xl p-8 shadow-[0_24px_70px_-45px_rgba(0,0,0,0.45)]">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-5">Professional Links</p>
            <div className="space-y-2">
              {socials.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  className="group flex items-center justify-between p-4 rounded-xl border border-zinc-100 hover:border-zinc-200 hover:bg-zinc-50 transition-all"
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

        <div className="mt-14 pt-8 border-t border-zinc-200/80 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.35em]">© 2026 Srivatsav Karamala</p>
          <p className="text-zinc-400 text-sm">Designed and engineered for premium product storytelling.</p>
        </div>
      </div>
    </section>
  );
}
