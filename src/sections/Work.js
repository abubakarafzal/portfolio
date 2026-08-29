import React from "react";
import {work} from "../content/site";
import logoUrl from "../content/assets";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import "./Work.css";

export default function Work() {
  return (
    <section className="section work" id="work" aria-labelledby="work-title">
      <div className="shell">
        <SectionHeading
          id="work-title"
          index="01"
          eyebrow="Selected work"
          title="Platforms I have engineered quality into"
          lead="Automation architecture, API coverage, and release pipelines across healthcare, fintech, e-commerce, telecom, and cloud infrastructure."
        />

        <ul className="work__list">
          {work.map((project, i) => (
            <Reveal
              as="li"
              className="work__item"
              key={project.id}
              delay={(i % 2) * 90}
            >
              <ProjectCard project={project} index={i + 1} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ProjectCard({project, index}) {
  const src = logoUrl(project.logo);
  const external = Boolean(project.url);

  const Tag = external ? "a" : "article";
  const tagProps = external
    ? {href: project.url, target: "_blank", rel: "noreferrer noopener"}
    : {};

  return (
    <Tag className="card" {...tagProps}>
      <div className="card__visual">
        <span className="card__index label" aria-hidden="true">
          {String(index).padStart(2, "0")}
        </span>

        {src ? (
          <img
            className="card__logo"
            src={src}
            alt={`${project.name} logo`}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <span className="card__wordmark" aria-hidden="true">
            {project.name}
          </span>
        )}

        <span className="card__sheen" aria-hidden="true" />
      </div>

      <div className="card__body">
        <div className="card__top">
          <h3 className="h3 card__name">{project.name}</h3>
          <span className="card__arrow" aria-hidden="true">
            <svg viewBox="0 0 16 16" width="16" height="16" focusable="false">
              <path
                d="M4 12L12 4M12 4H5.5M12 4v6.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="square"
              />
            </svg>
          </span>
        </div>

        <p className="card__category label">{project.category}</p>
        <p className="card__desc">{project.description}</p>

        <dl className="card__meta">
          <dt className="label">Role</dt>
          <dd>{project.role}</dd>
        </dl>

        <ul className="card__stack" aria-label={`${project.name} technology`}>
          {project.stack.map(tech => (
            <li className="chip" key={tech}>
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </Tag>
  );
}
