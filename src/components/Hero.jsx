import { useEffect, useRef } from 'react';
import { logoFull, heroOslo, konseptMark } from '../assets';

const WORDS = ['Ideer.', 'Retning.'];

export default function Hero({ heroShift }) {
  const sectionRef = useRef(null);
  const markRef = useRef(null);

  // Pointer-reactive depth: the mark drifts against the cursor and a soft
  // light follows it. Skipped for touch devices and reduced-motion users.
  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || calm) return undefined;
    const section = sectionRef.current;
    const mark = markRef.current;
    const target = { x: 0, y: 0 };
    const cur = { x: 0, y: 0 };
    let raf = 0;
    const onMove = (e) => {
      const r = section.getBoundingClientRect();
      target.x = (e.clientX - r.left) / r.width - 0.5;
      target.y = (e.clientY - r.top) / r.height - 0.5;
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const tick = () => {
      cur.x += (target.x - cur.x) * 0.08;
      cur.y += (target.y - cur.y) * 0.08;
      mark.style.transform = `translate3d(${cur.x * -48}px, ${cur.y * -32}px, 0)`;
      section.style.setProperty('--gx', `${(cur.x + 0.5) * 100}%`);
      section.style.setProperty('--gy', `${(cur.y + 0.5) * 100}%`);
      raf = Math.abs(target.x - cur.x) + Math.abs(target.y - cur.y) > 0.001 ? requestAnimationFrame(tick) : 0;
    };
    section.addEventListener('pointermove', onMove);
    return () => {
      section.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: '150px 0 40px',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: '-6% 0 0 0',
          background: `url(${heroOslo}) center 60% / cover no-repeat`,
          transform: `translateY(${heroShift}px)`,
          willChange: 'transform',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: '-6% 0 0 0',
          WebkitMaskImage: 'linear-gradient(to bottom, #000 0%, #000 16%, transparent 30%)',
          maskImage: 'linear-gradient(to bottom, #000 0%, #000 16%, transparent 30%)',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
        }}
      >
        <div ref={markRef} style={{ position: 'absolute', inset: 0, willChange: 'transform' }}>
        <img
          className="kf-sym"
          src={konseptMark}
          alt=""
          width="680"
          height="340"
          style={{
            position: 'absolute',
            top: '10%',
            right: -60,
            width: 640,
            height: 'auto',
            opacity: 0.3,
            pointerEvents: 'none',
          }}
        />
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(11,30,45,.62) 0%, rgba(11,30,45,.22) 38%, rgba(11,30,45,.88) 100%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(11,30,45,.85) 0%, rgba(11,30,45,.25) 62%, rgba(11,30,45,0) 100%)',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: 'radial-gradient(520px circle at var(--gx, 72%) var(--gy, 38%), rgba(127,165,192,.16), transparent 62%)',
        }}
      />
      <div className="kf-hero" style={{ position: 'relative', padding: '0 56px', maxWidth: 1120, textAlign: 'left' }}>
        <img
          src={logoFull}
          alt="Konsept"
          style={{
            display: 'block',
            height: 157,
            width: 380,
            margin: '-17px -5px -53px -28px',
            filter: 'brightness(0) invert(1)',
          }}
        />
        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 500,
            fontSize: 'clamp(34px, 4.6vw, 62px)',
            lineHeight: 1.02,
            letterSpacing: '-.02em',
            color: '#fff',
            margin: '18px 0 0',
            textWrap: 'balance',
          }}
        >
          {WORDS.map((w, i) => (
            <span key={w}>
              <span className="word">
                <span className="word-in" style={{ '--i': i }}>{w}</span>
              </span>{' '}
            </span>
          ))}
          <span className="word">
            <span className="word-in serif-italic" style={{ '--i': WORDS.length, color: 'var(--blue-pale)' }}>Resultater.</span>
          </span>
        </h1>
        <p style={{ maxWidth: 520, fontSize: 18.5, lineHeight: 1.65, color: '#c7d6e1', margin: '26px 0 0' }}>
          Vi hjelper virksomheter å bli mer synlige og attraktive — gjennom foto, merkevarebygging og målrettet
          markedsføring.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginTop: 40 }}>
          <a href="#kontakt" className="btn-primary">Book en samtale →</a>
          <a href="#arbeid" className="btn-secondary">Se arbeidet vårt</a>
        </div>
      </div>
    </section>
  );
}
