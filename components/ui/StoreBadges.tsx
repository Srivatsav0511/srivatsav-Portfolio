import type { AnchorHTMLAttributes } from 'react';

type BadgeProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> & {
  href: string;
};

export function AppStoreBadge({ href, className = '', ...props }: BadgeProps) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={`app-store-badge app-store-badge--black ${className}`.trim()} {...props}>
      <span className="app-store-badge__logo" aria-hidden>
        <svg viewBox="0 0 24 24" className="app-store-badge__logo-svg" role="presentation" focusable="false">
          <path d="M17.6 3.2c-.9.1-2 .6-2.6 1.4-.6.7-1.1 1.7-.9 2.8 1 .1 2-.4 2.7-1.2.6-.7 1.1-1.7.8-3zM20.9 17.6c-.5 1.1-.8 1.6-1.4 2.5-.8 1.2-1.9 2.6-3.2 2.6-1.1 0-1.4-.7-2.9-.7s-1.8.7-2.9.7c-1.3 0-2.3-1.3-3.1-2.5-2.2-3.3-2.4-7.2-1.1-9.2.9-1.4 2.3-2.2 3.6-2.2 1.4 0 2.3.8 3.5.8 1.2 0 2-.8 3.4-.8 1.2 0 2.5.7 3.4 1.9-3 1.7-2.5 6.1.7 6.9z" />
        </svg>
      </span>
      <span className="app-store-badge__text">
        <span className="app-store-badge__eyebrow">Download on the</span>
        <span className="app-store-badge__title">App Store</span>
      </span>
    </a>
  );
}

export function GooglePlayBadge({ href, className = '', ...props }: BadgeProps) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={`google-play-badge ${className}`.trim()} {...props}>
      <span className="google-play-badge__icon" aria-hidden>
        <svg viewBox="0 0 24 24" className="google-play-badge__icon-svg" role="presentation" focusable="false">
          <path fill="#00C853" d="M3 2.5v19l10.8-9.5z" />
          <path fill="#00B0FF" d="M13.8 12L3 2.5l14.9 8.6z" />
          <path fill="#FFAB00" d="M3 21.5l10.8-9.5 4.1 2.4z" />
          <path fill="#FF5252" d="M17.9 11.1 21 9.4c.9-.5.9-1.8 0-2.3l-3.1-1.8-4.1 3.2z" />
        </svg>
      </span>
      <span className="google-play-badge__text">
        <span className="google-play-badge__eyebrow">GET IT ON</span>
        <span className="google-play-badge__title">Google Play</span>
      </span>
    </a>
  );
}
