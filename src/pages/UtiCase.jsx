import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { uti } from '../assets';
import { homeHref } from '../lib/home';
import './uti-case.css';

const stats = [
  { n: '60 %', t: 'ønsker å være mer ute i naturen enn i dag', s: 'Natur- og miljøbarometeret 2023' },
  { n: '45 → 37 %', t: 'andelen som drar på fisketur, 2011 til 2020', s: 'SSB' },
  { n: '41 → 18 %', t: 'barn som leker ute nesten daglig, 2015 til 2022', s: 'Ipsos for Miljødirektoratet og Norsk Friluftsliv' },
];

const barriers = [
  { q: 'Jeg vet ikke hvor jeg skal.', a: 'Konkrete forslag til steder i nærheten: i byen, i marka og i vannet.' },
  { q: 'Friluftsliv er for de spreke.', a: 'En tur kan være en kaffe på svaberget. Ingen prestasjon, ikke noe utstyrspress.' },
  { q: 'Jeg kommer ikke på det.', a: 'Vi dukker opp i feeden med et enkelt spørsmål: «Hva med en tur uti marka?»' },
  { q: 'Jeg har gått de samme turene før.', a: 'Brukerne tipser hverandre, så plattformen blir stadig rikere.' },
];

export default function UtiCase() {
  useEffect(() => {
    document.title = 'UTI.no — Konsept';
  }, []);

  const [marka, ingierstrand, input] = uti.campaign;

  return (
    <main className="uti">
      <header className="uti-hero uti-wrap">
        <h1 className="kf-rise">UTI.no – vi skal få Norge ut igjen</h1>
        <div className="uti-hero-sub kf-rise">
          <p className="uti-lead">Konsept, navn og visuell identitet for en plattform som gjør det enkelt å velge ut.</p>
          <p className="uti-meta">
            Konsept, merkevare, visuell identitet
            <br />
            2026
          </p>
        </div>
      </header>

      <figure className="uti-hero-img kf-rise">
        <img src={uti.hero.src} width={uti.hero.width} height={uti.hero.height} alt="UTI-logoen over et fjellvann" />
      </figure>

      <section className="uti-section uti-wrap">
        <h2 className="kf-rise">Vi vil ut, men vi kommer oss ikke ut.</h2>
        <div className="uti-stats">
          {stats.map((s) => (
            <div key={s.n} className="uti-stat kf-rise">
              <div className="uti-stat-n">{s.n}</div>
              <p>{s.t}</p>
              <span className="uti-source">{s.s}</span>
            </div>
          ))}
        </div>
        <p className="uti-statement kf-rise">
          Gapet mellom å ville og å gjøre er problemet. Det gapet skal vi lukke.
        </p>
      </section>

      <section className="uti-section uti-wrap">
        <ul className="uti-barriers">
          {barriers.map((b) => (
            <li key={b.q} className="kf-rise">
              <p className="uti-quote">«{b.q}»</p>
              <p className="uti-answer">
                <span className="uti-arrow" aria-hidden="true">→</span>
                {b.a}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="uti-section uti-wrap uti-identity">
        <div className="uti-identity-text kf-rise">
          <h2>Gå ut av rammen</h2>
          <p className="uti-body">
            Navnet er et hverdagsord, fordi det å være ute skal føles som en hverdagsting. I-en i logoen brettes ut til en
            sti som peker fremover og bryter ut av bilderammen. Det er hele budskapet i én grafisk gest.
          </p>
        </div>
        <div className="uti-breakout kf-rise">
          <img className="uti-breakout-photo" src={uti.sti.src} width={uti.sti.width} height={uti.sti.height} alt="En sti gjennom skogen" loading="lazy" />
          <img className="uti-breakout-mark" src={uti.symbol.src} width={uti.symbol.width} height={uti.symbol.height} alt="" />
        </div>
      </section>

      <div className="uti-wrap uti-kit">
        <img className="uti-logo kf-rise" src={uti.logo.src} width={uti.logo.width} height={uti.logo.height} alt="UTI-logoen" loading="lazy" />
        <div className="uti-specs kf-rise">
          <div className="uti-colors">
            <span><i style={{ background: '#2F5F3F' }} />#2F5F3F</span>
            <span><i style={{ background: '#FDF6F0' }} />#FDF6F0</span>
          </div>
          <p className="uti-type-sample">Hva med en tur uti marka?</p>
          <p className="uti-type-name">Inter Tight, semibold</p>
        </div>
      </div>

      <section className="uti-section uti-wrap">
        <h2 className="kf-rise">Et spørsmål, ikke en pekefinger</h2>
        <div className="uti-gallery">
          <img className="uti-g1 kf-rise" src={marka.src} width={marka.width} height={marka.height} alt={marka.alt} loading="lazy" />
          <img className="uti-g2 kf-rise" src={ingierstrand.src} width={ingierstrand.width} height={ingierstrand.height} alt={ingierstrand.alt} loading="lazy" />
          <img className="uti-g3 kf-rise" src={input.src} width={input.width} height={input.height} alt={input.alt} loading="lazy" />
          <p className="uti-body uti-g-text kf-rise">
            Hver post stiller et spørsmål og peker på et konkret sted. Når brukerne tipser om egne turer, vokser plattformen
            med dem.
          </p>
        </div>
      </section>

      <section className="uti-goal uti-wrap">
        <p className="uti-goal-big kf-rise">Vi måler suksess i turer, ikke i klikk.</p>
        <p className="uti-goal-sub kf-rise">
          Hvis noen leser ‘Hva med en tur ut til Ingierstrand?’ og faktisk drar dit, har UTI.no gjort jobben sin.
        </p>
      </section>

      <nav className="uti-end uti-wrap" aria-label="Flere prosjekter">
        <a href={homeHref('#arbeid')}>← Alle prosjekter</a>
        <Link to="/prosjekter/cloud-con">Neste: Cloud Con 26 →</Link>
      </nav>
    </main>
  );
}
