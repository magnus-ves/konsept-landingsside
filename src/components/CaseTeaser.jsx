import { Link } from 'react-router-dom';
import { uti } from '../assets';
import '../pages/uti-case.css';

// Home-page entry to the UTI.no case. Uses the case's own sand/green palette so
// it reads as a different kind of work than the photo projects above.
export default function CaseTeaser() {
  return (
    <section id="eksempelcase" style={{ padding: '30px 56px 90px' }} className="case-teaser-section">
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div className="kf-rise" style={{ marginBottom: 34 }}>
          <span className="eyebrow eyebrow--light">EKSEMPELCASE</span>
          <h2 className="section-title" style={{ fontSize: 'clamp(34px,4.4vw,54px)', color: '#fff' }}>
            Design som løser noe
          </h2>
        </div>
        <Link to="/case/uti-no" className="uti case-teaser kf-rise">
          <div className="case-teaser-img">
            <img src={uti.hero.src} width={uti.hero.width} height={uti.hero.height} alt="" loading="lazy" />
          </div>
          <div className="case-teaser-text">
            <span className="uti-eyebrow">Konsept · Merkevare · 2026</span>
            <h3>UTI.no – vi skal få Norge ut igjen</h3>
            <p>Konsept, navn og visuell identitet for en plattform som gjør det enkelt å velge ut.</p>
            <span className="case-teaser-link">Se casen →</span>
          </div>
        </Link>
      </div>
    </section>
  );
}
