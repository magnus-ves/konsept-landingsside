import { marquee } from '../content';

export default function Marquee() {
  const items = [...marquee, ...marquee];
  return (
    <div
      style={{
        borderTop: '1px solid rgba(232,238,243,.12)',
        borderBottom: '1px solid rgba(232,238,243,.12)',
        overflow: 'hidden',
        padding: '22px 0',
        background: 'var(--navy)',
      }}
    >
      <div className="kf-marq" style={{ display: 'flex', gap: 56, width: 'max-content', alignItems: 'center' }}>
        {items.map((text, i) => (
          <span
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 56,
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 15,
              letterSpacing: '.14em',
              color: 'var(--blue-light)',
              whiteSpace: 'nowrap',
            }}
          >
            {text}
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(127,165,192,.5)', display: 'block' }} />
          </span>
        ))}
      </div>
    </div>
  );
}
