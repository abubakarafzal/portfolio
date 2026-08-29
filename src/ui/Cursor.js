import React, {useEffect, useRef} from "react";
import usePointerFine from "../hooks/usePointerFine";
import "./Cursor.css";

/**
 * Subtle two-part cursor: a small solid dot that tracks the pointer exactly,
 * and a ring that eases toward it. Purely decorative — the real cursor stays
 * visible for anything interactive so precision is never lost.
 *
 * Skipped entirely on touch devices and when reduced motion is requested.
 * Positions are written straight to the DOM inside a rAF loop; nothing here
 * touches React state, so scrolling and hovering stay at 60fps.
 */
export default function Cursor() {
  const fine = usePointerFine();
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (!fine) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return undefined;

    const target = {x: window.innerWidth / 2, y: window.innerHeight / 2};
    const eased = {...target};
    let frame;
    let visible = false;

    const onMove = event => {
      target.x = event.clientX;
      target.y = event.clientY;
      if (!visible) {
        visible = true;
        document.body.classList.add("has-cursor");
      }
    };

    const onLeave = () => {
      visible = false;
      document.body.classList.remove("has-cursor");
    };

    // Grow the ring over anything clickable.
    const onOver = event => {
      const interactive = event.target.closest(
        "a, button, [role='button'], input, textarea, select, summary"
      );
      ring.classList.toggle("is-active", Boolean(interactive));
    };

    const tick = () => {
      eased.x += (target.x - eased.x) * 0.16;
      eased.y += (target.y - eased.y) * 0.16;
      dot.style.transform = `translate3d(${target.x}px, ${target.y}px, 0)`;
      ring.style.transform = `translate3d(${eased.x}px, ${eased.y}px, 0)`;
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    window.addEventListener("pointermove", onMove, {passive: true});
    window.addEventListener("pointerover", onOver, {passive: true});
    document.addEventListener("pointerleave", onLeave);
    window.addEventListener("blur", onLeave);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("blur", onLeave);
      document.body.classList.remove("has-cursor");
    };
  }, [fine]);

  if (!fine) return null;

  return (
    <div className="cursor" aria-hidden="true">
      <span className="cursor__dot" ref={dotRef} />
      <span className="cursor__ring" ref={ringRef} />
    </div>
  );
}
