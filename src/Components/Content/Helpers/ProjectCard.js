import React from "react";
import Cloudatom from "../../../assets/Images/Cloudatom.jpg";
import PropTypes from "prop-types";
function ProjectCard(props) {
  return (
    <div className="col-12 col-sm-6 col-md-4 mb-4">
      <div className="card h-100 ">
        <img
          src={props.imageSrc}
          className="card-img-top img-fluid"
          alt="Cloudatom"
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{props.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{props.subName}</h6>
          <p className="card-text flex-grow-1">
            {props.description}
            <br /> Role:
            <span className="text-primary">{props.role}</span>
          </p>
          <div className="mt-auto">
            <a href={props.repository} className="btn btn-primary">
              Repository <i className="bi bi-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  subName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  repository: PropTypes.string.isRequired,
};
export default ProjectCard;
