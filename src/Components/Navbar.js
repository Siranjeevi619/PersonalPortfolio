import React, { useEffect } from "react";
import { Link } from "react-scroll";
import "../Styles/Navbar.css";

function Navbar() {
  useEffect(() => {
    document.title = "Siranjeevi Portfolio";
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center">
          <h3 className="fw-4 mb-0">Siranjeevi</h3>
         
        </a>
        <button
          className="navbar-toggler"
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-md-4">
            <li className="nav-item h6">
              <Link to="/" className="nav-link" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item h6">
              <Link to="/About" className="nav-link" aria-current="page">
                About
              </Link>
            </li>
            <li className="nav-item h6">
              <Link to="/Projects" className="nav-link" aria-current="page">
                Projects
              </Link>
            </li>
            <li className="nav-item h6">
              <Link to="/Skills" className="nav-link" aria-current="page">
                Skills
              </Link>
            </li>
            <li className="nav-item h6">
              <Link to="/Contact" className="nav-link" aria-current="page">
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
