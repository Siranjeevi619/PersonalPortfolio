import React from "react";
import { Link } from "react-scroll";
import "../Styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top glass-navbar">
      <div className="container glass-nav-inner">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <h3 className="fw-bold mb-0">Siranjeevi <span className="brand-dot">.</span></h3>
        </a>
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-4">
            <li className="nav-item">
              <Link to="Home" spy={true} smooth={true} offset={-100} duration={500} className="nav-link-custom">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="About" spy={true} smooth={true} offset={-70} duration={500} className="nav-link-custom">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="Certifications" spy={true} smooth={true} offset={-70} duration={500} className="nav-link-custom">
                Certifications
              </Link>
            </li>
            <li className="nav-item">
              <Link to="Projects" spy={true} smooth={true} offset={-70} duration={500} className="nav-link-custom">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="Skills" spy={true} smooth={true} offset={-70} duration={500} className="nav-link-custom">
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link to="Contact" spy={true} smooth={true} offset={-70} duration={500} className="nav-link-custom">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
