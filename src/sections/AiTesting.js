import React from "react";
import {aiTesting} from "../content/site";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import "./AiTesting.css";

export default function AiTesting() {
  return (
    <section className="section ai" id="ai-testing" aria-labelledby="ai-title">
      <div className="shell">
        <SectionHeading
          id="ai-title"
          index="03"
          eyebrow="AI quality engineering"
          title={aiTesting.title}
          lead={aiTesting.subtitle}
        />

        <Reveal as="p" className="ai__intro lead">
          {aiTesting.intro}
        </Reveal>

        {/* Pipeline and coverage sit side by side on wide screens so the
            card is not left with a large empty right-hand margin. */}
        <div className="ai__system">
          <Reveal className="ai__pipeline" delay={80}>
            <div className="ai__pipeline-head">
              <span className="label">Evaluation pipeline</span>
              <span className="label ai__pipeline-tag">RAG · LLM</span>
            </div>

            <ol className="pipeline">
              {aiTesting.pipeline.map((node, i) => (
                <li
                  className={`pipeline__node ${
                    i === aiTesting.pipeline.length - 1 ? "is-gate" : ""
                  }`}
                  key={node.step}
                  style={{"--i": i}}
                >
                  <div className="pipeline__marker" aria-hidden="true">
                    <span className="pipeline__dot" />
                    <span className="pipeline__line" />
                  </div>

                  <div className="pipeline__body">
                    <span className="label pipeline__step-index">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="h4 pipeline__step">{node.step}</h3>
                    <p className="pipeline__note">{node.note}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal className="ai__capabilities" delay={120}>
            <span className="label ai__caps-label">Evaluation coverage</span>
            <ul className="ai__caps-list">
              {aiTesting.capabilities.map((item, i) => (
                <li className="ai__cap" key={item} style={{"--i": i}}>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* --- AI-assisted engineering -------------------------------------- */}
        <div className="ai__assisted">
          <Reveal className="ai__assisted-head">
            <h3 className="h2 ai__assisted-title balance">
              {aiTesting.assisted.title}
            </h3>
            <p className="lead">{aiTesting.assisted.intro}</p>
          </Reveal>

          <ul className="ai__assisted-grid">
            {aiTesting.assisted.items.map((item, i) => (
              <Reveal
                as="li"
                className="assist"
                key={item.name}
                delay={(i % 3) * 80}
              >
                <span className="assist__rule" aria-hidden="true" />
                <h4 className="h4 assist__name">{item.name}</h4>
                <p className="assist__note">{item.note}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
