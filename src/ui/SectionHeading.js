import React from "react";
import Reveal from "./Reveal";
import "./SectionHeading.css";

/**
 * The one heading block every section uses: index chip, eyebrow label,
 * display title, optional lead paragraph.
 */
export default function SectionHeading({
  index,
  eyebrow,
  title,
  lead,
  align = "start",
  id
}) {
  return (
    <header className={`sec-head sec-head--${align}`}>
      {(index || eyebrow) && (
        <Reveal className="sec-head__meta">
          {index && <span className="label sec-head__index">{index}</span>}
          {eyebrow && (
            <span className="label sec-head__eyebrow">{eyebrow}</span>
          )}
        </Reveal>
      )}

      <Reveal as="h2" id={id} className="h2 sec-head__title balance" delay={60}>
        {title}
      </Reveal>

      {lead && (
        <Reveal as="p" className="lead sec-head__lead" delay={120}>
          {lead}
        </Reveal>
      )}
    </header>
  );
}
