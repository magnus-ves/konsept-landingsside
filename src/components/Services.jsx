import { services } from '../content';

export default function Services() {
  return (
    <section id="tjenester" style={{ background: 'var(--cream)', color: 'var(--cream-ink)', padding: '140px 56px' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div
          className="kf-rise"
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 40, flexWrap: 'wrap', marginBottom: 70 }}
        >
          <div>
            <span className="eyebrow eyebrow--dark">TJENESTER</span>
            <h2 className="section-title" style={{ fontSize: 'clamp(34px,4.4vw,54px)', color: 'var(--cream-ink)' }}>
              Det jeg gjør for deg
            </h2>
          </div>
          <p style={{ maxWidth: 360, fontSize: 16, lineHeight: 1.7, color: 'var(--cream-dim)' }}>
            Seks disipliner, én retning. Vi setter dem sammen etter hva virksomheten din faktisk trenger.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid rgba(11,30,45,.14)' }}>
          {services.map((s) => (
            <div
              key={s.num}
              className="kf-rise kf-srow service-row"
              style={{
                display: 'grid',
                gridTemplateColumns: '88px minmax(0,1.1fr) minmax(0,1.3fr) 44px',
                gap: 28,
                alignItems: 'center',
                padding: '34px 20px 34px 8px',
                borderBottom: '1px solid rgba(11,30,45,.14)',
              }}
            >
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, letterSpacing: '.1em', color: 'var(--blue)', fontWeight: 600 }}>
                {s.num}
              </span>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, fontSize: 'clamp(24px,2.6vw,34px)', letterSpacing: '-.015em', color: 'var(--cream-ink)' }}>
                {s.title}
              </h3>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--cream-dim)' }}>{s.desc}</p>
              <span style={{ fontSize: 20, color: 'var(--blue)', justifySelf: 'end' }}>→</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
