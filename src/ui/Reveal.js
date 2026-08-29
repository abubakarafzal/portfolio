import React from "react";

/**
 * Wraps children in a scroll-revealed element.
 * `delay` staggers siblings; `as` keeps the markup semantic.
 */
export default function Reveal({
  as: Tag = "div",
  delay = 0,
  className = "",
  style,
  children,
  ...rest
}) {
  return (
    <Tag
      data-reveal=""
      className={className}
      style={{"--reveal-delay": `${delay}ms`, ...style}}
      {...rest}
    >
      {children}
    </Tag>
  );
}
