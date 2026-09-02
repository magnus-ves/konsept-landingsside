import { logoFull } from '../assets';

export default function Nav({ scrolled, progress }) {
  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: 2,
          zIndex: 60,
          background: 'var(--blue-light)',
          width: `${progress}%`,
          transition: 'width .1s linear',
        }}
      />
      <nav
        style={{
          position: 'fixed',
          top: scrolled ? 14 : 0,
          left: 0,
          right: 0,
          zIndex: 55,
          display: 'flex',
          justifyContent: 'center',
          pointerEvents: 'none',
          transition: 'top .4s ease',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 48,
            width: scrolled ? 'calc(100% - 40px)' : '100%',
            maxWidth: 1440,
            padding: scrolled ? '12px 20px 12px 24px' : '22px 46px',
            background: scrolled ? 'rgba(11,30,45,.72)' : 'transparent',
            backdropFilter: scrolled ? 'blur(14px) saturate(140%)' : 'none',
            borderRadius: scrolled ? 999 : 0,
            border: `1px solid ${scrolled ? 'rgba(232,238,243,.16)' : 'transparent'}`,
            pointerEvents: 'auto',
            transition: 'all .45s cubic-bezier(.2,.7,.2,1)',
          }}
        >
          <a href="#" style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={logoFull}
              alt="Konsept"
              style={{ display: 'block', height: 34, width: 'auto', filter: 'brightness(0) invert(1)' }}
            />
          </a>
          <div className="kf-nav-links" style={{ display: 'flex', alignItems: 'center', gap: 34, fontSize: 13.5, letterSpacing: '.02em' }}>
            <a href="#tjenester" className="nav-link">Tjenester</a>
            <a href="#om" className="nav-link">Om oss</a>
            <a href="#kontakt" className="nav-cta">Book en samtale</a>
          </div>
        </div>
      </nav>
    </>
  );
}
