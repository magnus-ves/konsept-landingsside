import { Link } from 'react-router-dom';

// Project card used on the home page and the service pages: a fan of three
// cover photos beside the number, title and description.
export default function ProjectCard({ project: p, idx }) {
  return (
    <Link
      to={`/prosjekter/${p.slug}`}
      className="kf-rise kf-2col project-card"
      style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.15fr) minmax(0,1fr)', gap: 56, alignItems: 'center' }}
    >
      <div className="trio" aria-hidden="true">
        {p.covers.map((c, i) => (
          <div key={c.src} className={`trio-frame trio-${i + 1}`}>
            <img src={c.src} width={c.width} height={c.height} alt="" loading="lazy" />
          </div>
        ))}
      </div>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontFamily: "'Old Standard TT', serif", fontSize: 56, color: 'rgba(232,238,243,.22)', lineHeight: 1 }}>
          {idx ?? p.idx}
        </div>
        <h3 style={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: 500, fontSize: 'clamp(28px,3.4vw,42px)', letterSpacing: '-.02em', color: '#fff', margin: '14px 0 18px' }}>
          {p.title}
        </h3>
        <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ink-dim)', margin: '0 0 24px', maxWidth: 420 }}>{p.desc}</p>
        <span className="project-link">Se prosjektet →</span>
      </div>
    </Link>
  );
}
