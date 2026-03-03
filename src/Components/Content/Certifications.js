import React from "react";
import "../../Styles/style.css";
import "../../Styles/Certification.css";

const certifications = [
  { name: "Advanced React", issuer: "Meta", date: "Jan 2025" },
  { name: "AWS Cloud Practitioner Essentials", issuer: "AWS", date: "2024" },
  { name: "Back-End Apps with Node.js & Express", issuer: "IBM / Coursera", date: "2024" },
  { name: "React Basics", issuer: "Meta", date: "Aug 2024" },
  { name: "Introduction to MongoDB", issuer: "MongoDB", date: "2024" },
  { name: "Javascript (Basic)", issuer: "HackerRank", date: "Mar 2024" },
  { name: "Responsive Web Design", issuer: "FreeCodeCamp", date: "Oct 2023" },
  { name: "Problem Solving (Basic)", issuer: "HackerRank", date: "Sept 2023" },
  { name: "Python (Basic)", issuer: "HackerRank", date: "Sept 2023" },
  { name: "Python", issuer: "GUVI Geek Networks, IITM Research Park", date: "Aug 2023" },
  { name: "Game development using pygame", issuer: "GUVI Geek Networks, IITM Research Park", date: "Aug 2023" }
];

const Certifications = () => {
  return (
    <section className="certifications-section py-5" id="Certifications">
      <div className="container">
        <div className="glass-container p-4 p-md-5">
          <div className="d-flex align-items-center mb-5">
            <h1 className="section-title mb-0">
               Certifications <span className="title-glow">.</span>
            </h1>
            <div className="ms-3">
              <i className="bi bi-patch-check nav-icon h4 mb-0"></i>
            </div>
          </div>
          
          <div className="row g-4">
            {certifications.map((cert, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4">
                <div className="cert-card-premium glass-container p-4">
                  <div className="d-flex align-items-start">
                    <div className="cert-status-icon me-3">
                      <i className="bi bi-patch-check-fill text-primary-glow h4"></i>
                    </div>
                    <div>
                      <h5 className="cert-name mb-1">{cert.name}</h5>
                      <p className="cert-issuer mb-1">{cert.issuer}</p>
                      <span className="cert-date small">{cert.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
