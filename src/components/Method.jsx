import { steps } from '../content';

export default function Method() {
  return (
    <section className="method">
      <span className="eyebrow eyebrow--light">METODE</span>
      <h2 className="section-title method-heading">Hvordan jeg arbeider</h2>
      <ol className="method-list">
        {steps.map((st) => (
          <li key={st.num} className="method-step">
            <span className="method-dot" aria-hidden="true" />
            <span className="method-num">{st.num}</span>
            <h3 className="method-title">{st.title}</h3>
            <p className="method-desc">{st.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
