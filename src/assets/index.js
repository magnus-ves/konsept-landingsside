export { default as logoFull } from './konsept-logo-full.svg';
export { default as heroOslo } from './hero-oslo.jpg';
export { default as konseptMark } from './konsept-mark.svg';
export { default as magnusPortrait } from './magnus-portrait.jpg';

import cloudcon1 from './cloudcon/cloudcon-1.jpg';
import cloudcon2 from './cloudcon/cloudcon-2.jpg';
import cloudcon3 from './cloudcon/cloudcon-3.jpg';
import cloudcon4 from './cloudcon/cloudcon-4.jpg';
import cloudcon5 from './cloudcon/cloudcon-5.jpg';
import cloudcon6 from './cloudcon/cloudcon-6.jpg';
import cloudcon7 from './cloudcon/cloudcon-7.jpg';
import cloudcon8 from './cloudcon/cloudcon-8.jpg';
import cloudcon9 from './cloudcon/cloudcon-9.jpg';
import cloudcon10 from './cloudcon/cloudcon-10.jpg';

// In collage reading order (the lightbox follows it). col/mt place each photo
// in the project-page collage: a 12-column grid, rows run top to bottom.
export const cloudcon = [
  { src: cloudcon4, width: 1066, height: 1600, col: '1 / 6', mt: '0px' },
  { src: cloudcon5, width: 1600, height: 1067, col: '7 / 13', mt: '140px' },
  { src: cloudcon1, width: 1066, height: 1600, col: '2 / 6', mt: '60px', half: true },
  { src: cloudcon2, width: 1600, height: 1067, col: '7 / 13', mt: '-150px' },
  { src: cloudcon6, width: 1600, height: 1066, col: '1 / 8', mt: '40px' },
  { src: cloudcon3, width: 1066, height: 1600, col: '9 / 12', mt: '90px', half: true },
  { src: cloudcon8, width: 1066, height: 1600, col: '1 / 5', mt: '40px', half: true },
  { src: cloudcon7, width: 1066, height: 1600, col: '6 / 10', mt: '140px', half: true },
  { src: cloudcon9, width: 1072, height: 1600, col: '2 / 6', mt: '20px', half: true },
  { src: cloudcon10, width: 1070, height: 1600, col: '8 / 12', mt: '120px', half: true },
];

import gm1 from './generasjonm/gm-1.jpg';
import gm2 from './generasjonm/gm-2.jpg';
import gm3 from './generasjonm/gm-3.jpg';
import gm4 from './generasjonm/gm-4.jpg';
import gm5 from './generasjonm/gm-5.jpg';
import gm6 from './generasjonm/gm-6.jpg';
import gm7 from './generasjonm/gm-7.jpg';
import gm8 from './generasjonm/gm-8.jpg';
import gm9 from './generasjonm/gm-9.jpg';
import gm10 from './generasjonm/gm-10.jpg';

// Generasjon M, in collage reading order. `half` = pairs side by side on mobile.
export const generasjonM = [
  { src: gm1, width: 1600, height: 1066, col: '1 / 8', mt: '0px' },
  { src: gm2, width: 1066, height: 1600, col: '9 / 13', mt: '60px', half: true },
  { src: gm3, width: 1066, height: 1600, col: '2 / 6', mt: '20px', half: true },
  { src: gm4, width: 1600, height: 1066, col: '7 / 13', mt: '130px' },
  { src: gm5, width: 1067, height: 1600, col: '1 / 5', mt: '0px', half: true },
  { src: gm6, width: 1600, height: 1064, col: '6 / 13', mt: '80px' },
  { src: gm7, width: 1066, height: 1600, col: '4 / 8', mt: '20px', half: true },
  { src: gm8, width: 1600, height: 1280, col: '8 / 13', mt: '100px' },
  { src: gm9, width: 1066, height: 1600, col: '2 / 6', mt: '40px', half: true },
  { src: gm10, width: 1066, height: 1600, col: '8 / 12', mt: '120px', half: true },
];

import agaia1 from './agaia/agaia-1.jpg';
import agaia2 from './agaia/agaia-2.jpg';
import agaia3 from './agaia/agaia-3.jpg';

// Agaia, in collage reading order.
export const agaia = [
  { src: agaia1, width: 899, height: 1600, col: '1 / 5', mt: '0px', half: true },
  { src: agaia2, width: 1600, height: 899, col: '6 / 13', mt: '160px' },
  { src: agaia3, width: 899, height: 1600, col: '8 / 12', mt: '-100px', half: true },
];

import utiHeroImg from './uti/uti-hero.jpg';
import utiMarka from './uti/uti-marka.jpg';
import utiIngierstrand from './uti/uti-ingierstrand.jpg';
import utiInput from './uti/uti-input.jpg';
import utiSti from './uti/uti-sti.jpg';
import utiLogo from './uti/uti-logo.svg';
import utiSymbol from './uti/uti-symbol.svg';

// UTI.no case. Campaign posts are full squares that already carry their own
// frame and logo, so they sit straight on the page background.
export const uti = {
  hero: { src: utiHeroImg, width: 1600, height: 1064 },
  sti: { src: utiSti, width: 1200, height: 943 },
  logo: { src: utiLogo, width: 1043, height: 457 },
  symbol: { src: utiSymbol, width: 196, height: 288 },
  campaign: [
    { src: utiMarka, width: 1400, height: 1400, alt: 'Kampanjepost: «Hva med en tur uti marka?» over en sti i skogen' },
    { src: utiIngierstrand, width: 1400, height: 1400, alt: 'Kampanjepost: «Hva med en tur ut til Ingierstrand?»' },
    { src: utiInput, width: 1400, height: 1400, alt: 'Kampanjepost: «Din input på hvor du skal på tur» over en strand' },
  ],
};
