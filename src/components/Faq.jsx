import { useState } from 'react';
import { faqs } from '../content';

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section style={{ padding: '150px 56px', maxWidth: 980, margin: '0 auto' }}>
      <div className="kf-rise" style={{ marginBottom: 58 }}>
        <span className="eyebrow eyebrow--light">SPØRSMÅL</span>
        <h2 className="section-title" style={{ fontSize: 'clamp(32px,4vw,50px)', color: '#fff' }}>
          Ofte stilte spørsmål
        </h2>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid rgba(232,238,243,.14)' }}>
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} style={{ borderBottom: '1px solid rgba(232,238,243,.14)' }}>
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 24,
                  background: 'none',
                  border: 'none',
                  padding: '30px 4px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 500,
                  fontSize: 20,
                  color: '#fff',
                }}
              >
                {f.q}
                <span style={{ fontSize: 22, color: 'var(--blue-light)', lineHeight: 1, flex: 'none' }}>
                  {isOpen ? '−' : '+'}
                </span>
              </button>
              <div
                style={{
                  overflow: 'hidden',
                  maxHeight: isOpen ? 320 : 0,
                  opacity: isOpen ? 1 : 0,
                  transition: 'max-height .5s cubic-bezier(.2,.7,.2,1), opacity .4s ease',
                }}
              >
                <p style={{ fontSize: 16.5, lineHeight: 1.7, color: 'var(--ink-dim)', margin: '0 0 30px', maxWidth: 660 }}>
                  {f.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
