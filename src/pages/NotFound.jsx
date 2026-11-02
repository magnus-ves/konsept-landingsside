import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const TICKS = Array.from({ length: 72 }, (_, i) => i * 5);
const POINTS = [
  { l: 'N', a: 0 },
  { l: 'Ø', a: 90 },
  { l: 'S', a: 180 },
  { l: 'V', a: 270 },
];

// 404: the digits drift like they're at sea and the compass needle points
// away from the cursor (the wrong way). Hovering the link brings everything
// back on course: the needle swings to the link and the digits straighten.
export default function NotFound() {
  const rootRef = useRef(null);
  const compassRef = useRef(null);
  const needleRef = useRef(null);
  const linkRef = useRef(null);
  const digitsRef = useRef([]);
  const [steady, setSteady] = useState(false);
  const steadyRef = useRef(false);
  steadyRef.current = steady;

  useEffect(() => {
    const previous = document.title;
    document.title = 'Fant ikke siden — Konsept';
    return () => {
      document.title = previous;
    };
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    let raf = 0;
    let pointer = null;
    let angle = 140;
    let vel = 0;
    let drift = 1;
    const start = performance.now();

    const centre = (el) => {
      const r = el.getBoundingClientRect();
      return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
    };
    const bearing = (from, to) => (Math.atan2(to.x - from.x, -(to.y - from.y)) * 180) / Math.PI;

    const tick = (now) => {
      const t = (now - start) / 1000;
      const c = centre(compassRef.current);
      let target;
      if (steadyRef.current) {
        target = bearing(c, centre(linkRef.current));
      } else if (pointer) {
        // the wrong way: straight away from the cursor, with a nervous shiver
        target = bearing(c, pointer) + 180 + Math.sin(t * 7) * 4;
      } else {
        target = 140 + Math.sin(t * 0.6) * 70 + Math.sin(t * 1.7) * 20;
      }
      // shortest way round
      let diff = ((target - angle + 540) % 360) - 180;
      vel = (vel + diff * 0.045) * 0.86;
      angle += vel;
      needleRef.current.style.transform = `rotate(${angle.toFixed(2)}deg)`;

      drift += ((steadyRef.current ? 0 : 1) - drift) * 0.06;
      digitsRef.current.forEach((el, i) => {
        if (!el) return;
        const ph = i * 1.9;
        const rot = Math.sin(t * 0.9 + ph) * 9 * drift;
        const y = Math.sin(t * 1.2 + ph) * 14 * drift;
        const x = Math.cos(t * 0.7 + ph) * 6 * drift;
        el.style.transform = `translate(${x.toFixed(2)}px, ${y.toFixed(2)}px) rotate(${rot.toFixed(2)}deg)`;
      });
      raf = requestAnimationFrame(tick);
    };

    const onMove = (e) => {
      if (e.pointerType === 'mouse') pointer = { x: e.clientX, y: e.clientY };
    };
    const onLeave = () => {
      pointer = null;
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', onLeave);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  const on = () => setSteady(true);
  const off = () => setSteady(false);

  return (
    <section ref={rootRef} className={`nf${steady ? ' is-steady' : ''}`}>
      <div className="nf-inner">
      <div className="nf-text">
        <div className="nf-code" aria-label="404">
          {['4', '0', '4'].map((d, i) => (
            <span key={i} ref={(el) => (digitsRef.current[i] = el)} aria-hidden="true">
              {d}
            </span>
          ))}
        </div>
        <h1 className="section-title nf-title">Konseptet gikk i feil retning.</h1>
        <Link
          ref={linkRef}
          to="/"
          className="nf-link"
          onPointerEnter={on}
          onPointerLeave={off}
          onFocus={on}
          onBlur={off}
        >
          Trykk her for å få konseptet på rett kjøl igjen <span aria-hidden="true">→</span>
        </Link>
        <p className="nf-hint" aria-live="polite">{steady ? 'Kursen er lagt.' : 'Kompasset er litt forvirret.'}</p>
      </div>

      <div className="nf-compass" ref={compassRef} aria-hidden="true">
        <svg viewBox="-200 -200 400 400">
          <circle r="188" className="nf-ring" />
          <circle r="150" className="nf-ring nf-ring--inner" />
          {TICKS.map((a) => (
            <line
              key={a}
              x1="0"
              y1={a % 45 === 0 ? -188 : -188}
              x2="0"
              y2={a % 45 === 0 ? -164 : a % 15 === 0 ? -174 : -180}
              transform={`rotate(${a})`}
              className={a % 45 === 0 ? 'nf-tick nf-tick--major' : 'nf-tick'}
            />
          ))}
          {POINTS.map((p) => (
            <text key={p.l} transform={`rotate(${p.a}) translate(0 -124) rotate(${-p.a})`} className="nf-point">
              {p.l}
            </text>
          ))}
          <g ref={needleRef} className="nf-needle">
            <path d="M0 -140 L16 0 L0 12 L-16 0 Z" className="nf-needle-n" />
            <path d="M0 140 L16 0 L0 -12 L-16 0 Z" className="nf-needle-s" />
          </g>
          <circle r="9" className="nf-hub" />
        </svg>
      </div>
      </div>

      <svg className="nf-waves" viewBox="0 0 2400 120" preserveAspectRatio="none" aria-hidden="true">
        <path className="nf-wave nf-wave--1" d="M0 60 Q150 20 300 60 T600 60 T900 60 T1200 60 T1500 60 T1800 60 T2100 60 T2400 60 V120 H0 Z" />
        <path className="nf-wave nf-wave--2" d="M0 75 Q150 45 300 75 T600 75 T900 75 T1200 75 T1500 75 T1800 75 T2100 75 T2400 75 V120 H0 Z" />
      </svg>
    </section>
  );
}
