import ImagePlaceholder from './ImagePlaceholder';
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
          <span style={{ fontSize: 14, color: 'var(--ink-dimmer)' }}>2024 — 2026</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 130 }}>
          {projects.map((p) => (
            <div
              key={p.id}
              className="kf-rise kf-2col"
              style={{
                display: 'grid',
                gridTemplateColumns: p.imgFirst ? 'minmax(0,1.15fr) minmax(0,1fr)' : 'minmax(0,1fr) minmax(0,1.15fr)',
                gap: 56,
                alignItems: 'center',
              }}
            >
              <div style={{ order: p.imgFirst ? 1 : 2, minWidth: 0 }}>
                <ImagePlaceholder className="media-frame" label={p.placeholder} aspectRatio="16/10" />
              </div>
              <div style={{ order: p.imgFirst ? 2 : 1, minWidth: 0 }}>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 56, color: 'rgba(232,238,243,.22)', lineHeight: 1 }}>
                  {p.idx}
                </div>
                <span style={{ fontSize: 12.5, color: 'var(--blue-light)', letterSpacing: '.16em' }}>{p.tag}</span>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, fontSize: 'clamp(28px,3.4vw,42px)', letterSpacing: '-.02em', color: '#fff', margin: '14px 0 18px' }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ink-dim)', marginBottom: 24, maxWidth: 420 }}>{p.desc}</p>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 14.5, color: 'var(--blue-light)', borderBottom: '1px solid rgba(127,165,192,.4)', paddingBottom: 4 }}>
                  Se prosjektet →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
