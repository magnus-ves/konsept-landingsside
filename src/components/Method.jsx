import { steps } from '../content';

export default function Method() {
  return (
    <section className="method" style={{ padding: '150px 56px', maxWidth: 1240, margin: '0 auto' }}>
      <div className="kf-rise" style={{ marginBottom: 80 }}>
        <span className="eyebrow eyebrow--light">METODE</span>
        <h2 className="section-title" style={{ fontSize: 'clamp(34px,4.4vw,54px)', color: '#fff' }}>
          Hvordan jeg arbeider
        </h2>
      </div>
      <div className="kf-rise method-steps">
        <div className="kf-line method-line" />
        {steps.map((st) => (
          <div key={st.num} className="method-step">
            <div className="method-dot">
              <span />
            </div>
            <div>
              <div className="method-num">{st.num}</div>
              <h3 className="method-title">{st.title}</h3>
              <p className="method-desc">{st.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
