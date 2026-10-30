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

// In collage reading order (the lightbox follows it). col/mt place each photo
// in the project-page collage: a 12-column grid, rows run top to bottom.
export const cloudcon = [
  { src: cloudcon4, width: 1066, height: 1600, col: '1 / 6', mt: '0px' },
  { src: cloudcon5, width: 1600, height: 1067, col: '7 / 13', mt: '140px' },
  { src: cloudcon1, width: 1066, height: 1600, col: '2 / 6', mt: '60px' },
  { src: cloudcon2, width: 1600, height: 1067, col: '7 / 13', mt: '-150px' },
  { src: cloudcon6, width: 1600, height: 1066, col: '1 / 8', mt: '40px' },
  { src: cloudcon3, width: 1066, height: 1600, col: '9 / 12', mt: '90px' },
  { src: cloudcon7, width: 1066, height: 1600, col: '4 / 9', mt: '40px' },
];
