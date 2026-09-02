import { magnusPortrait } from '../assets';

export default function Team() {
  return (
    <section style={{ background: 'var(--cream)', color: 'var(--cream-ink)', padding: '130px 56px' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div className="kf-rise" style={{ marginBottom: 64 }}>
          <span className="eyebrow eyebrow--dark">MENNESKET BAK</span>
          <h2 className="section-title" style={{ fontSize: 'clamp(32px,4vw,50px)', color: 'var(--cream-ink)' }}>
            Én person. Full oversikt.
          </h2>
        </div>
        <div className="kf-rise" style={{ display: 'flex', gap: 40, alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div
            className="photo-frame"
            style={{
              width: 140,
              flex: 'none',
              aspectRatio: '4/5',
              overflow: 'hidden',
              borderRadius: 3,
              boxShadow: '0 16px 32px -18px rgba(0,0,0,.35), inset 0 0 0 1px rgba(11,30,45,.06)',
            }}
          >
            <img
              className="media-frame"
              src={magnusPortrait}
              alt="Magnus Vestre"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 25%', display: 'block' }}
            />
          </div>
          <div style={{ minWidth: 0, flex: '1 1 380px' }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, fontSize: 'clamp(26px,3vw,36px)', letterSpacing: '-.015em', color: 'var(--cream-ink)' }}>
              Magnus Vestre
            </div>
            <div style={{ fontSize: 15, color: 'var(--blue)', marginTop: 8, letterSpacing: '.02em' }}>
              Grunnlegger &amp; kreativ leder
            </div>
            <p style={{ fontSize: 17.5, lineHeight: 1.75, color: 'var(--cream-dim)', margin: '26px 0 0', maxWidth: 520 }}>
              Konsept er ett hode og én hånd gjennom hele prosjektet. Du snakker med den samme personen fra første
              idé til ferdig levert materiell — ingen mellomledd, ingen overleveringer, og full oversikt hele veien.
            </p>
            <div style={{ display: 'flex', gap: 44, marginTop: 36, flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 26, color: 'var(--cream-ink)' }}>Foto</div>
                <div style={{ fontSize: 13.5, color: 'var(--cream-dim)', marginTop: 6 }}>Produksjon</div>
              </div>
              <div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 26, color: 'var(--cream-ink)' }}>Design</div>
                <div style={{ fontSize: 13.5, color: 'var(--cream-dim)', marginTop: 6 }}>Merkevare</div>
              </div>
              <div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 26, color: 'var(--cream-ink)' }}>Strategi</div>
                <div style={{ fontSize: 13.5, color: 'var(--cream-dim)', marginTop: 6 }}>Rådgivning</div>
              </div>
            </div>
            <a href="#kontakt" className="btn-dark">Ta kontakt med Magnus →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
