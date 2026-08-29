import {useEffect, useState} from "react";

/**
 * Reports how far down the page we are (0 → 1) and whether the viewport has
 * left the top of the document. Both values drive the nav and progress bar.
 *
 * Reads are batched into a single rAF so a fast scroll never triggers more
 * than one layout read per frame.
 */
export default function useScrollState() {
  const [state, setState] = useState({progress: 0, scrolled: false});

  useEffect(() => {
    let frame = null;

    const measure = () => {
      frame = null;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(scrollTop / max, 1) : 0;

      setState(prev => {
        const scrolled = scrollTop > 24;
        if (
          prev.scrolled === scrolled &&
          Math.abs(prev.progress - progress) < 0.002
        ) {
          return prev;
        }
        return {progress, scrolled};
      });
    };

    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, {passive: true});
    window.addEventListener("resize", onScroll, {passive: true});

    return () => {
      if (frame !== null) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return state;
}
