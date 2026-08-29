import React from "react";
import {metrics} from "../content/site";
import Counter from "../ui/Counter";
import Reveal from "../ui/Reveal";
import "./Metrics.css";

export default function Metrics() {
  return (
    <section
      className="section section--flush metrics"
      aria-label="At a glance"
    >
      <div className="shell">
        <ul className="metrics__grid">
          {metrics.map((metric, i) => (
            <Reveal
              as="li"
              className="metric"
              key={metric.label}
              delay={i * 90}
            >
              <span className="metric__value">
                {metric.value === null ? (
                  metric.display
                ) : (
                  <Counter value={metric.value} suffix={metric.suffix} />
                )}
              </span>
              <span className="metric__label label">{metric.label}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
