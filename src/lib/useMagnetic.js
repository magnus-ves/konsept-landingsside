import { useEffect } from 'react';

const SELECTOR = '.btn-primary, .btn-secondary, .btn-dark, .nav-cta';

// Buttons lean toward the cursor. Uses the independent CSS `translate`
// property so it never fights the hover `transform` lift.
export default function useMagnetic() {
  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || calm) return undefined;
    let active = null;
    const reset = (el) => {
      el.style.setProperty('--mx', '0px');
      el.style.setProperty('--my', '0px');
    };
    const onMove = (e) => {
      const el = e.target.closest?.(SELECTOR) ?? null;
      if (active && active !== el) reset(active);
      active = el;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      el.style.setProperty('--mx', `${Math.max(-10, Math.min(10, dx * 0.22))}px`);
      el.style.setProperty('--my', `${Math.max(-8, Math.min(8, dy * 0.3))}px`);
    };
    document.addEventListener('pointermove', onMove, { passive: true });
    return () => document.removeEventListener('pointermove', onMove);
  }, []);
}
