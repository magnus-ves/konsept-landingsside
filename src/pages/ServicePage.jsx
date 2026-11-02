import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { projects, services } from '../content';
import { homeHref } from '../lib/home';

// Three distinct photos for the mosaic: the home-page covers first, then the
// rest of the project's images.
const mosaic = (p) => {
  const seen = new Set();
  return [...p.covers, ...p.images].filter((img) => !seen.has(img.src) && seen.add(img.src)).slice(0, 3);
};

export default function ServicePage() {
  const { slug } = useParams();
  const index = services.findIndex((s) => s.slug === slug);
  const service = services[index];

  useEffect(() => {
    if (!service) return undefined;
    const previous = document.title;
    document.title = `${service.title} — Konsept`;
    return () => {
      document.title = previous;
    };
  }, [service]);

  if (!service) {
    return (
      <section style={{ padding: '200px 56px 120px', maxWidth: 1240, margin: '0 auto' }}>
        <h1 className="section-title" style={{ fontSize: 'clamp(34px,4.4vw,54px)', color: '#fff' }}>
          Fant ikke siden
        </h1>
        <p style={{ fontSize: 16, color: 'var(--ink-dim)', marginTop: 20 }}>
          <Link to="/" className="back-link">← Til forsiden</Link>
        </p>
      </section>
    );
  }

  const refs = service.refs.map((r) => projects.find((p) => p.slug === r)).filter(Boolean);
  const next = services[(index + 1) % services.length];

  return (
    <section className="svc">
      <a href={homeHref('#tjenester')} className="back-link">← Alle tjenester</a>

      <header className="svc-head kf-2col">
        <div>
          <span className="svc-num">{service.num}</span>
          <h1 className="section-title svc-title">{service.title}</h1>
        </div>
        <p className="svc-intro">{service.intro}</p>
      </header>

      <ul className="svc-includes">
        {service.includes.map((it) => (
          <li key={it.t} className="kf-rise">
            <h3>{it.t}</h3>
            <p>{it.d}</p>
          </li>
        ))}
      </ul>

      {refs.length > 0 && (
        <div className="svc-refs">
          <h2 className="section-title svc-h2 kf-rise">Referansearbeid</h2>
          <div className="ref-list">
            {refs.map((p, i) => (
              <Link key={p.slug} to={`/prosjekter/${p.slug}`} className={`ref kf-rise${i % 2 ? ' ref--flip' : ''}`}>
                <div className="ref-mosaic" aria-hidden="true">
                  {mosaic(p).map((img, k) => (
                    <div key={img.src} className={`ref-tile ref-tile--${k + 1}`}>
                      <img src={img.src} width={img.width} height={img.height} alt="" loading="lazy" />
                    </div>
                  ))}
                </div>
                <div className="ref-text">
                  <span className="ref-idx">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="ref-meta">
                    <span>{p.images.length} bilder</span>
                    <span className="ref-cta">
                      Se prosjektet <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="svc-end">
        <div className="kf-rise">
          <h2 className="section-title svc-h2">Trenger du {service.title.toLowerCase()}?</h2>
          <a href={homeHref('#kontakt')} className="btn-primary" style={{ marginTop: 28 }}>Book en samtale →</a>
        </div>
        <Link to={`/tjenester/${next.slug}`} className="svc-next kf-rise">
          <span>Neste tjeneste</span>
          <strong>{next.title} →</strong>
        </Link>
      </div>
    </section>
  );
}
