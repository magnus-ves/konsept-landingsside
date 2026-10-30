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
            marginBottom: 70,
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
            <article key={p.id}>
              <div
                className="kf-rise kf-2col"
                style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 56, alignItems: 'end', marginBottom: 56 }}
              >
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 56, color: 'rgba(232,238,243,.22)', lineHeight: 1 }}>
                    {p.idx}
                  </div>
                  <span style={{ fontSize: 12.5, color: 'var(--blue-light)', letterSpacing: '.16em' }}>{p.tag}</span>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, fontSize: 'clamp(28px,3.4vw,42px)', letterSpacing: '-.02em', color: '#fff', margin: '14px 0 0' }}>
                    {p.title}
                  </h3>
                </div>
                <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ink-dim)', maxWidth: 480 }}>{p.desc}</p>
              </div>
              <div className="gallery">
                {p.images.map((img, i) => (
                  <div key={img.src} className="gallery-item">
                    <img
                      src={img.src}
                      width={img.width}
                      height={img.height}
                      alt={`${p.title} — bilde ${i + 1}`}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
