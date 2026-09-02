import { logoFull } from '../assets';

export default function Footer() {
  return (
    <footer
      style={{
        padding: '60px 56px 44px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 20,
        maxWidth: 1240,
        margin: '0 auto',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <img src={logoFull} alt="Konsept" style={{ height: 30, width: 'auto', display: 'block', filter: 'brightness(0) invert(1)' }} />
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, color: 'var(--ink-dimmer)' }}>© 2026 KONSEPT</span>
      </div>
      <div style={{ display: 'flex', gap: 30, fontSize: 13.5 }}>
        <a href="#tjenester" className="footer-link">Tjenester</a>
        <a href="#om" className="footer-link">Om oss</a>
        <a href="#arbeid" className="footer-link">Arbeid</a>
        <a href="#kontakt" className="footer-link">Kontakt</a>
      </div>
    </footer>
  );
}
