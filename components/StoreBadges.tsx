type BadgeProps = {
  href: string;
  className?: string;
};

type AppStoreBadgeProps = BadgeProps & {
  variant?: 'black' | 'outlined';
  height?: number;
};

const APP_STORE_RATIO = 3.375;
const GOOGLE_PLAY_RATIO = 3.35;

export function detectStorePlatform(link: string): 'app-store' | 'google-play' | null {
  if (link.includes('apps.apple.com')) return 'app-store';
  if (link.includes('play.google.com/store')) return 'google-play';
  return null;
}

function getBadgeDimensions(height: number) {
  const clampedHeight = Math.max(40, height);
  return {
    height: clampedHeight,
    width: Number((clampedHeight * APP_STORE_RATIO).toFixed(3)),
  };
}

export function AppStoreBadge({ href, className = '', variant = 'black', height = 44 }: AppStoreBadgeProps) {
  const dimensions = getBadgeDimensions(height);

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Download on the App Store"
      className={`app-store-badge app-store-badge--${variant} ${className}`}
      style={{
        width: `${dimensions.width}px`,
        height: `${dimensions.height}px`,
      }}
    >
      <span className="app-store-badge__logo" aria-hidden>
        <svg viewBox="0 0 24 24" focusable="false" aria-hidden className="app-store-badge__logo-svg" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.665 16.915c-.29.667-.425.964-.799 1.57-.522.847-1.258 1.903-2.171 1.911-.812.008-1.022-.53-2.124-.524-1.102.006-1.334.533-2.146.525-.913-.009-1.61-.96-2.133-1.807-1.463-2.372-1.617-5.151-.713-6.539.643-.986 1.658-1.563 2.611-1.563.971 0 1.583.533 2.387.533.78 0 1.255-.534 2.379-.534.849 0 1.75.462 2.393 1.261-2.099 1.15-1.758 4.16.316 5.167ZM15.948 7.674c.406-.522.715-1.26.603-1.985-.663.046-1.438.468-1.89 1.017-.41.5-.75 1.24-.617 1.934.724.022 1.469-.4 1.904-.966Z" />
        </svg>
      </span>
      <span className="app-store-badge__text">
        <span className="app-store-badge__eyebrow">Download on the</span>
        <span className="app-store-badge__title">App Store</span>
      </span>
    </a>
  );
}

type GooglePlayBadgeProps = BadgeProps & {
  height?: number;
};

export function GooglePlayBadge({ href, className = '', height = 44 }: GooglePlayBadgeProps) {
  const clampedHeight = Math.max(40, height);
  const width = Number((clampedHeight * GOOGLE_PLAY_RATIO).toFixed(3));

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Get it on Google Play"
      className={`google-play-badge ${className}`}
      style={{
        width: `${width}px`,
        height: `${clampedHeight}px`,
      }}
    >
      <span className="google-play-badge__icon" aria-hidden>
        <svg viewBox="0 0 24 24" className="google-play-badge__icon-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.2 2.52L13.56 12L3.2 21.48V2.52Z" fill="#00D7FF" />
          <path d="M13.56 12L17.04 8.98L21.28 11.34C22.24 11.88 22.24 12.12 21.28 12.66L17.04 15.02L13.56 12Z" fill="#FFD74A" />
          <path d="M3.2 2.52L17.04 8.98L13.56 12L3.2 2.52Z" fill="#00E676" />
          <path d="M3.2 21.48L13.56 12L17.04 15.02L3.2 21.48Z" fill="#FF5252" />
        </svg>
      </span>
      <span className="google-play-badge__text">
        <span className="google-play-badge__eyebrow">GET IT ON</span>
        <span className="google-play-badge__title">Google Play</span>
      </span>
    </a>
  );
}
