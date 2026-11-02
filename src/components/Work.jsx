import ProjectCard from './ProjectCard';
import { projects } from '../content';

export default function Work() {
  return (
    <section id="arbeid" style={{ padding: '40px 56px 70px' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div
          className="kf-rise"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: 32,
            flexWrap: 'wrap',
            borderBottom: '1px solid rgba(232,238,243,.14)',
            paddingBottom: 34,
            marginBottom: 56,
          }}
        >
          <div>
            <h2 className="section-title" style={{ fontSize: 'clamp(34px,4.4vw,54px)', color: '#fff' }}>
              Utvalgte prosjekter
            </h2>
          </div>
          <span style={{ fontSize: 14, color: 'var(--ink-dimmer)' }}>2026</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 72 }}>
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
