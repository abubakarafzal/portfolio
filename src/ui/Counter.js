import React, {useEffect, useRef, useState} from "react";

/**
 * Counts from 0 to `value` once the element scrolls into view.
 * Falls straight to the final number for reduced-motion users and for
 * browsers without IntersectionObserver, so the figure is never missing.
 */
export default function Counter({value, suffix = "", duration = 1400}) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const node = ref.current;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!node || reduced || !("IntersectionObserver" in window)) {
      setDisplay(value);
      return undefined;
    }

    let frame;
    let start;

    const run = () => {
      const step = now => {
        if (start === undefined) start = now;
        const t = Math.min((now - start) / duration, 1);
        // easeOutExpo — fast out of the gate, settles precisely on the value.
        const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
        setDisplay(Math.round(eased * value));
        if (t < 1) frame = requestAnimationFrame(step);
      };
      frame = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          run();
          observer.disconnect();
        }
      },
      {threshold: 0.4}
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
