import React from "react";
import {philosophy} from "../content/site";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import "./Philosophy.css";

export default function Philosophy() {
  return (
    <section
      className="section philosophy"
      id="philosophy"
      aria-labelledby="philosophy-title"
    >
      <div className="shell">
        <SectionHeading
          id="philosophy-title"
          index="08"
          eyebrow="Engineering philosophy"
          title={philosophy.title}
          lead={philosophy.intro}
        />

        <ol className="flow">
          {philosophy.steps.map((step, i) => (
            <Reveal
              as="li"
              className="flow__step"
              key={step.name}
              delay={i * 70}
            >
              <div className="flow__head">
                <span className="label flow__index">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="flow__name">{step.name}</h3>
              </div>
              <p className="flow__note">{step.note}</p>
              <span className="flow__connector" aria-hidden="true" />
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
