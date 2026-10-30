import { useEffect } from 'react';
import glassMap from '../assets/glass-map.png';

// SVG lens used by the liquid-glass buttons. Only Chromium can apply an SVG
// filter as a backdrop-filter, so the refraction is switched on there alone;
// other browsers keep the plain frosted glass.
export default function GlassFilter() {
  useEffect(() => {
    const brands = navigator.userAgentData?.brands?.map((b) => b.brand) ?? [];
    const chromium = brands.includes('Chromium') || /Chrome\/\d/.test(navigator.userAgent);
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (chromium && !calm) document.documentElement.classList.add('lg-refract');
  }, []);

  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
      <filter
        id="lg-lens"
        x="0"
        y="0"
        width="1"
        height="1"
        primitiveUnits="objectBoundingBox"
        colorInterpolationFilters="sRGB"
      >
        <feImage href={glassMap} x="0" y="0" width="1" height="1" preserveAspectRatio="none" result="map" />
        <feDisplacementMap in="SourceGraphic" in2="map" scale="0.12" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </svg>
  );
}
