import React, {useCallback, useEffect, useRef, useState} from "react";
import {meta, nav, links} from "../content/site";
import useActiveSection from "../hooks/useActiveSection";
import "./Nav.css";

const SECTION_IDS = nav.map(item => item.href.replace("#", ""));

export default function Nav({scrolled}) {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);
  const panelRef = useRef(null);
  const toggleRef = useRef(null);

  const close = useCallback(() => setOpen(false), []);

  // Close on resize past the desktop breakpoint, so the scroll lock and focus
  // trap can never outlive the menu that owns them.
  useEffect(() => {
    const query = window.matchMedia("(min-width: 900px)");
    const onChange = event => {
      if (event.matches) close();
    };
    if (query.addEventListener) {
      query.addEventListener("change", onChange);
      return () => query.removeEventListener("change", onChange);
    }
    query.addListener(onChange);
    return () => query.removeListener(onChange);
  }, [close]);

  // Lock the page behind the full-screen menu, and restore focus on close.
  useEffect(() => {
    if (!open) return undefined;

    const {overflow} = document.body.style;
    document.body.style.overflow = "hidden";

    const onKeyDown = event => {
      if (event.key === "Escape") {
        close();
        toggleRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;

      // Simple focus trap across the panel's tabbable children.
      const focusable = panelRef.current.querySelectorAll(
        "a[href], button:not([disabled])"
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    // Move focus into the panel so the keyboard path is continuous.
    panelRef.current?.querySelector("a")?.focus();

    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
        <div className="nav__inner shell">
          <a className="nav__brand" href="#home" onClick={close}>
            <span className="nav__mark" aria-hidden="true">
              {meta.initials}
            </span>
            <span className="nav__name">{meta.shortName}</span>
            <span className="sr-only">— {meta.role}, back to top</span>
          </a>

          <nav className="nav__links" aria-label="Primary">
            {nav.map(item => (
              <a
                key={item.href}
                href={item.href}
                className={`nav__link ${
                  active === item.href.replace("#", "") ? "is-active" : ""
                }`}
                aria-current={
                  active === item.href.replace("#", "") ? "true" : undefined
                }
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="nav__end">
            <a
              className="nav__resume"
              href={links.resume}
              target="_blank"
              rel="noreferrer noopener"
            >
              Résumé
            </a>

            <button
              ref={toggleRef}
              type="button"
              className={`nav__toggle ${open ? "is-open" : ""}`}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen(value => !value)}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        ref={panelRef}
        className={`menu ${open ? "is-open" : ""}`}
        hidden={!open}
      >
        <nav className="menu__links shell" aria-label="Mobile">
          {nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className="menu__link"
              style={{"--i": i}}
              onClick={close}
            >
              <span className="label menu__index">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="menu__label">{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="menu__foot shell">
          <a href={`mailto:${links.email}`} onClick={close}>
            {links.email}
          </a>
          <div className="menu__social">
            <a href={links.linkedin} target="_blank" rel="noreferrer noopener">
              LinkedIn
            </a>
            <a href={links.github} target="_blank" rel="noreferrer noopener">
              GitHub
            </a>
            <a href={links.resume} target="_blank" rel="noreferrer noopener">
              Résumé
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
