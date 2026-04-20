let lastPulseAt = 0;
let audioCtx: AudioContext | null = null;

export function triggerSubtleHaptic() {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const now = Date.now();
  if (now - lastPulseAt < 260) return;
  lastPulseAt = now;

  if ('vibrate' in navigator) {
    navigator.vibrate(8);
    return;
  }

  // Desktop fallback: a near-silent tactile "tick" to mimic micro-feedback.
  try {
    const Ctx = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctx) return;

    audioCtx = audioCtx ?? new Ctx();
    if (audioCtx.state === 'suspended') {
      void audioCtx.resume();
    }

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    const nowTime = audioCtx.currentTime;

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(120, nowTime);
    osc.frequency.exponentialRampToValueAtTime(70, nowTime + 0.028);

    gain.gain.setValueAtTime(0.0001, nowTime);
    gain.gain.exponentialRampToValueAtTime(0.015, nowTime + 0.006);
    gain.gain.exponentialRampToValueAtTime(0.0001, nowTime + 0.04);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start(nowTime);
    osc.stop(nowTime + 0.042);
  } catch {
    // Ignore audio failures; this feedback layer is optional.
  }
}
