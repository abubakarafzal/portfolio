import React from "react";
import {notes} from "../content/site";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import "./Notes.css";

export default function Notes() {
  return (
    <section className="section notes" id="notes" aria-labelledby="notes-title">
      <div className="shell">
        <SectionHeading
          id="notes-title"
          index="10"
          eyebrow="Engineering notes"
          title={notes.title}
          lead={notes.subtitle}
        />

        <ul className="notes__list">
          {notes.items.map((item, i) => (
            <Reveal as="li" className="note" key={item.title} delay={i * 60}>
              <span className="label note__topic">{item.topic}</span>
              <h3 className="h3 note__title">{item.title}</h3>
              <span className="note__status label">{item.status}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
