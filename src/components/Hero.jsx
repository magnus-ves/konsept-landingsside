import { logoFull, heroOslo, konseptMark } from '../assets';

export default function Hero({ heroShift }) {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: '150px 0 40px',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: '-6% 0 0 0',
          background: `url(${heroOslo}) center 60% / cover no-repeat`,
          transform: `translateY(${heroShift}px)`,
          willChange: 'transform',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: '-6% 0 0 0',
          WebkitMaskImage: 'linear-gradient(to bottom, #000 0%, #000 16%, transparent 30%)',
          maskImage: 'linear-gradient(to bottom, #000 0%, #000 16%, transparent 30%)',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
        }}
      >
        <img
          className="kf-sym"
          src={konseptMark}
          alt=""
          width="680"
          height="340"
          style={{
            position: 'absolute',
            top: '10%',
            right: -60,
            width: 640,
            height: 'auto',
            opacity: 0.3,
            pointerEvents: 'none',
          }}
        />
      </div>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(11,30,45,.62) 0%, rgba(11,30,45,.22) 38%, rgba(11,30,45,.88) 100%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(11,30,45,.85) 0%, rgba(11,30,45,.25) 62%, rgba(11,30,45,0) 100%)',
        }}
      />
      <div className="kf-hero" style={{ position: 'relative', padding: '0 56px', maxWidth: 1120, textAlign: 'left' }}>
        <img
          src={logoFull}
          alt="Konsept"
          style={{
            display: 'block',
            height: 157,
            width: 380,
            margin: '-17px -5px -53px -28px',
            filter: 'brightness(0) invert(1)',
          }}
        />
        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 500,
            fontSize: 'clamp(34px, 4.6vw, 62px)',
            lineHeight: 1.02,
            letterSpacing: '-.02em',
            color: '#fff',
            margin: '18px 0 0',
            textWrap: 'balance',
          }}
        >
          Ideer. Retning. <span className="serif-italic" style={{ color: 'var(--blue-pale)' }}>Resultater.</span>
        </h1>
        <p style={{ maxWidth: 520, fontSize: 18.5, lineHeight: 1.65, color: '#c7d6e1', margin: '26px 0 0' }}>
          Vi hjelper virksomheter å bli mer synlige og attraktive — gjennom foto, merkevarebygging og målrettet
          markedsføring.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginTop: 40 }}>
          <a href="#kontakt" className="btn-primary">Book en samtale →</a>
          <a href="#arbeid" className="btn-secondary">Se arbeidet vårt</a>
        </div>
      </div>
    </section>
  );
}
