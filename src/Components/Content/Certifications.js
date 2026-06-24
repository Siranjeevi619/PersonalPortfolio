import React, { useEffect, useRef } from "react";
import "../../Styles/Certification.css";

const certifications = [
  {
    name: "Wipro Java Full Stack Certification",
    issuer: "Wipro TalentNext",
    date: "Nov 2025",
  },
  {
    name: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    date: "Nov 2025",
  },
  {
    name: "Developing Back-End Apps with Node.js and Express",
    issuer: "IBM / Coursera",
    date: "Jun 2025",
  },
  {
    name: "Advanced React & React",
    issuer: "Meta / Coursera",
    date: "Jan 2025, Aug 2024",
  },
  {
    name: "Introduction to MongoDB",
    issuer: "MongoDB University",
    date: "Aug 2024",
  },
];

const Certifications = () => {
  const headingRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 },
    );

    const headingElement = headingRef.current;
    const listElement = listRef.current;

    if (headingElement) observer.observe(headingElement);
    if (listElement) observer.observe(listElement);

    return () => {
      if (headingElement) observer.unobserve(headingElement);
      if (listElement) observer.unobserve(listElement);
    };
  }, []);

  return (
    <section className="editorial-section" id="Certifications">
      <div className="editorial-container">
        <h2 className="section-heading reveal" ref={headingRef}>
          CERTIFI&shy;CATIONS
        </h2>

        <div className="cert-list reveal" ref={listRef}>
          <div className="separator"></div>
          {certifications.map((cert, index) => (
            <div key={index}>
              <div className="cert-row">
                <div className="cert-row-main">
                  <span className="cert-bullet">•</span>
                  <span className="cert-name-editorial">
                    {cert.name.toUpperCase()}
                  </span>
                </div>
                <div className="cert-row-meta">
                  <span className="cert-issuer-tag">{cert.issuer}</span>
                  <span className="cert-date-tag">{cert.date}</span>
                </div>
              </div>
              <div className="separator"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
