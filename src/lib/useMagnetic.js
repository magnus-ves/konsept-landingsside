import { useEffect } from 'react';

const SELECTOR = '.btn-primary, .btn-secondary, .btn-dark, .nav-cta';
const RADIUS = 120; // px around the button where the pull starts
const STIFFNESS = 0.14;
const DAMPING = 0.74;

// Liquid magnetic buttons. Each button is pulled toward the cursor once it
// comes within RADIUS, follows on a spring (so it overshoots and settles), and
// stretches along its direction of travel. The hover fill grows from the
// cursor position (--fx/--fy), and --pull drives the glow.
export default function useMagnetic() {
  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || calm) return undefined;

    const state = new Map();
    let px = -9999;
    let py = -9999;
    let raf = 0;

    const get = (el) => {
      let s = state.get(el);
      if (!s) {
        s = { x: 0, y: 0, vx: 0, vy: 0 };
        state.set(el, s);
      }
      return s;
    };

    const tick = () => {
      raf = 0;
      let moving = false;
      // Measure every button first, so only the closest one is pulled and
      // neighbours (like the two hero buttons) never collide.
      const items = [...document.querySelectorAll(SELECTOR)].map((el) => {
        const s = get(el);
        const r = el.getBoundingClientRect();
        // Rest position: undo the offset we applied ourselves.
        const cx = r.left + r.width / 2 - s.x;
        const cy = r.top + r.height / 2 - s.y;
        const dx = px - cx;
        const dy = py - cy;
        const ex = Math.max(Math.abs(dx) - r.width / 2, 0);
        const ey = Math.max(Math.abs(dy) - r.height / 2, 0);
        return { el, s, r, dx, dy, edge: Math.hypot(ex, ey) };
      });
      const nearest = items.reduce((a, b) => (!a || b.edge < a.edge ? b : a), null);
      items.forEach(({ el, s, r, dx, dy, edge }) => {
        let pull = el === nearest?.el && edge < RADIUS ? 1 - edge / RADIUS : 0;
        pull = pull * pull * (3 - 2 * pull); // smoothstep

        const maxX = Math.min(22, r.width * 0.16);
        const tx = Math.max(-maxX, Math.min(maxX, dx * 0.4 * pull));
        const ty = Math.max(-14, Math.min(14, dy * 0.45 * pull));

        s.vx = (s.vx + (tx - s.x) * STIFFNESS) * DAMPING;
        s.vy = (s.vy + (ty - s.y) * STIFFNESS) * DAMPING;
        s.x += s.vx;
        s.y += s.vy;

        const speed = Math.hypot(s.vx, s.vy);
        const stretch = Math.min(speed * 0.018, 0.16);
        const angle = Math.atan2(s.vy, s.vx);
        const settled = Math.abs(tx - s.x) < 0.05 && Math.abs(ty - s.y) < 0.05 && speed < 0.05;
        if (!settled) moving = true;

        el.style.translate = `${s.x.toFixed(2)}px ${s.y.toFixed(2)}px`;
        el.style.transform =
          stretch > 0.002
            ? `rotate(${angle}rad) scale(${1 + stretch}, ${1 - stretch * 0.6}) rotate(${-angle}rad)`
            : '';
        el.style.setProperty('--pull', pull.toFixed(3));
        el.style.setProperty('--fx', `${(((px - (r.left)) / r.width) * 100).toFixed(1)}%`);
        el.style.setProperty('--fy', `${(((py - (r.top)) / r.height) * 100).toFixed(1)}%`);
      });
      if (moving) raf = requestAnimationFrame(tick);
    };

    const kick = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const onMove = (e) => {
      px = e.clientX;
      py = e.clientY;
      kick();
    };
    const onLeave = () => {
      px = -9999;
      py = -9999;
      kick();
    };

    document.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', onLeave);
    window.addEventListener('scroll', kick, { passive: true });
    return () => {
      document.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
      window.removeEventListener('scroll', kick);
      cancelAnimationFrame(raf);
    };
  }, []);
}
