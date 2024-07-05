import React from "react";
import "./Helpers-Style/SkillCard.css";
import PropTypes from "prop-types";
import "../Helpers/Helpers-Style/SkillCard.css";

function SkillCard(props) {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-2">
      <div className="card skill-card mx-auto shadow">
        <div className="d-flex justify-content-evenly align-items-center ">
          <img
            src={props.imageSrc}
            className="img-fluid skill-logo"
            alt="HTML Logo"
          />
        </div>
        <div className="card-body">
          <div className="card-title h5 text-center">{props.name}</div>
          <div className="card-subtitle h6 text-muted text-center">
            {props.level}
          </div>
        </div>
      </div>
    </div>
  );
}
SkillCard.propType = {
  name: PropTypes.string,
  level: PropTypes.string,
  imageSrc: PropTypes.string,
};

export default SkillCard;
