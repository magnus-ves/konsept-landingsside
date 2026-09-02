import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Intro from './components/Intro';
import Services from './components/Services';
import Method from './components/Method';
// import Work from './components/Work'; // temporarily removed — see App.jsx render
import About from './components/About';
import Team from './components/Team';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
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
      <Nav scrolled={scrolled} progress={progress} />
      <Hero heroShift={heroShift} />
      <Marquee />
      <Intro />
      <Services />
      <Method />
      {/* <Work /> — temporarily removed */}
      <About />
      <Team />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}
