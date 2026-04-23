let lastPulseAt = 0;

export function triggerSubtleHaptic() {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const now = Date.now();
  if (now - lastPulseAt < 260) return;
  lastPulseAt = now;

  const studioMode = document.documentElement.classList.contains('studio-mode-on');
  const vibration = studioMode ? [26, 14, 22] : [18];

  if ('vibrate' in navigator) {
    const accepted = navigator.vibrate(vibration);
    if (!accepted) {
      // Some mobile browsers ignore short or patterned pulses in low-power/quiet states.
      navigator.vibrate(studioMode ? 30 : 20);
    }
  }
}
