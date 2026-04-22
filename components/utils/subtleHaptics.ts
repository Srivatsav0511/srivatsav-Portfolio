let lastPulseAt = 0;

export function triggerSubtleHaptic() {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const now = Date.now();
  if (now - lastPulseAt < 260) return;
  lastPulseAt = now;

  const studioMode = document.documentElement.classList.contains('studio-mode-on');
  const vibration = studioMode ? 14 : 8;

  if ('vibrate' in navigator) {
    navigator.vibrate(vibration);
  }
}
