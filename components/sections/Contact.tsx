import { ArrowUpRight, Github, Linkedin, Play } from 'lucide-react';
import Link from 'next/link';

const contactChannels = [
  {
    name: 'GitHub',
    handle: '@srivatsav0511',
    href: 'https://github.com/srivatsav0511',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    handle: 'srivatsavk',
    href: 'https://www.linkedin.com/in/srivatsavk',
    icon: Linkedin,
  },
  {
    name: 'Google Play',
    handle: 'Srivatsav K',
    href: 'https://play.google.com/store/apps/developer?id=Srivatsav+K',
    icon: Play,
  },
] as const;

export default function Contact() {
  const lastUpdated = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date());

  return (
    <section id="contact" className="px-6 py-24 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-9 md:mb-11">
          <h2 className="mb-2.5 flex flex-wrap gap-x-2 text-[15px] font-black uppercase tracking-[0.28em] text-zinc-700 md:text-[16px]">Contact</h2>
          <p className="mb-4 max-w-3xl text-sm text-zinc-500 md:text-[15px]">
            If you want to build a product that feels clear, fast, and premium in real usage, let&apos;s talk.
          </p>
          <div className="h-[1px] w-full bg-zinc-300/70" />
        </div>

        <div className="relative overflow-hidden rounded-[34px] border border-white/80 bg-white/76 p-6 shadow-[0_30px_90px_-58px_rgba(15,23,42,0.85)] backdrop-blur-xl md:p-8">
          <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-sky-200/45 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-10 h-56 w-56 rounded-full bg-zinc-200/55 blur-3xl" />

          <div className="relative grid grid-cols-1 gap-7 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-7">
              <p className="text-[10px] font-black uppercase tracking-[0.24em] text-zinc-500">Open For Product Work</p>
              <h3 className="mt-3 max-w-2xl text-3xl font-semibold leading-[0.98] tracking-tight text-zinc-900 md:text-5xl">
                Let&apos;s design and ship something people actually love to use.
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-600 md:text-base">
                I work across product direction, interaction design, and engineering to take ideas from rough concept to refined,
                production-ready experience. If you care about quality details and product clarity, we&apos;ll collaborate well.
              </p>

              <a
                href="mailto:karamalasrivatsav@gmail.com?subject=Product%20Collaboration%20Inquiry"
                data-cursor="Email"
                className="group mt-6 inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-zinc-700"
              >
                Email Me
                <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>

            <div className="md:col-span-5">
              <p className="mb-3 text-[10px] font-black uppercase tracking-[0.24em] text-zinc-500">Channels</p>
              <div className="space-y-2.5">
                {contactChannels.map((channel) => (
                  <Link
                    key={channel.name}
                    href={channel.href}
                    target="_blank"
                    data-cursor="Open"
                    className="group flex items-center justify-between rounded-2xl border border-zinc-200/80 bg-white/78 px-4 py-3 transition-all hover:border-zinc-900 hover:bg-zinc-900"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-700 transition-colors group-hover:border-zinc-700 group-hover:bg-zinc-800 group-hover:text-zinc-100">
                        <channel.icon size={16} />
                      </span>
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-zinc-900 transition-colors group-hover:text-zinc-100">{channel.name}</p>
                        <p className="text-[11px] font-medium text-zinc-500 transition-colors group-hover:text-zinc-300">{channel.handle}</p>
                      </div>
                    </div>
                    <ArrowUpRight size={14} className="text-zinc-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-100" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-zinc-200/70 pt-5 md:flex-row">
          <p className="text-center text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 md:text-left">© 2026 Srivatsav Karamala</p>
          <div className="flex flex-col items-center gap-1 text-sm text-zinc-500 md:items-end">
            <p>Made with caffeine, curiosity, and too many test builds.</p>
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400">Last Updated {lastUpdated}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
