import {useEffect, useState} from "react";

/**
 * Tracks which section id currently owns the viewport, so the nav can mark the
 * active link. Uses a band across the upper third of the screen rather than a
 * threshold, which behaves correctly for sections taller than the viewport.
 */
export default function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return undefined;

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      {rootMargin: "-20% 0px -70% 0px", threshold: [0, 0.25, 0.5]}
    );

    ids
      .map(id => document.getElementById(id))
      .filter(Boolean)
      .forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [ids]);

  return active;
}
