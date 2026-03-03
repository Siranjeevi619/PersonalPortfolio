import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function ProjectCardPlaceHolder() {
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div className="project-card-premium glass-container h-100">
        <Skeleton
          height={220}
          baseColor="rgba(255,255,255,0.05)"
          highlightColor="rgba(255,255,255,0.1)"
          style={{ borderRadius: "28px 28px 0 0" }}
        />
        <div className="p-4">
          <Skeleton 
             width="70%" 
             height={24} 
             baseColor="rgba(255,255,255,0.05)" 
             highlightColor="rgba(255,255,255,0.1)" 
          />
          <Skeleton 
             width="40%" 
             height={18} 
             className="my-2"
             baseColor="rgba(255,255,255,0.05)" 
             highlightColor="rgba(255,255,255,0.1)" 
          />
          <Skeleton 
             count={2} 
             baseColor="rgba(255,255,255,0.05)" 
             highlightColor="rgba(255,255,255,0.1)" 
          />
          <div className="mt-4">
            <Skeleton 
               height={45} 
               borderRadius={50}
               baseColor="rgba(255,255,255,0.05)" 
               highlightColor="rgba(255,255,255,0.1)" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCardPlaceHolder;
