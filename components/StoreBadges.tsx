import { Apple, ArrowUpRight } from 'lucide-react';

type BadgeProps = {
  href: string;
  className?: string;
};

export function AppStoreBadge({ href, className = '' }: BadgeProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-3 rounded-2xl bg-black px-4 py-2.5 text-white transition-transform hover:-translate-y-0.5 ${className}`}
    >
      <Apple size={20} aria-hidden />
      <span className="leading-tight">
        <span className="block text-[10px] font-medium text-white/75">Available on</span>
        <span className="block text-base font-semibold">App Store</span>
      </span>
      <ArrowUpRight size={14} className="text-white/80" />
    </a>
  );
}

export function GooglePlayBadge({ href, className = '' }: BadgeProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-3 rounded-2xl bg-black px-4 py-2.5 text-white transition-transform hover:-translate-y-0.5 ${className}`}
    >
      <span className="relative inline-flex h-5 w-5 items-center justify-center" aria-hidden>
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.5 2.5L13.5 12L2.5 21.5V2.5Z" fill="#00D9FF" />
          <path d="M13.5 12L17.2 8.8L21.4 11.2C22.2 11.7 22.2 12.3 21.4 12.8L17.2 15.2L13.5 12Z" fill="#FFD400" />
          <path d="M2.5 2.5L17.2 8.8L13.5 12L2.5 2.5Z" fill="#39E37A" />
          <path d="M2.5 21.5L13.5 12L17.2 15.2L2.5 21.5Z" fill="#FF7A45" />
        </svg>
      </span>
      <span className="leading-tight">
        <span className="block text-[10px] font-medium text-white/75">Get it on</span>
        <span className="block text-base font-semibold">Google Play</span>
      </span>
      <ArrowUpRight size={14} className="text-white/80" />
    </a>
  );
}
