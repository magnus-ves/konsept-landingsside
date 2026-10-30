import { agaia, cloudcon, generasjonM } from './assets';

export const marquee = [
  'FOTOGRAFI', 'MERKEVARE', 'MARKEDSFØRING', 'SOSIALE MEDIER', 'INNHOLD', 'STRATEGI',
];

export const services = [
  { num: '01', title: 'Fotografi', desc: 'Bilder som fanger essensen av merkevaren din.' },
  { num: '02', title: 'Markedsføring', desc: 'Målrettede kampanjer som skaper resultater.' },
  { num: '03', title: 'Merkevarebygging', desc: 'En tydelig identitet fra grunnen opp.' },
  { num: '04', title: 'Sosiale medier', desc: 'Innhold som bygger relevans og fellesskap.' },
  { num: '05', title: 'Innholdsproduksjon', desc: 'Visuelt og tekstlig innhold med retning.' },
  { num: '06', title: 'Strategi og rådgivning', desc: 'Klarhet før vi skaper.' },
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
    covers: [cloudcon[1], cloudcon[0], cloudcon[6]],
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
    desc: 'Portretter av Agaias nye administrerende direktør, tatt utendørs i mykt kveldslys.',
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
