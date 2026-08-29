import React from "react";
import {capabilities} from "../content/site";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import "./Capabilities.css";

export default function Capabilities() {
  return (
    <section
      className="section caps"
      id="capabilities"
      aria-labelledby="caps-title"
    >
      <div className="shell">
        <SectionHeading
          id="caps-title"
          index="05"
          eyebrow="Capabilities"
          title="What I engineer"
        />

        <ul className="caps__grid">
          {capabilities.map((item, i) => (
            <Reveal as="li" className="cap" key={item} delay={(i % 4) * 60}>
              <span className="label cap__index">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="cap__name">{item}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
