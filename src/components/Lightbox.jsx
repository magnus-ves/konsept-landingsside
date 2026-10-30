import { useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function Lightbox({ images, index, title, onClose, onChange }) {
  const closeRef = useRef(null);
  const touchX = useRef(null);
  const count = images.length;
  const go = useCallback((d) => onChange((index + d + count) % count), [index, count, onChange]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight') go(1);
      else if (e.key === 'ArrowLeft') go(-1);
    };
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    closeRef.current?.focus();
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
    };
  }, [go, onClose]);

  const img = images[index];
  return createPortal(
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} — bildevisning`}
      onClick={onClose}
      onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        if (touchX.current == null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        touchX.current = null;
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
      }}
    >
      <img
        key={img.src}
        className="lightbox-img"
        src={img.src}
        alt={`${title} — bilde ${index + 1}`}
        onClick={(e) => e.stopPropagation()}
      />
      <button ref={closeRef} className="lightbox-btn lightbox-close" onClick={onClose} aria-label="Lukk">×</button>
      <button className="lightbox-btn lightbox-prev" onClick={(e) => { e.stopPropagation(); go(-1); }} aria-label="Forrige bilde">←</button>
      <button className="lightbox-btn lightbox-next" onClick={(e) => { e.stopPropagation(); go(1); }} aria-label="Neste bilde">→</button>
      <div className="lightbox-count">{index + 1} / {count}</div>
    </div>,
    document.body
  );
}
