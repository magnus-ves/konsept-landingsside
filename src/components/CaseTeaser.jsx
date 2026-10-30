import { Link } from 'react-router-dom';
import { uti } from '../assets';
import '../pages/uti-case.css';

// Konseptlab: self-initiated concept work, shown in the concept's own colours.
export default function CaseTeaser() {
  return (
    <section id="konseptlab" style={{ padding: '30px 56px 90px' }} className="case-teaser-section">
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <h2 className="section-title kf-rise" style={{ fontSize: 'clamp(34px,4.4vw,54px)', color: '#fff', marginBottom: 34 }}>
          Konseptlab
        </h2>
        <Link to="/case/uti-no" className="uti case-teaser kf-rise">
          <div className="case-teaser-img">
            <img src={uti.hero.src} width={uti.hero.width} height={uti.hero.height} alt="" loading="lazy" />
          </div>
          <div className="case-teaser-text">
            <h3>UTI.no – vi skal få Norge ut igjen</h3>
            <p>Konsept, navn og visuell identitet for en plattform som gjør det enkelt å velge ut.</p>
            <span className="case-teaser-link">Se casen</span>
          </div>
        </Link>
      </div>
    </section>
  );
}
