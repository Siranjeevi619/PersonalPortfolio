import React, { useEffect, useRef } from "react";
import "../../Styles/style.css";
import "../../Styles/About.css";
import ReactLogo from "../../assets/Icons/ReactLogo.png";

function About() {
  const sslcRef = useRef(null);
  const hscRef = useRef(null);
  const cgpaRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("start-animation");
          }
        });
      },
      { threshold: 0.1 }
    );

    const sslcNode = sslcRef.current;
    const hscNode = hscRef.current;
    const cgpaNode = cgpaRef.current;

    if (sslcNode) observer.observe(sslcNode);
    if (hscNode) observer.observe(hscNode);
    if (cgpaNode) observer.observe(cgpaNode);

    return () => {
      if (sslcNode) observer.unobserve(sslcNode);
      if (hscNode) observer.unobserve(hscNode);
      if (cgpaNode) observer.unobserve(cgpaNode);
    };
  }, []);

  return (
    <section className="about-section" id="About">
      <div className="container">
        <div className="glass-container about-card p-4 p-md-5">
          <div className="row align-items-center">
            <div className="col-12 col-md-8">
              <h1 className="section-title mb-4">
                About Myself <span className="title-glow">.</span>
              </h1>
              <p className="about-description mb-5">
                Hello! My name is <span className="highlight">Siranjeevi</span>, 
                an IT student at Karpagam College of Engineering with a passion for 
                crafting high-performance web applications. I specialize in 
                <span className="highlight">software development</span> and modern AI integrations. 
                My toolkit includes MongoDB, Express, React, Node.js, and cloud platforms like AWS, 
                ensuring every project I build is scalable, robust, and visually stunning.
              </p>

              <div className="experience-section mb-5">
                <h2 className="subtitle mb-4">Professional Experience</h2>
                <div className="education-item glass-container p-3">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <div>
                      <h5 className="school-name mb-0">Haskel AI</h5>
                      <span className="degree-name">Frontend Developer Intern • Feb 2025 – Present</span>
                    </div>
                    <span className="percentage-badge">Remote</span>
                  </div>
                  <p className="text-muted-custom small mt-2 mb-0">
                    Developed LMS modules using React, optimized performance by reducing re-renders, 
                    and managed dynamic content with efficient state handling.
                  </p>
                </div>
              </div>

              <h2 className="subtitle mb-4">Education Journey</h2>
              <div className="education-grid">
                <div className="education-item glass-container p-3 mb-4">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <div>
                      <h5 className="school-name mb-0">Karpagam College Of Engineering</h5>
                      <span className="degree-name">B.Tech IT • Batch 2026</span>
                    </div>
                    <span className="percentage-badge">7.6 CGPA</span>
                  </div>
                  <div className="custom-progress">
                    <div
                      className="progress-fill"
                      ref={cgpaRef}
                      style={{ "--progress-width": "76%" }}
                    ></div>
                  </div>
                </div>

                <div className="education-item glass-container p-3 mb-4">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <div>
                      <h5 className="school-name mb-0">S D Eaden Matric Higher Secondary School</h5>
                      <span className="degree-name">HSC • Batch 2022</span>
                    </div>
                    <span className="percentage-badge">85%</span>
                  </div>
                  <div className="custom-progress">
                    <div
                      className="progress-fill"
                      ref={hscRef}
                      style={{ "--progress-width": "85%" }}
                    ></div>
                  </div>
                </div>

                <div className="education-item glass-container p-3">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <div>
                      <h5 className="school-name mb-0">S D Eaden Matric Higher Secondary School</h5>
                      <span className="degree-name">SSLC • Batch 2020</span>
                    </div>
                    <span className="percentage-badge">91%</span>
                  </div>
                  <div className="custom-progress">
                    <div
                      className="progress-fill"
                      ref={sslcRef}
                      style={{ "--progress-width": "91%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 text-center mt-5 mt-md-0 d-none d-md-block">
               <div className="floating-logo-container">
                    <img
                        className="img-fluid about-spinner"
                        src={ReactLogo}
                        alt="React Logo"
                    />
                    <div className="logo-shadow"></div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
