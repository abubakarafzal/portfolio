import React from "react";
import {about, meta} from "../content/site";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import "./About.css";

export default function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="shell about__inner">
        <div className="about__main">
          <SectionHeading
            id="about-title"
            index="09"
            eyebrow="About"
            title="I engineer quality into software"
          />

          <div className="about__prose">
            {about.paragraphs.map((paragraph, i) => (
              <Reveal
                as="p"
                key={paragraph.slice(0, 24)}
                delay={i * 70}
                className={
                  i === about.paragraphs.length - 1
                    ? "about__kicker"
                    : undefined
                }
              >
                {paragraph}
              </Reveal>
            ))}
          </div>
        </div>

        <aside
          className="about__side"
          aria-label="Education and certifications"
        >
          <Reveal className="about__block">
            <h3 className="label about__block-title">Education</h3>
            <ul className="about__facts">
              {about.education.map(item => (
                <li className="fact" key={item.school}>
                  <span className="fact__primary">{item.qualification}</span>
                  <span className="fact__secondary">{item.school}</span>
                  {item.date && (
                    <span className="fact__date label">{item.date}</span>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="about__block" delay={90}>
            <h3 className="label about__block-title">Certifications</h3>
            <ul className="about__facts">
              {about.certifications.map(item => (
                <li className="fact" key={item.name}>
                  <span className="fact__primary">{item.name}</span>
                  {item.issuer && (
                    <span className="fact__secondary">{item.issuer}</span>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="about__block" delay={140}>
            <h3 className="label about__block-title">Based in</h3>
            <ul className="about__facts">
              <li className="fact">
                <span className="fact__primary">{meta.location}</span>
              </li>
            </ul>
          </Reveal>
        </aside>
      </div>
    </section>
  );
}
