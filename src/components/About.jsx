export default function About() {
  return (
    <section id="om" style={{ padding: '150px 56px', maxWidth: 1240, margin: '0 auto' }}>
      <div className="kf-rise" style={{ maxWidth: 640 }}>
        <span className="eyebrow eyebrow--light">OM KONSEPT</span>
        <h2 className="section-title" style={{ fontSize: 'clamp(32px,4vw,50px)', color: '#fff', lineHeight: 1.06, marginBottom: 26 }}>
          Fra idé til synlig <span className="serif-italic" style={{ color: 'var(--blue-pale)' }}>resultat.</span>
        </h2>
        <p style={{ fontSize: 18, lineHeight: 1.78, color: 'var(--ink-dim)' }}>
          Konsept er et enmannsbyrå bygget på én idé: gode resultater starter med et klart konsept. Jeg
          kombinerer foto, design og markedsføring for å gjøre virksomheter mer attraktive — synlig, tydelig og
          relevant. Jeg jobber tett med hver kunde, fra første idé til ferdig levert kampanje, og legger vekt på
          løsninger som er enkle å forstå og lette å kjenne igjen.
        </p>
      </div>
    </section>
  );
}
