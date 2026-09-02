export default function ImagePlaceholder({ label, aspectRatio, style, className }) {
  return (
    <div
      className={className}
      style={{
        width: '100%',
        minWidth: 0,
        aspectRatio,
        overflow: 'hidden',
        borderRadius: 3,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        flexDirection: 'column',
        background: 'rgba(232,238,243,.05)',
        border: '1px dashed rgba(232,238,243,.28)',
        boxShadow: '0 26px 50px -26px rgba(0,0,0,.6), inset 0 0 0 1px rgba(255,255,255,.06)',
        color: 'var(--ink-dim)',
        textAlign: 'center',
        padding: 16,
        ...style,
      }}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.6">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="m21 15-5-5L5 21" />
      </svg>
      <span style={{ fontSize: 13, letterSpacing: '.01em', opacity: 0.75, maxWidth: '90%' }}>{label}</span>
    </div>
  );
}
