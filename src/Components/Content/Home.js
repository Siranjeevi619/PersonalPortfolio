import React, { useEffect, useRef } from "react";
import "../../Styles/Home.css";
import DeveloperLogo from "../../assets/Images/StevePhoto.png";
import Resume from "../../assets/docs/Siranjeevi_Resume_90.pdf";

function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("hero-visible");
          }
        });
      },
      { threshold: 0.1 },
    );

    if (heroRef.current) observer.observe(heroRef.current);

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  return (
    <section id="Home" className="hero-section">
      <div className="hero-content" ref={heroRef}>
        {/* Name + Photo layered together */}
        <div className="hero-stage">
          <h1 className="hero-name" aria-label="Siranjeevi">
            SIRANJEEVI
          </h1>

          <div className="hero-photo-wrapper">
            <img
              src={DeveloperLogo}
              alt="Siranjeevi P"
              className="hero-photo"
            />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="hero-bottom">
          <div className="hero-subtitle-area">
            <p className="hero-role">Full Stack Developer</p>
            <p className="hero-tagline">
              MERN Stack · Spring Boot · AI Integrations (RAG, LangChain)
            </p>
          </div>
          <div className="hero-actions">
            <a href={Resume} download className="editorial-btn">
              Download CV <i className="bi bi-arrow-down"></i>
            </a>
            <div className="hero-socials">
              <a
                href="https://linkedin.com/in/siranjeevi-selvam"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="https://github.com/Siranjeevi619"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <i className="bi bi-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
