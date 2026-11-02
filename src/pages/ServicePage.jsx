import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { projects, services } from '../content';
import { homeHref } from '../lib/home';

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

  const matched = service.refs.map((r) => projects.find((p) => p.slug === r)).filter(Boolean);
  const refs = matched.length ? matched : projects;
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

      <div className="svc-refs">
        <h2 className="section-title svc-h2 kf-rise">{matched.length ? 'Referansearbeid' : 'Utvalgt arbeid'}</h2>
        <div className="svc-grid">
          {refs.map((p) => (
            <Link key={p.slug} to={`/prosjekter/${p.slug}`} className="svc-card kf-rise">
              <div className="svc-card-img">
                <img src={p.covers[0].src} width={p.covers[0].width} height={p.covers[0].height} alt="" loading="lazy" />
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <span className="project-link">Se prosjektet →</span>
            </Link>
          ))}
        </div>
      </div>

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
