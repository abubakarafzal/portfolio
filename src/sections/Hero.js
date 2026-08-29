import React, {useEffect, useState} from "react";
import {hero, meta} from "../content/site";
import ArrowLink from "../ui/ArrowLink";
import "./Hero.css";

const ROTATE_MS = 2600;

/**
 * Cycles the supporting phrase under the headline. Static for reduced-motion
 * users — the first phrase simply stays put.
 */
function useRotatingPhrase(phrases) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }
    const id = setInterval(
      () => setIndex(value => (value + 1) % phrases.length),
      ROTATE_MS
    );
    return () => clearInterval(id);
  }, [phrases.length]);

  return phrases[index];
}

export default function Hero() {
  const phrase = useRotatingPhrase(hero.rotating);

  return (
    <section className="hero" id="home" aria-label="Introduction">
      <div className="hero__grid" aria-hidden="true" />

      <div className="shell hero__inner">
        <p className="hero__eyebrow label" style={{"--i": 0}}>
          <span className="hero__pulse" aria-hidden="true" />
          {hero.eyebrow}
        </p>

        <h1 className="hero__headline display">
          <span className="sr-only">
            {meta.name} — {meta.role}
          </span>
          {hero.headline.map((line, i) => (
            <span className="hero__line" key={line} aria-hidden="true">
              <span className="hero__line-in" style={{"--i": i}}>
                {line}
              </span>
            </span>
          ))}
        </h1>

        <div className="hero__meta">
          <div className="hero__rotator" style={{"--i": 4}}>
            <span className="label hero__rotator-key">Currently</span>
            {/* Announce phrase changes politely rather than on every tick. */}
            <span className="hero__rotator-value" key={phrase} aria-live="off">
              {phrase}
            </span>
          </div>

          <p className="hero__disciplines label" style={{"--i": 5}}>
            {hero.disciplines}
          </p>
        </div>

        <p className="hero__statement lead" style={{"--i": 6}}>
          {hero.statement}
        </p>

        <div className="hero__actions" style={{"--i": 7}}>
          {hero.ctas.map(cta => (
            <ArrowLink key={cta.href} href={cta.href} variant={cta.variant}>
              {cta.label}
            </ArrowLink>
          ))}
        </div>
      </div>

      <a
        className="hero__scroll"
        href="#work"
        aria-label="Scroll to selected work"
      >
        <span className="label">Scroll</span>
        <span className="hero__scroll-line" aria-hidden="true" />
      </a>
    </section>
  );
}
