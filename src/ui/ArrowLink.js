import React from "react";
import "./ArrowLink.css";

/**
 * Primary / ghost call-to-action with an arrow that travels on hover.
 * Renders an <a> for hrefs and a <button> otherwise so semantics stay correct.
 */
export default function ArrowLink({
  href,
  onClick,
  variant = "primary",
  external = false,
  className = "",
  children,
  ...rest
}) {
  const Tag = href ? "a" : "button";

  const anchorProps = href
    ? {
        href,
        ...(external ? {target: "_blank", rel: "noreferrer noopener"} : {})
      }
    : {type: "button"};

  return (
    <Tag
      className={`cta cta--${variant} ${className}`}
      onClick={onClick}
      {...anchorProps}
      {...rest}
    >
      <span className="cta__label">{children}</span>
      <span className="cta__arrows" aria-hidden="true">
        <Arrow />
        <Arrow />
      </span>
    </Tag>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 16 16" width="15" height="15" focusable="false">
      <path
        d="M2 8h11M9 4l4 4-4 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="square"
      />
    </svg>
  );
}
