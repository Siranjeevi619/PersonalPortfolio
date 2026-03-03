import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "../../Styles/Home.css";
import DeveloperLogo from "../../assets/Images/1713845068875.jpg";
import Resume from "../../assets/docs/Siranjeevi_o2.pdf";
import { Link } from "react-scroll";

function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Frontend Designer",
        "Frontend Developer",
        "Backend Developer",
        "MERN Developer",
      ],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="Home" className="home-section d-flex align-items-center">
      <div className="container">
        <div className="glass-container home-card p-4 p-md-5">
          <div className="row align-items-center">
            <div className="col-12 col-md-5 text-center mb-4 mb-md-0">
              <div className="logo-wrapper">
                <img
                  src={DeveloperLogo}
                  alt="Siranjeevi Selvam"
                  className="img-fluid developer-logo-premium"
                />
                <div className="logo-glow"></div>
              </div>
            </div>
            <div className="col-12 col-md-7 ps-md-5">
              <div className="home-content">
                <h5 className="text-secondary-glow mb-3">Software Developer</h5>
                <h1 className="hero-title mb-3">
                  Siranjeevi P
                </h1>
                <div className="typed-wrapper mb-4">
                  <span ref={el} className="typed-text" />
                </div>
                <p className="hero-description mb-5">
                  Specializing in <span className="highlight">Software Development</span>, I architect and develop 
                  high-performance web applications that prioritize architectural integrity and 
                  exceptional user experience. Committed to delivering scalable, robust solutions 
                  through engineering excellence.
                </p>

                <div className="button-group d-flex flex-wrap gap-4 justify-content-center justify-content-md-start">
                  <a href={Resume} download>
                    <button className="premium-button">
                      Download CV <i className="bi bi-download ms-2"></i>
                    </button>
                  </a>
                  <Link to="Contact" smooth={true} duration={500} offset={-70}>
                    <button className="premium-button-outline">
                      Get in Touch <i className="bi bi-arrow-right ms-2"></i>
                    </button>
                  </Link>
                </div>

                <div className="social-links-home mt-5">
                  <div className="d-flex gap-4 justify-content-center justify-content-md-start">
                    <a href="https://www.linkedin.com/in/siranjeevi-selvam-003626258/" target="_blank" rel="noreferrer" className="glass-social">
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="https://github.com/Siranjeevi619" target="_blank" rel="noreferrer" className="glass-social">
                      <i className="bi bi-github"></i>
                    </a>
                    <a href="https://www.instagram.com/imsteve_619_/" target="_blank" rel="noreferrer" className="glass-social">
                      <i className="bi bi-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
