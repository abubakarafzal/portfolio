import {useEffect} from "react";

/**
 * Scroll-triggered reveal.
 *
 * One IntersectionObserver drives every `[data-reveal]` element on the page —
 * cheaper than an observer per component.
 *
 * Correctness matters more than the animation here: content must never be left
 * permanently invisible. Three things guarantee that.
 *
 *   1. The `js-reveal` class is only added once we know IntersectionObserver
 *      exists and motion is wanted, so no-JS visitors and reduced-motion users
 *      always get the fully painted page.
 *   2. An element that has scrolled *past* the viewport counts as revealed.
 *      Fast or programmatic scrolling coalesces observer callbacks, so an
 *      element can go from "below the fold" to "above the fold" without ever
 *      being reported as intersecting.
 *   3. A throttled sweep re-checks anything still pending on scroll, resize,
 *      and hash changes — the case where someone deep-links to #contact or
 *      the browser restores a saved scroll position.
 */
export default function useReveal() {
  useEffect(() => {
    const root = document.documentElement;

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return undefined;
    }

    root.classList.add("js-reveal");

    let pending = [];

    const reveal = el => {
      el.classList.add("is-visible");
      observer.unobserve(el);
    };

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          // `top < 0` means it is already above the viewport — reveal it too.
          if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
            reveal(entry.target);
          }
        });
      },
      {rootMargin: "0px 0px -12% 0px", threshold: 0.08}
    );

    const observed = new WeakSet();

    const scan = () => {
      pending = [];
      document.querySelectorAll("[data-reveal]").forEach(el => {
        if (!el.classList.contains("is-visible")) pending.push(el);
        if (observed.has(el)) return;
        observed.add(el);
        observer.observe(el);
      });
    };

    // Safety sweep: anything already at or above `line` is revealed outright,
    // regardless of whether an observer callback ever arrived.
    //
    // While scrolling the line sits at 92% of the viewport, which keeps the
    // staggered entrance intact. On arrival — first paint, a deep link, a
    // restored scroll position — it moves to the full viewport height, because
    // content that is already on screen must never be blank.
    const sweep = (line = window.innerHeight * 0.92) => {
      if (!pending.length) return;
      const next = [];
      pending.forEach(el => {
        if (el.classList.contains("is-visible")) return;
        if (el.getBoundingClientRect().top < line) reveal(el);
        else next.push(el);
      });
      pending = next;
    };

    const settle = () => sweep(window.innerHeight);

    let throttled = false;
    let restTimer = null;

    const onScroll = () => {
      // Trailing settle: once scrolling has stopped, everything on screen is
      // revealed. Without this, a smooth-scrolled anchor jump can come to rest
      // with its last element still blank in the bottom eighth of the screen.
      clearTimeout(restTimer);
      restTimer = setTimeout(settle, 220);

      if (throttled) return;
      throttled = true;
      setTimeout(() => {
        throttled = false;
        sweep();
      }, 150);
    };

    const onHashChange = () => {
      // Give the browser a moment to finish the jump before measuring.
      clearTimeout(restTimer);
      restTimer = setTimeout(settle, 400);
    };

    scan();
    settle();

    // Layout can shift a frame or two after mount (fonts, images), and an
    // anchored load lands after that, so settle again once things are stable.
    const raf = requestAnimationFrame(() => {
      scan();
      settle();
    });
    const timer = setTimeout(() => {
      scan();
      settle();
    }, 400);

    window.addEventListener("scroll", onScroll, {passive: true});
    window.addEventListener("resize", onScroll, {passive: true});
    window.addEventListener("hashchange", onHashChange);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
      clearTimeout(restTimer);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("hashchange", onHashChange);
      observer.disconnect();
      root.classList.remove("js-reveal");
    };
  }, []);
}
