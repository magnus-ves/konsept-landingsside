import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { projects, services } from '../content';
import { homeHref } from '../lib/home';
import NotFound from './NotFound';
import ProjectCard from '../components/ProjectCard';

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
    return <NotFound />;
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
              <ProjectCard key={p.slug} project={p} idx={String(i + 1).padStart(2, '0')} />
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
