import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// On a new page, start at the top, or at the section named in the hash
// (e.g. coming back to /#arbeid from a project page).
export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    const target = id && document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: 'instant', block: 'start' });
    else window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}
