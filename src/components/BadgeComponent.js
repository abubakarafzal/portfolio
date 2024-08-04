// src/components/BadgeComponent.js
import React from 'react';

const BadgeComponent = ({ badges }) => (
  <div className="badge-container">
    {badges.map(badge => (
      <img key={badge.name} src={badge.image} alt={badge.name} style={{ margin: "10px" }} />
    ))}
  </div>
);

export default BadgeComponent;