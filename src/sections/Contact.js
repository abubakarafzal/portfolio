import React from "react";
import {contact, links} from "../content/site";
import ArrowLink from "../ui/ArrowLink";
import Reveal from "../ui/Reveal";
import "./Contact.css";

export default function Contact() {
  return (
    <section
      className="section contact"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="shell contact__inner">
        <Reveal className="contact__meta">
          <span className="label">
            <span className="contact__pulse" aria-hidden="true" />
            Open to opportunities
          </span>
        </Reveal>

        <Reveal
          as="h2"
          id="contact-title"
          className="display contact__title"
          delay={60}
        >
          {contact.headline.map((line, i) => (
            <span className="contact__line" key={line}>
              <span className="contact__line-in" style={{"--i": i}}>
                {line}
              </span>
            </span>
          ))}
        </Reveal>

        <Reveal as="p" className="lead contact__intro" delay={120}>
          {contact.intro}
        </Reveal>

        <Reveal className="contact__cta" delay={160}>
          <ArrowLink href={`mailto:${links.email}`} variant="primary">
            Start a conversation
          </ArrowLink>
        </Reveal>

        <Reveal as="ul" className="contact__channels" delay={200}>
          {contact.channels.map(channel => (
            <li className="channel" key={channel.label}>
              <a
                className="channel__link"
                href={channel.href}
                {...(channel.href.startsWith("mailto:")
                  ? {}
                  : {target: "_blank", rel: "noreferrer noopener"})}
              >
                <span className="label channel__label">{channel.label}</span>
                <span className="channel__value">{channel.value}</span>
                <span className="channel__arrow" aria-hidden="true">
                  <svg
                    viewBox="0 0 16 16"
                    width="14"
                    height="14"
                    focusable="false"
                  >
                    <path
                      d="M4 12L12 4M12 4H5.5M12 4v6.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="square"
                    />
                  </svg>
                </span>
              </a>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
