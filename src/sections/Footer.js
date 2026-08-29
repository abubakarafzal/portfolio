import React from "react";
import {links, meta} from "../content/site";
import "./Footer.css";

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__inner">
        <div className="footer__identity">
          <p className="footer__name">{meta.name}</p>
          <p className="footer__role label">{meta.roleShort}</p>
          <p className="footer__disciplines label">
            Test Automation • AI Testing • Quality Engineering
          </p>
        </div>

        <nav className="footer__links" aria-label="Footer">
          <a href={links.github} target="_blank" rel="noreferrer noopener">
            GitHub
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer noopener">
            LinkedIn
          </a>
          <a href={`mailto:${links.email}`}>Email</a>
          <a href={links.resume} target="_blank" rel="noreferrer noopener">
            Résumé
          </a>
        </nav>

        <div className="footer__end">
          <p className="label footer__copy">
            © {YEAR} {meta.name}
          </p>
          <a className="label footer__top" href="#home">
            Back to top
            <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
