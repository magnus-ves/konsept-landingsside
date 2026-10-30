import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { projects } from '../content';
import { homeHref } from '../lib/home';

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    if (!project) return undefined;
    const previous = document.title;
    document.title = `${project.title} — Konsept`;
    return () => {
      document.title = previous;
    };
  }, [project]);

  if (!project) {
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

  return (
    <section style={{ padding: '170px 56px 150px', maxWidth: 1240, margin: '0 auto' }}>
      <a href={homeHref('#arbeid')} className="back-link">← Alle prosjekter</a>
      <div
        className="kf-2col"
        style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 56, alignItems: 'end', margin: '56px 0' }}
      >
        <div style={{ minWidth: 0 }}>
          <span className="eyebrow eyebrow--light">{project.tag}</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(38px,5.6vw,72px)', color: '#fff', lineHeight: 1.02, letterSpacing: '-.03em' }}>
            {project.title}
          </h1>
        </div>
        <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--ink-dim)', maxWidth: 480 }}>{project.desc}</p>
      </div>
      <div className="gallery">
        {project.images.map((img, i) => (
          <div key={img.src} className="gallery-item">
            <img src={img.src} width={img.width} height={img.height} alt={`${project.title} — bilde ${i + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
      <div style={{ marginTop: 90, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 24, borderTop: '1px solid rgba(232,238,243,.14)', paddingTop: 40 }}>
        <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(22px,2.6vw,30px)', color: '#fff', letterSpacing: '-.015em' }}>
          Har du et arrangement eller prosjekt?
        </p>
        <a href={homeHref('#kontakt')} className="btn-primary">Book en samtale →</a>
      </div>
    </section>
  );
}
