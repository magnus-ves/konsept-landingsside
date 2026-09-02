import { useState } from 'react';
import { contact, serviceOptions } from '../content';
import { konseptMark } from '../assets';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [picked, setPicked] = useState([]);

  const toggleService = (option) => {
    setPicked((prev) => (prev.includes(option) ? prev.filter((x) => x !== option) : [...prev, option]));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = `Henvendelse fra ${name || 'nettsiden'}`;
    const bodyLines = [
      `Navn: ${name}`,
      `E-post: ${email}`,
      `Hva trenger du hjelp med: ${picked.length ? picked.join(', ') : '—'}`,
      '',
      message,
    ];
    const mailto = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
    window.location.href = mailto;
    setSent(true);
  };

  return (
    <section id="kontakt" style={{ padding: '0 56px 40px' }}>
      <div
        className="kf-rise"
        style={{
          maxWidth: 1240,
          margin: '0 auto',
          background: 'var(--blue)',
          borderRadius: 4,
          padding: '110px 64px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <img
          className="kf-sym"
          src={konseptMark}
          alt=""
          width="820"
          height="410"
          style={{ position: 'absolute', left: -220, bottom: -150, opacity: 0.12, pointerEvents: 'none' }}
        />
        <div style={{ position: 'relative' }}>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: 'clamp(38px,5.6vw,72px)',
              letterSpacing: '-.03em',
              color: '#fff',
              lineHeight: 1.02,
              margin: '0 0 44px',
            }}
          >
            Har du et konsept?
            <br />
            <span className="serif-italic">La oss utvikle det videre.</span>
          </h2>
          <div className="kf-2col" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,.85fr) minmax(0,1fr)', gap: 64, alignItems: 'start' }}>
            <div>
              <p style={{ fontSize: 16.5, lineHeight: 1.7, color: '#d9e5ee', margin: '0 0 34px', maxWidth: 380 }}>
                Fortell kort om prosjektet ditt, så tar jeg kontakt innen én arbeidsdag.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 22, fontSize: 15, color: '#d9e5ee' }}>
                <div>
                  <div style={{ color: '#fff', fontWeight: 600, marginBottom: 7 }}>E-post</div>
                  <a href={`mailto:${contact.email}`} className="contact-link">{contact.email}</a>
                </div>
                <div>
                  <div style={{ color: '#fff', fontWeight: 600, marginBottom: 7 }}>Telefon</div>
                  <a href={`tel:${contact.phoneHref}`} className="contact-link">{contact.phone}</a>
                </div>
                <div>
                  <div style={{ color: '#fff', fontWeight: 600, marginBottom: 7 }}>Sted</div>
                  {contact.place}
                </div>
              </div>
            </div>

            <form
              onSubmit={onSubmit}
              style={{
                background: 'rgba(11,30,45,.28)',
                border: '1px solid rgba(232,238,243,.18)',
                borderRadius: 4,
                padding: 34,
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
              }}
            >
              {sent ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14, padding: '24px 0' }}>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 26, color: '#fff', letterSpacing: '-.02em' }}>
                    Takk for henvendelsen!
                  </div>
                  <p style={{ fontSize: 15, lineHeight: 1.7, color: '#d9e5ee', margin: 0 }}>
                    E-postklienten din skal nå ha åpnet en ferdigutfylt melding. Jeg svarer deg så raskt jeg kan —
                    vanligvis innen én arbeidsdag.
                  </p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 20 }}>
                    <label style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
                      <span className="field-label">Navn</span>
                      <input
                        type="text"
                        name="navn"
                        required
                        placeholder="Ditt navn"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="field-input"
                      />
                    </label>
                    <label style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
                      <span className="field-label">E-post</span>
                      <input
                        type="email"
                        name="epost"
                        required
                        placeholder="navn@firma.no"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="field-input"
                      />
                    </label>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
                    <span className="field-label">
                      Hva trenger du hjelp med? <span style={{ textTransform: 'none', letterSpacing: 0, color: '#8fa7b8' }}>(velg gjerne flere)</span>
                    </span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                      {serviceOptions.map((option) => {
                        const on = picked.includes(option);
                        return (
                          <button
                            key={option}
                            type="button"
                            onClick={() => toggleService(option)}
                            aria-pressed={on}
                            className="service-chip"
                            style={{
                              borderColor: on ? '#fff' : 'rgba(232,238,243,.28)',
                              background: on ? '#fff' : 'rgba(232,238,243,.06)',
                              color: on ? 'var(--navy)' : 'var(--ink)',
                            }}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <label style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
                    <span className="field-label">Melding</span>
                    <textarea
                      name="melding"
                      rows={4}
                      placeholder="Fortell kort om prosjektet, tidsramme og budsjett."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="field-input"
                      style={{ resize: 'vertical', lineHeight: 1.6 }}
                    />
                  </label>
                  <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start', marginTop: 8 }}>
                    Send henvendelse →
                  </button>
                  <p style={{ fontSize: 12.5, lineHeight: 1.6, color: '#a9c0d0', margin: 0 }}>
                    Jeg bruker opplysningene kun til å svare på henvendelsen din.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
