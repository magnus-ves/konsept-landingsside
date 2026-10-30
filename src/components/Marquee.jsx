import { useEffect, useRef } from 'react';
import { marquee } from '../content';

const GAP = 56;

export default function Marquee() {
  const trackRef = useRef(null);

  // The band speeds up with scroll velocity, then eases back to cruising speed.
  useEffect(() => {
    const anim = trackRef.current?.getAnimations()[0];
    if (!anim) return undefined;
    let last = window.scrollY;
    let lastT = performance.now();
    let boost = 0;
    let raf = 0;
    const tick = () => {
      const now = performance.now();
      const dy = Math.abs(window.scrollY - last);
      const v = dy / Math.max(now - lastT, 1);
      last = window.scrollY;
      lastT = now;
      boost = Math.max(boost * 0.94, Math.min(v * 1.6, 7));
      anim.playbackRate = 1 + boost;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Rendered as two identical copies back-to-back, animated by exactly
  // -50% of the row's own width so the loop is seamless. That only lands
  // precisely on the repeat boundary if each copy's width is self-contained
  // (spacing via marginRight on every item, not via flex `gap` split across
  // both the outer row and the inner item) — otherwise the halfway point
  // drifts by half a gap and the loop visibly stutters.
  const copy = (key) =>
    marquee.map((m, i) => (
      <span
        key={`${key}-${i}`}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: GAP,
          marginRight: GAP,
          fontFamily: "'Josefin Sans', sans-serif",
          fontSize: 15,
          letterSpacing: '.14em',
          color: 'var(--blue-light)',
          whiteSpace: 'nowrap',
        }}
      >
        {m}
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(127,165,192,.5)', display: 'block' }} />
      </span>
    ));

  return (
    <div
      style={{
        borderTop: '1px solid rgba(232,238,243,.12)',
        borderBottom: '1px solid rgba(232,238,243,.12)',
        overflow: 'hidden',
        padding: '22px 0',
        background: 'var(--navy)',
      }}
    >
      <div ref={trackRef} className="kf-marq" style={{ display: 'flex', width: 'max-content', alignItems: 'center' }}>
        {copy('a')}
        {copy('b')}
      </div>
    </div>
  );
}
