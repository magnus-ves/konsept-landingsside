import { Link } from 'react-router-dom';
import { projects } from '../content';

export default function Work() {
  return (
    <section id="arbeid" style={{ padding: '60px 56px 150px' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div
          className="kf-rise"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: 32,
            flexWrap: 'wrap',
            borderBottom: '1px solid rgba(232,238,243,.14)',
            paddingBottom: 34,
            marginBottom: 90,
          }}
        >
          <div>
            <span className="eyebrow eyebrow--light">ARBEID</span>
            <h2 className="section-title" style={{ fontSize: 'clamp(34px,4.4vw,54px)', color: '#fff' }}>
              Utvalgte prosjekter
            </h2>
          </div>
          <span style={{ fontSize: 14, color: 'var(--ink-dimmer)' }}>2026</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 130 }}>
          {projects.map((p) => (
            <Link
              key={p.id}
              to={`/prosjekter/${p.slug}`}
              className="kf-rise kf-2col project-card"
              style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.15fr) minmax(0,1fr)', gap: 56, alignItems: 'center' }}
            >
              <div
                className="project-media"
                style={{ minWidth: 0, aspectRatio: '16/10', overflow: 'hidden', borderRadius: 3, boxShadow: '0 26px 50px -26px rgba(0,0,0,.6), inset 0 0 0 1px rgba(255,255,255,.06)' }}
              >
                <img
                  src={p.cover.src}
                  width={p.cover.width}
                  height={p.cover.height}
                  alt={`${p.title} — forhåndsvisning`}
                  loading="lazy"
                  style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 56, color: 'rgba(232,238,243,.22)', lineHeight: 1 }}>
                  {p.idx}
                </div>
                <span style={{ fontSize: 12.5, color: 'var(--blue-light)', letterSpacing: '.16em' }}>{p.tag}</span>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, fontSize: 'clamp(28px,3.4vw,42px)', letterSpacing: '-.02em', color: '#fff', margin: '14px 0 18px' }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ink-dim)', margin: '0 0 24px', maxWidth: 420 }}>{p.desc}</p>
                <span className="project-link">Se prosjektet →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
