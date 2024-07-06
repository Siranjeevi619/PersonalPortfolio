import React from "react";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ErrorDisplay from "./ErrorDisplay";

function ProjectCard({
  name = null,
  subName = null,
  description = null,
  role = null,
  imageSrc = null,
  repository = null,
  Message,
  LinkedIn,
}) {
  return (
    <div className="col-12 col-sm-6 col-md-4 mb-4">
      <div className="card h-100">
        {imageSrc ? (
          <img src={imageSrc} className="card-img-top img-fluid" alt={name} />
        ) : (
          <Skeleton
            className="card-img-top img-fluid placeholder"
            style={{ height: "200px" }}
          ></Skeleton>
        )}
        <div className="card-body d-flex flex-column">
          <h3 className="card-title fs-2">
            {name ? name : <Skeleton width="60%" />}
          </h3>
          <h4 className="card-subtitle mb-2 text-muted">
            {subName ? subName : <Skeleton width="60%" />}
          </h4>
          <p className="card-text ">
            {description ? (
              description
            ) : (
              <>
                <Skeleton width="100%" />
                <Skeleton width="70%" />
              </>
            )}
          </p>
          <p className="h6">
            <span className=" special-text " aria-label="Close">
              {role ? role : <Skeleton width="40%" />}
            </span>
          </p>

          <div className="mt-3">
            {repository ? (
              repository !== "#" ? (
                <a href={repository} className="btn btn-primary">
                  Repository <i className="bi bi-github"></i>
                </a>
              ) : (
                <>
                  <a href={LinkedIn} className="btn btn-primary ">
                    LinkedIn <i className="bi bi-linkedin "></i>
                  </a>
                </>
              )
            ) : (
              <Skeleton width="35%" height={40} />
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
};

ProjectCard.defaultProps = {
  name: null,
  subName: null,
  description: null,
  role: null,
  imageSrc: null,
  repository: null,
};

export default ProjectCard;
