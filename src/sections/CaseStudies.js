import React, {useState} from "react";
import {caseStudies, work} from "../content/site";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import "./CaseStudies.css";

const byId = new Map(work.map(project => [project.id, project]));

export default function CaseStudies() {
  // Accordion: one open at a time, first open by default.
  const [openIndex, setOpenIndex] = useState(caseStudies[0].index);

  return (
    <section
      className="section studies"
      id="case-studies"
      aria-labelledby="studies-title"
    >
      <div className="shell">
        <SectionHeading
          id="studies-title"
          index="02"
          eyebrow="Practice areas"
          title="How the work breaks down"
          lead="Five disciplines that recur across every engagement, and the platforms where each was applied."
        />

        <ul className="studies__list">
          {caseStudies.map((study, i) => {
            const open = openIndex === study.index;
            const panelId = `study-panel-${study.index}`;
            const headerId = `study-header-${study.index}`;

            return (
              <Reveal
                as="li"
                className="study"
                key={study.index}
                delay={i * 70}
              >
                <h3 className="study__heading">
                  <button
                    id={headerId}
                    type="button"
                    className={`study__trigger ${open ? "is-open" : ""}`}
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(open ? null : study.index)}
                  >
                    <span className="label study__index">{study.index}</span>
                    <span className="study__title">{study.title}</span>
                    <span className="study__icon" aria-hidden="true">
                      <span />
                      <span />
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={headerId}
                  className={`study__panel ${open ? "is-open" : ""}`}
                  hidden={!open}
                >
                  <div className="study__panel-inner">
                    <p className="study__summary">{study.summary}</p>

                    <div className="study__evidence">
                      <span className="label">Applied at</span>
                      <ul>
                        {study.evidence
                          .map(id => byId.get(id))
                          .filter(Boolean)
                          .map(project => (
                            <li className="chip" key={project.id}>
                              {project.name}
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
