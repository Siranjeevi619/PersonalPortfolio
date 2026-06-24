import React, { useEffect, useRef } from "react";
import "../../Styles/About.css";

function About() {
  const headingRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headingRef.current) observer.observe(headingRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  return (
    <section className="editorial-section about-editorial" id="About">
      <div className="editorial-container">
        <h2 className="section-heading reveal" ref={headingRef}>
          ABOUT
        </h2>

        <div className="about-content reveal" ref={contentRef}>
          <div className="about-bio-area">
            <p className="about-bio">
              I am a <span className="highlight">Full Stack Developer</span> specializing in the MERN stack, Spring Boot, and AI integrations (RAG, LangChain). Experienced in building scalable web applications, microservices, and RESTful APIs using AWS, Docker, and CI/CD pipelines. As a strong algorithmic problem-solver with <span className="highlight">600+ LeetCode DSA</span> solved, I am dedicated to delivering secure, high-performance, and user-centric software solutions.
            </p>
          </div>

          <div className="about-details-grid">
            {/* Experience */}
            <div className="about-block">
              <h3 className="about-block-title">EXPERIENCE</h3>
              <div className="about-item">
                <div className="about-item-header">
                  <span className="about-item-name">Haskel AI</span>
                  <span className="about-item-date">Feb 2025 — Feb 2026</span>
                </div>
                <p className="about-item-desc">
                  Frontend Developer Intern · Remote
                </p>
                <ul className="about-item-bullets">
                  <li>Improved UI scalability and reduced redundant codebase by developing 12+ reusable React components for LMS modules.</li>
                  <li>Enabled dynamic content rendering by integrating 20+ RESTful API endpoints and managing asynchronous data flows.</li>
                  <li>Optimized performance through code-splitting, memoization, and streamlined state updates to enhance responsiveness.</li>
                  <li>Collaborated seamlessly with backend teams via Agile practices to define API contracts and review PRs.</li>
                </ul>
              </div>
            </div>

            {/* Education */}
            <div className="about-block">
              <h3 className="about-block-title">EDUCATION</h3>
              <div className="about-item">
                <div className="about-item-header">
                  <span className="about-item-name">Karpagam College of Engineering</span>
                  <span className="about-item-date">7.6 CGPA</span>
                </div>
                <p className="about-item-desc">B.Tech in Information Technology</p>
                <p className="about-item-details">Coimbatore · Aug 2022 – May 2026</p>
              </div>
              <div className="about-item">
                <div className="about-item-header">
                  <span className="about-item-name">SD Eaden Matric HSS</span>
                  <span className="about-item-date">85%</span>
                </div>
                <p className="about-item-desc">Higher Secondary Certificate (HSC)</p>
                <p className="about-item-details">Vadalur · 2022</p>
              </div>
            </div>

            {/* Achievements */}
            <div className="about-block">
              <h3 className="about-block-title">AWARDS</h3>
              <div className="about-item">
                <div className="about-item-header">
                  <span className="about-item-name">Best Project Award</span>
                  <span className="about-item-date">2026</span>
                </div>
                <p className="about-item-desc">Karpagam College of Engineering</p>
                <p className="about-item-details">
                  Recognized for innovation, technical depth, and real-world applicability among final-year IT graduates.
                </p>
              </div>
              <div className="about-item">
                <div className="about-item-header">
                  <span className="about-item-name">Algorithmic Proficiency</span>
                  <span className="about-item-date">600+ Solved</span>
                </div>
                <p className="about-item-desc">LeetCode DSA Profile</p>
                <p className="about-item-details">
                  Demonstrated strong problem decomposition and algorithmic thinking by solving 600+ DSA problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
