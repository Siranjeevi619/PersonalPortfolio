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

    if (sslcRef.current) observer.observe(sslcRef.current);
    if (hscRef.current) observer.observe(hscRef.current);
    if (cgpaRef.current) observer.observe(cgpaRef.current);

    return () => {
      if (sslcRef.current) observer.unobserve(sslcRef.current);
      if (hscRef.current) observer.unobserve(hscRef.current);
      if (cgpaRef.current) observer.unobserve(cgpaRef.current);
    };
  }, []);

  return (
    <div className="navbar-light about-bg" id="About">
      <div className="py-5">
        <div className="container">
          <h1 className="h1 underline-text">
            About Myself <i class="bi bi-link-45deg nav-icon"></i>
          </h1>
          <div className="row">
            <div className="col-12 col-md-9 order-2 order-md-1" id="info">
              <p className="mt-2 text-justify">
                Hello! My name is Siranjeevi, and I am currently pursuing a
                Bachelor of Technology in Information Technology at Karpagam
                College of Engineering. I am passionate about web development
                and specialize as a MERN stack developer. In my projects, I
                leverage MongoDB, Express.js, React, and Node.js to build
                dynamic and scalable applications. I also utilize frameworks
                like Bootstrap CSS and Material-UI to design responsive and
                visually appealing user interfaces. Additionally, I am
                proficient in programming languages such as C, Java, Python, and
                JavaScript, along with skills in Docker and Linux, which enable
                me to manage containers and develop efficient solutions in
                diverse environments. I am eager to explore emerging
                technologies and frameworks to stay ahead in the ever-evolving
                tech landscape, ensuring my skills remain versatile and
                impactful.
              </p>

              <h2 className="h2 underline-text">Education</h2>

              <div className="school-mark-sslc">
                <h3 className="h3 mt-2">
                  S D Eaden Matric Higher Secondary School
                </h3>
                <h4 className="card-title">SSLC</h4>
                <h6 className="card-subtitle mb-2 text-muted">Batch 2020</h6>
                <div className="progress col-12 col-md-6">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="91.5"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    ref={sslcRef}
                    style={{ "--progress-width": "91.5%" }}
                  >
                    91.5 %
                  </div>
                </div>
              </div>
              <div className="school-mark-hsc">
                <h3 className="h3 mt-2">
                  S D Eaden Matric Higher Secondary School
                </h3>
                <h4 className="card-title">HSC</h4>
                <h6 className="card-subtitle mb-2 text-muted">Batch 2022</h6>
                <div className="progress col-12 col-md-6">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="85.6"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    ref={hscRef}
                    style={{ "--progress-width": "85.6%" }}
                  >
                    85.6 %
                  </div>
                </div>
              </div>
              <div className="school-mark-hsc">
                <h3 className="h3 mt-2">Karpagam College Of Engineering</h3>
                <h4 className="card-title">Till 4rd Semester</h4>
                <h6 className="card-subtitle mb-2 text-muted">Batch 2026</h6>
                <div className="progress col-12 col-md-6">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="7.69"
                    aria-valuemin="0"
                    aria-valuemax="10"
                    ref={cgpaRef}
                    style={{ "--progress-width": "76.7%" }}
                  >
                    7.67
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-12 col-md-3 order-1 order-md-2 text-center"
              id="reactLogo"
            >
              <img
                className="img-fluid spinner"
                src={ReactLogo}
                alt="React Logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
