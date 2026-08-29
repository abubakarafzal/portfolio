import React from "react";
import "./Marquee.css";

/**
 * Infinite horizontal marquee.
 *
 * The track holds two identical copies of the item list and translates by
 * exactly -50%, so the loop is seamless with no JS and no measurement. The
 * duplicate copy is hidden from assistive tech.
 */
export default function Marquee({items, reverse = false, className = ""}) {
  const row = (ariaHidden = false) => (
    <ul className="marquee__row" aria-hidden={ariaHidden || undefined}>
      {items.map((item, i) => (
        <li className="marquee__item" key={`${item}-${i}`}>
          <span className="marquee__text">{item}</span>
          <span className="marquee__dot" aria-hidden="true" />
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className={`marquee ${reverse ? "marquee--reverse" : ""} ${className}`}
      role="marquee"
      aria-label="Areas of practice"
    >
      <div className="marquee__track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
