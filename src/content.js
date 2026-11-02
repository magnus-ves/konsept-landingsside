import { agaia, cloudcon, generasjonM } from './assets';

export const marquee = [
  'FOTOGRAFI', 'MERKEVARE', 'MARKEDSFØRING', 'SOSIALE MEDIER', 'INNHOLD',
];

export const services = [
  {
    num: '01',
    slug: 'fotografi',
    title: 'Fotografi',
    desc: 'Bilder som fanger essensen av merkevaren din.',
    intro:
      'Bilder som viser hvem dere er, på scenen, på kontoret og der det skjer. Jeg fotograferer arrangementer, portretter og innhold dere kan bruke i alle kanaler.',
    includes: [
      { t: 'Arrangement og konferanse', d: 'Foredragsholdere, publikum og stemningen på stedet.' },
      { t: 'Portretter og profilbilder', d: 'Til nettside, presse, LinkedIn og ledergrupper.' },
      { t: 'Bedrifts- og produktbilder', d: 'Folk, lokaler og det dere lager.' },
      { t: 'Klare til bruk', d: 'Ferdig redigerte bilder i formatene dere trenger.' },
    ],
    refs: ['cloud-con', 'agaia'],
  },
  {
    num: '02',
    slug: 'markedsforing',
    title: 'Markedsføring',
    desc: 'Målrettede kampanjer som skaper resultater.',
    intro:
      'Kampanjer med et tydelig mål og et budskap folk legger merke til. Jeg hjelper dere å nå de riktige menneskene, i de riktige kanalene.',
    includes: [
      { t: 'Kampanjeidé og budskap', d: 'Ett tydelig poeng som er lett å huske.' },
      { t: 'Annonser for digitale kanaler', d: 'Tilpasset Meta, LinkedIn og Google.' },
      { t: 'Visuelt materiell', d: 'Foto, video og grafikk laget for kampanjen.' },
      { t: 'Oppfølging', d: 'Vi ser på hva som virker og justerer underveis.' },
    ],
    refs: [],
  },
  {
    num: '03',
    slug: 'merkevarebygging',
    title: 'Merkevarebygging',
    desc: 'En tydelig identitet fra grunnen opp.',
    intro:
      'En identitet som er lett å kjenne igjen og lett å bruke. Fra konsept og navn til logo, farger og typografi.',
    includes: [
      { t: 'Konsept og posisjon', d: 'Hva dere står for, og hvorfor det betyr noe.' },
      { t: 'Logo og visuell identitet', d: 'Et uttrykk som fungerer stort og smått.' },
      { t: 'Farger, typografi og bildestil', d: 'Et helhetlig system, ikke enkeltdeler.' },
      { t: 'Retningslinjer', d: 'Enkle regler så alle bruker merkevaren riktig.' },
    ],
    refs: [],
  },
  {
    num: '04',
    slug: 'sosiale-medier',
    title: 'Sosiale medier',
    desc: 'Innhold som bygger relevans og fellesskap.',
    intro:
      'Innhold som passer formatet og folkene som følger dere. Poster, reels og stories som bygger relevans over tid.',
    includes: [
      { t: 'Innholdsplan', d: 'Hva dere skal si, hvor og når.' },
      { t: 'Foto og video per plattform', d: 'Laget for feeden, ikke klippet til etterpå.' },
      { t: 'Tekst og grafikk', d: 'Korte, tydelige budskap med egen stemme.' },
      { t: 'Gjenkjennelig stil', d: 'Et uttrykk som gjør at folk ser at det er dere.' },
    ],
    refs: ['generasjon-m'],
  },
  {
    num: '05',
    slug: 'innholdsproduksjon',
    title: 'Innholdsproduksjon',
    desc: 'Visuelt og tekstlig innhold med retning.',
    intro:
      'Visuelt og tekstlig innhold med en klar retning, til nettside, sosiale medier, presentasjoner og trykk.',
    includes: [
      { t: 'Foto og video', d: 'Fra planlegging til ferdig klipp.' },
      { t: 'Tekst og grafikk', d: 'Innhold som henger sammen med resten av merkevaren.' },
      { t: 'Til alle flater', d: 'Nettside, kampanjer, presentasjoner og trykk.' },
      { t: 'Riktige formater', d: 'Levert klart til bruk der dere trenger det.' },
    ],
    refs: ['generasjon-m'],
  },
];

export const steps = [
  { num: '01', title: 'Forstå', desc: 'Vi setter oss inn i virksomheten din og målene dine.' },
  { num: '02', title: 'Utvikle', desc: 'Vi former konseptet, retningen og de visuelle virkemidlene.' },
  { num: '03', title: 'Forenkle', desc: 'Vi fjerner det som ikke tjener budskapet.' },
  { num: '04', title: 'Realisere', desc: 'Vi leverer og følger opp resultatene.' },
];

export const projects = [
  {
    id: 'cloud-con',
    slug: 'cloud-con',
    idx: '01',
    title: 'Cloud Con 26',
    tag: 'KONFERANSEFOTO',
    desc: 'Konferansefoto fra Cloud Con 26, arrangert av Cloud Connection 29. oktober — foredragsholdere på scenen, stemningen på stedet og portretter fra dagen.',
    // card trio on the home page: wide, tall, small
    covers: [cloudcon[1], cloudcon[0], cloudcon[7]],
    images: cloudcon,
  },
  {
    id: 'generasjon-m',
    slug: 'generasjon-m',
    idx: '02',
    title: 'Generasjon M',
    tag: 'SOSIALE MEDIER',
    desc: 'Innholdsproduksjon egnet for SOME og andre kommunikasjonskanaler.',
    // card trio on the home page: wide, tall, small
    covers: [generasjonM[0], generasjonM[4], generasjonM[1]],
    images: generasjonM,
  },
  {
    id: 'agaia',
    slug: 'agaia',
    idx: '03',
    title: 'Profilbilde for ny administrerende direktør i Agaia',
    tag: 'PROFILBILDE',
    desc: 'Portretter av Agaias nye administrerende direktør.',
    // home card: wide + tall only
    covers: [agaia[1], agaia[0]],
    images: agaia,
  },
];

export const faqs = [
  { q: 'Hvor lang tid tar et typisk prosjekt?', a: 'De fleste prosjekter tar mellom fire og åtte uker, avhengig av omfang — fra første samtale til ferdig levert konsept.' },
  { q: 'Jobber dere med små bedrifter?', a: 'Ja, vi jobber med virksomheter i alle størrelser, fra enkeltpersonforetak til etablerte selskaper.' },
  { q: 'Kan vi bestille bare fotografi eller bare markedsføring?', a: 'Absolutt. Tjenestene kan bestilles enkeltvis eller kombineres i en helhetlig pakke.' },
  { q: 'Hvordan kommer vi i gang?', a: 'Book en uforpliktende samtale under, og vi finner sammen ut hva som passer best for din virksomhet.' },
];

export const serviceOptions = [
  'Fotografi', 'Markedsføring', 'Merkevarebygging', 'Sosiale medier', 'Innholdsproduksjon', 'Noe annet',
];

export const contact = {
  email: 'hei@konsept-media.no',
  phone: '+47 485 00 059',
  phoneHref: '+4748500059',
  place: 'Oslo, Norge',
};
