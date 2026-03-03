import React from "react";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Helpers-Style/ProjectCard.css";

function ProjectCard({
  name,
  subName,
  description,
  role,
  imageSrc,
  repository,
  LinkedIn,
}) {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="project-card-premium glass-container">
        <div className="project-image-wrapper">
          {imageSrc ? (
            <img src={imageSrc} className="project-preview" alt={name} />
          ) : (
            <Skeleton height={200} baseColor="#1a1a24" highlightColor="#2d2d3a" />
          )}
          <div className="project-overlay">
            <div className="role-tag">{role}</div>
          </div>
        </div>
        
        <div className="project-details p-4">
          <h4 className="project-name mb-1">{name || <Skeleton width="60%" />}</h4>
          <h6 className="project-subname mb-3">{subName || <Skeleton width="40%" />}</h6>
          <p className="project-desc mb-4">
            {description || <Skeleton count={2} />}
          </p>
          
          <div className="project-actions mt-auto">
            {repository === "#" ? (
              <a href={LinkedIn} target="_blank" rel="noreferrer" className="premium-button w-100 text-center text-decoration-none">
                View on LinkedIn <i className="bi bi-linkedin ms-2"></i>
              </a>
            ) : (
              <a href={repository} target="_blank" rel="noreferrer" className="premium-button-outline w-100 text-center text-decoration-none">
                View Repository <i className="bi bi-github ms-2"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  name: PropTypes.string,
  subName: PropTypes.string,
  description: PropTypes.string,
  role: PropTypes.string,
  imageSrc: PropTypes.string,
  repository: PropTypes.string,
  LinkedIn: PropTypes.string,
};

export default ProjectCard;
