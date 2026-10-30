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

function Arrow() {
  return (
    <svg className="uti-arrow" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path d="M4 12h15M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function UtiCase() {
  useEffect(() => {
    document.title = 'UTI.no — Konsept';
  }, []);

  return (
    <main className="uti">
      {/* 1. Hero */}
      <header className="uti-hero uti-wrap">
        <span className="uti-eyebrow kf-rise">Eksempelcase</span>
        <h1 className="kf-rise">UTI.no – vi skal få Norge ut igjen</h1>
        <p className="uti-lead kf-rise">Konsept, navn og visuell identitet for en plattform som gjør det enkelt å velge ut.</p>
        <dl className="uti-meta kf-rise">
          <div><dt>Rolle</dt><dd>Konsept, merkevare, visuell identitet</dd></div>
          <div><dt>År</dt><dd>2026</dd></div>
        </dl>
        <figure className="uti-frame uti-hero-img kf-rise">
          <img src={uti.hero.src} width={uti.hero.width} height={uti.hero.height} alt="UTI-logoen over et fjellvann" />
        </figure>
      </header>

      {/* 2. Problemet */}
      <section className="uti-section uti-wrap">
        <span className="uti-eyebrow kf-rise">Problemet</span>
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
          Gapet mellom å ville og å gjøre er problemet. <strong>Det gapet skal vi lukke.</strong>
        </p>
      </section>

      {/* 3. Barrierene og løsningene */}
      <section className="uti-section uti-wrap">
        <span className="uti-eyebrow kf-rise">Barrierene og løsningene</span>
        <div className="uti-barriers">
          {barriers.map((b) => (
            <div key={b.q} className="uti-barrier kf-rise">
              <p className="uti-quote">«{b.q}»</p>
              <div className="uti-answer">
                <Arrow />
                <p>{b.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Identiteten */}
      <section className="uti-section uti-wrap uti-identity">
        <div className="uti-identity-text">
          <span className="uti-eyebrow kf-rise">Identiteten</span>
          <h2 className="kf-rise">Gå ut av rammen</h2>
          <p className="uti-body kf-rise">
            Navnet er et hverdagsord, fordi det å være ute skal føles som en hverdagsting. I-en i logoen brettes ut til en
            sti som peker fremover og bryter ut av bilderammen. Det er hele budskapet i én grafisk gest.
          </p>
        </div>
        <div className="uti-breakout kf-rise">
          <figure>
            <img src={uti.sti.src} width={uti.sti.width} height={uti.sti.height} alt="En sti gjennom skogen" loading="lazy" />
          </figure>
          <img className="uti-breakout-mark" src={uti.symbol.src} width={uti.symbol.width} height={uti.symbol.height} alt="" />
        </div>
        <div className="uti-kit">
          <div className="uti-logo-card kf-rise">
            <img src={uti.logo.src} width={uti.logo.width} height={uti.logo.height} alt="UTI.no-logoen" loading="lazy" />
          </div>
          <div className="uti-palette kf-rise">
            <div className="uti-swatch" style={{ background: '#2F5F3F', color: '#FDF6F0' }}>
              <span>Skoggrønn</span>
              <code>#2F5F3F</code>
            </div>
            <div className="uti-swatch uti-swatch--light">
              <span>Lys sand</span>
              <code>#FDF6F0</code>
            </div>
          </div>
          <div className="uti-type kf-rise">
            <div className="uti-type-big">Aa</div>
            <div>
              <div className="uti-type-name">Inter Tight</div>
              <div className="uti-type-sample">Hva med en tur uti marka?</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Kampanjen */}
      <section className="uti-section uti-wrap">
        <span className="uti-eyebrow kf-rise">Kampanjen</span>
        <h2 className="kf-rise">Et spørsmål, ikke en pekefinger</h2>
        <div className="uti-gallery">
          {uti.campaign.map((c) => (
            <img key={c.src} className="kf-rise" src={c.src} width={c.width} height={c.height} alt={c.alt} loading="lazy" />
          ))}
        </div>
        <p className="uti-body uti-body--narrow kf-rise">
          Hver post stiller et spørsmål og peker på et konkret sted. Når brukerne tipser om egne turer, vokser plattformen
          med dem.
        </p>
      </section>

      {/* 6. Målet */}
      <section className="uti-goal uti-wrap">
        <span className="uti-eyebrow kf-rise">Målet</span>
        <p className="uti-goal-big kf-rise">Vi måler suksess i turer, ikke i klikk.</p>
        <p className="uti-goal-sub kf-rise">
          Hvis noen leser ‘Hva med en tur ut til Ingierstrand?’ og faktisk drar dit, har UTI.no gjort jobben sin.
        </p>
      </section>

      {/* 7. Avslutning */}
      <nav className="uti-end uti-wrap" aria-label="Flere prosjekter">
        <a href={homeHref('#arbeid')} className="uti-end-link">
          <span className="uti-eyebrow">Tilbake</span>
          <span className="uti-end-title">← Alle prosjekter</span>
        </a>
        <Link to="/prosjekter/cloud-con" className="uti-end-link uti-end-link--next">
          <span className="uti-eyebrow">Neste case</span>
          <span className="uti-end-title">Cloud Con 26 →</span>
        </Link>
      </nav>
    </main>
  );
}
