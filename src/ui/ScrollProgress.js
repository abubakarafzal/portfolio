import React from "react";
import "./ScrollProgress.css";

/** Hairline reading-progress indicator pinned under the nav. */
export default function ScrollProgress({progress}) {
  return (
    <div className="progress" aria-hidden="true">
      <span
        className="progress__bar"
        style={{transform: `scaleX(${progress})`}}
      />
    </div>
  );
}
