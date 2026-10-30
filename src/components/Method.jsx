import { useEffect, useRef, useState } from 'react';
import { steps } from '../content';

// Scroll-told method: each step lights up as it reaches the middle of the
// screen, a large numeral follows along, and the line fills with progress.
export default function Method() {
  const listRef = useRef(null);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return undefined;
    const items = [...list.querySelectorAll('.method-step')];
    let raf = 0;
    const update = () => {
      raf = 0;
      const mid = window.innerHeight * 0.5;
      const first = items[0];
      const last = items[items.length - 1];
      const startOff = first.offsetTop + first.offsetHeight / 2;
      const endOff = last.offsetTop + last.offsetHeight / 2;
      list.style.setProperty('--track-top', `${startOff}px`);
      list.style.setProperty('--track-bottom', `${list.offsetHeight - endOff}px`);
      const top = list.getBoundingClientRect().top;
      setProgress(Math.min(1, Math.max(0, (mid - top - startOff) / (endOff - startOff))));
      let idx = 0;
      items.forEach((el, i) => {
        if (el.getBoundingClientRect().top < mid) idx = i;
      });
      setActive(idx);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="method">
      <div className="method-aside">
        <div className="kf-rise">
          <span className="eyebrow eyebrow--light">METODE</span>
          <h2 className="section-title method-heading">Hvordan jeg arbeider</h2>
        </div>
        <div className="method-counter" aria-hidden="true">
          <span key={active} className="method-counter-n">{steps[active].num}</span>
          <span className="method-counter-total">/ {String(steps.length).padStart(2, '0')}</span>
        </div>
        <div className="method-bar" aria-hidden="true">
          <span style={{ transform: `scaleX(${progress})` }} />
        </div>
      </div>

      <ol className="method-list" ref={listRef}>
        <span className="method-track" aria-hidden="true">
          <span style={{ transform: `scaleY(${progress})` }} />
        </span>
        {steps.map((st, i) => (
          <li
            key={st.num}
            className={`method-step${i === active ? ' is-active' : ''}${i < active ? ' is-done' : ''}`}
          >
            <span className="method-dot" aria-hidden="true" />
            <span className="method-num">{st.num}</span>
            <h3 className="method-title">{st.title}</h3>
            <p className="method-desc">{st.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
