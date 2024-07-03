import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function ProjectCardPlaceHolder() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4 mb-4">
          <div className="card h-100">
            <Skeleton
              className="card-img-top img-fluid placeholder"
              style={{ height: "200px" }}
            ></Skeleton>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">
                <Skeleton width="60%" />
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">
                <Skeleton width="60%" />
              </h6>
              <p className="card-text flex-grow-1">
                <Skeleton width="100%" />
                <Skeleton width="70%" />
                <br /> Role:
                <span className="text-primary">
                  <Skeleton width="40%" />
                </span>
              </p>
              <div className="mt-auto">
                <Skeleton width="29%" height={40} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCardPlaceHolder;
