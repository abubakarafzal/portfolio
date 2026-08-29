import React from "react";
import {toolkit} from "../content/site";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import "./Toolkit.css";

export default function Toolkit() {
  return (
    <section className="section kit" id="toolkit" aria-labelledby="kit-title">
      <div className="shell">
        <SectionHeading
          id="kit-title"
          index="06"
          eyebrow="Engineering toolkit"
          title="The stack behind the work"
          lead="Grouped by what it does, not by how it looks on a keyword filter."
        />

        <div className="kit__groups">
          {toolkit.map((group, i) => (
            <Reveal className="kit__group" key={group.group} delay={i * 60}>
              <div className="kit__group-head">
                <span className="label kit__index">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="h4 kit__group-name">{group.group}</h3>
              </div>

              <ul className="kit__items">
                {group.items.map(item => (
                  <li className="kit__item" key={item}>
                    <span className="kit__bullet" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
