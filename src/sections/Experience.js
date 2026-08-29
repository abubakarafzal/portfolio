import React from "react";
import {experience} from "../content/site";
import logoUrl from "../content/assets";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import "./Experience.css";

export default function Experience() {
  return (
    <section
      className="section exp"
      id="experience"
      aria-labelledby="exp-title"
    >
      <div className="shell">
        <SectionHeading
          id="exp-title"
          index="04"
          eyebrow="Experience"
          title="Nine years engineering quality"
          lead="Consultancy, product, and cloud infrastructure teams — building the automation that delivery depends on."
        />

        <ol className="exp__list">
          {experience.map((role, i) => (
            <Reveal
              as="li"
              className={`exp__item ${role.current ? "is-current" : ""}`}
              key={`${role.company}-${role.role}`}
              delay={i * 60}
            >
              <div className="exp__rail" aria-hidden="true">
                <span className="exp__dot" />
              </div>

              <div className="exp__body">
                <div className="exp__head">
                  <div className="exp__identity">
                    <h3 className="h3 exp__company">
                      {role.company}
                      {role.current && (
                        <span className="exp__badge label">Current</span>
                      )}
                    </h3>
                    <p className="exp__role">{role.role}</p>
                  </div>

                  <div className="exp__when">
                    <span className="label exp__date">{role.date}</span>
                    {role.location && (
                      <span className="label exp__location">
                        {role.location}
                      </span>
                    )}
                  </div>
                </div>

                <p className="exp__summary">{role.summary}</p>

                {/* Keyed by index: these lists are static and never reorder,
                    and repeated placeholder text would collide on a value key. */}
                <ul className="exp__bullets">
                  {role.bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>

                <ul className="exp__stack" aria-label={`${role.company} stack`}>
                  {role.stack.map((tech, index) => (
                    <li className="chip" key={index}>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              {logoUrl(role.logo) && (
                <img
                  className="exp__logo"
                  src={logoUrl(role.logo)}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                />
              )}
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
