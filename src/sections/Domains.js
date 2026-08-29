import React from "react";
import {domains} from "../content/site";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import "./Domains.css";

export default function Domains() {
  return (
    <section
      className="section domains"
      id="domains"
      aria-labelledby="domains-title"
    >
      <div className="shell">
        <SectionHeading
          id="domains-title"
          index="07"
          eyebrow="Domain experience"
          title="Regulated programs, real consequences"
          lead="Public-sector health and human services platforms, where a defect is not an inconvenience — it is somebody's benefits."
        />

        <ul className="domains__list">
          {domains.map((domain, i) => (
            <Reveal
              as="li"
              className="domain"
              key={domain.abbr}
              delay={(i % 4) * 70}
            >
              <span className="domain__abbr">{domain.abbr}</span>
              <span className="domain__full">{domain.full}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
