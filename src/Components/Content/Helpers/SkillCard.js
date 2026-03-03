import React from "react";
import PropTypes from "prop-types";
import "./Helpers-Style/SkillCard.css";

function SkillCard({ name, level, imageSrc, color }) {
  return (
    <div className="col-6 col-sm-4 col-md-3 col-lg-2">
      <div className="skill-card-glass" style={{ "--skill-color": color }}>
        <div className="skill-icon-wrapper">
          <img
            src={imageSrc}
            className="skill-icon"
            alt={`${name} Logo`}
          />
        </div>
        <div className="skill-info mt-3">
          <h6 className="skill-name mb-1">{name}</h6>
          <span className="skill-level">{level}</span>
        </div>
        <div className="skill-glow"></div>
      </div>
    </div>
  );
}

SkillCard.propTypes = {
  name: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default SkillCard;
