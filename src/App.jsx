import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import ProjectPage from './pages/ProjectPage';
import UtiCase from './pages/UtiCase';
import useMagnetic from './lib/useMagnetic';

export default function App() {
  const { pathname } = useLocation();
  useMagnetic();
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [heroShift, setHeroShift] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 60);
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
      setHeroShift(Math.min(window.scrollY * 0.18, 160));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <ScrollToTop />
      <Nav scrolled={scrolled || pathname.startsWith('/case')} progress={progress} />
      <div key={pathname} className="page-enter">
      <Routes>
        <Route path="/" element={<Home heroShift={heroShift} />} />
        <Route path="/case/uti-no" element={<UtiCase />} />
        <Route path="/prosjekter/:slug" element={<ProjectPage />} />
        <Route path="*" element={<ProjectPage />} />
      </Routes>
      </div>
      <Footer />
    </div>
  );
}
