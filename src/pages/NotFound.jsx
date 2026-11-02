import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  useEffect(() => {
    const previous = document.title;
    document.title = 'Fant ikke siden — Konsept';
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <section className="nf">
      <span className="nf-code" aria-hidden="true">404</span>
      <h1 className="section-title nf-title">Konseptet gikk i feil retning.</h1>
      <Link to="/" className="nf-link">
        Trykk her for å få konseptet på rett kjøl igjen <span aria-hidden="true">→</span>
      </Link>
    </section>
  );
}
