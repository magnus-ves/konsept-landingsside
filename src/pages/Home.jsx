import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Intro from '../components/Intro';
import Services from '../components/Services';
import Method from '../components/Method';
import Work from '../components/Work';
// import CaseTeaser from '../components/CaseTeaser';
import About from '../components/About';
import Team from '../components/Team';
import Faq from '../components/Faq';
import Contact from '../components/Contact';

export default function Home({ heroShift }) {
  return (
    <>
      <Hero heroShift={heroShift} />
      <Marquee />
      <Intro />
      <Services />
      <Method />
      <Work />
      {/* Konseptlab hidden for now: <CaseTeaser /> */}
      <About />
      <Team />
      <Faq />
      <Contact />
    </>
  );
}
