let lastPulseAt = 0;
let lastImpactPulseAt = 0;

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

export function triggerImpactHaptic() {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const now = Date.now();
  if (now - lastImpactPulseAt < 55) return;
  lastImpactPulseAt = now;

  if ('vibrate' in navigator) {
    const accepted = navigator.vibrate([46, 20, 62]);
    if (!accepted) {
      navigator.vibrate(76);
    }
  }
}

export function triggerShockHaptic() {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  if ('vibrate' in navigator) {
    const accepted = navigator.vibrate([70, 28, 90]);
    if (!accepted) {
      navigator.vibrate(110);
    }
  }
}
