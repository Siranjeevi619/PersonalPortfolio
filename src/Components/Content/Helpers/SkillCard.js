import React from "react";
import PropTypes from "prop-types";
import "./Helpers-Style/SkillCard.css";

function SkillCard(props) {
  const fillColor = {
    "--hover-bg-color": props.fillColor,
  };

  return (
    <div className="col-6 col-sm-6 col-md-4 col-lg-3 p-2">
      <div className="card-container">
        <div
          className="card skill-card card-content mx-auto shadow"
          style={fillColor} 
        >
          <div className="d-flex justify-content-evenly align-items-center">
            <img
              src={props.imageSrc}
              className="img-fluid skill-logo"
              alt={`${props.name} Logo`}
            />
          </div>
          <div className="card-body">
            <div className="card-title h5 text-center">{props.name}</div>
            <div className="card-subtitle h6  text-center">
              {props.level}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

SkillCard.propTypes = {
  name: PropTypes.string,
  level: PropTypes.string,
  imageSrc: PropTypes.string,
  fillColor: PropTypes.string, 
};

export default SkillCard;
