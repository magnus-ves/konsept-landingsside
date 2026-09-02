export default function Intro() {
  return (
    <section id="intro" style={{ padding: '150px 56px 110px', maxWidth: 1240, margin: '0 auto' }}>
      <div
        className="kf-rise kf-2col"
        style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.05fr)', gap: 80, alignItems: 'end' }}
      >
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 500,
            fontSize: 'clamp(34px,4.4vw,56px)',
            lineHeight: 1.06,
            letterSpacing: '-.02em',
            color: '#fff',
            textWrap: 'balance',
          }}
        >
          Vi gir retning til det som ennå ikke har <span className="serif-italic" style={{ color: 'var(--blue-pale)' }}>form.</span>
        </h2>
        <p style={{ fontSize: 19, lineHeight: 1.75, color: 'var(--ink-dim)' }}>
          Konsept hjelper virksomheter å bli mer attraktive gjennom gjennomtenkt design, skarp markedsføring og
          fotografi som treffer. Vi forenkler det komplekse og gir merkevarer en tydelig retning — fra idé til
          resultat.
        </p>
      </div>
    </section>
  );
}
