import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const COVER_MS = 280;
const REVEAL_MS = 420;

// Fade between pages: internal link clicks are caught before React Router
// handles them, the old page fades out, the route changes, and the new page
// fades in. Same-page anchors are left alone.
export default function PageTransition() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [phase, setPhase] = useState('idle');
  const busy = useRef(false);
  const current = useRef(pathname);
  current.current = pathname;
  // useNavigate returns a new function on every route change; keep the latest
  // in a ref so the listener (and its timers) survive the navigation.
  const nav = useRef(navigate);
  nav.current = navigate;

  useEffect(() => {
    const base = import.meta.env.BASE_URL;
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timers = [];

    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = e.target.closest?.('a[href]');
      if (!a || (a.target && a.target !== '_self') || a.hasAttribute('download')) return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin || !url.pathname.startsWith(base)) return;
      const to = `/${url.pathname.slice(base.length)}`;
      if (to === current.current) return; // same page: let anchors scroll natively
      e.preventDefault();
      const dest = to + url.search + url.hash;
      if (calm) {
        nav.current(dest);
        return;
      }
      if (busy.current) return;
      busy.current = true;
      setPhase('cover');
      timers.push(
        setTimeout(() => {
          nav.current(dest);
          setPhase('reveal');
          timers.push(
            setTimeout(() => {
              setPhase('idle');
              busy.current = false;
            }, REVEAL_MS),
          );
        }, COVER_MS),
      );
    };

    // Capture phase runs before React Router's own Link handler.
    document.addEventListener('click', onClick, true);
    return () => {
      document.removeEventListener('click', onClick, true);
      timers.forEach(clearTimeout);
    };
  }, []);

  if (phase === 'idle') return null;
  return (
    <div className={`curtain curtain--${phase}`} aria-hidden="true" />
  );
}
