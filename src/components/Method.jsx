import { steps } from '../content';

export default function Method() {
  return (
    <section style={{ padding: '150px 56px', maxWidth: 1240, margin: '0 auto' }}>
      <div className="kf-rise" style={{ marginBottom: 80 }}>
        <span className="eyebrow eyebrow--light">METODE</span>
        <h2 className="section-title" style={{ fontSize: 'clamp(34px,4.4vw,54px)', color: '#fff' }}>
          Hvordan jeg arbeider
        </h2>
      </div>
      <div className="kf-rise kf-4col" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,minmax(0,1fr))', gap: 0, position: 'relative' }}>
        <div
          className="kf-line"
          style={{
            position: 'absolute',
            top: 13,
            left: 0,
            right: 0,
            height: 1,
            background: 'rgba(232,238,243,.22)',
            zIndex: 0,
            transformOrigin: 'left center',
          }}
        />
        {steps.map((st) => (
          <div key={st.num} style={{ position: 'relative', paddingRight: 32, zIndex: 1 }}>
            <div
              style={{
                width: 27,
                height: 27,
                borderRadius: '50%',
                border: '1px solid rgba(232,238,243,.4)',
                background: 'var(--navy)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 30,
              }}
            >
              <span style={{ width: 9, height: 9, borderRadius: '50%', background: 'var(--blue-light)', display: 'block' }} />
            </div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, letterSpacing: '.1em', color: 'var(--blue-light)', fontWeight: 600, marginBottom: 10 }}>
              {st.num}
            </div>
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, fontSize: 23, color: '#fff', marginBottom: 12 }}>
              {st.title}
            </h3>
            <p style={{ fontSize: 14.5, lineHeight: 1.65, color: 'var(--ink-dimmer)' }}>{st.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
