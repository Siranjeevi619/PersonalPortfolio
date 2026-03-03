import React from "react";

function Footer() {
  return (
    <footer className="footer-glass py-4">
      <div className="container">
        <div className="glass-container p-3 px-4 d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="mb-0 text-muted-custom">
            &copy; {new Date().getFullYear()} <span className="text-white-custom fw-bold">Siranjeevi Selvam</span>. All rights reserved.
          </p>
          <div className="d-flex align-items-center mt-3 mt-md-0">
             <span className="text-muted-custom small">Crafted with</span>
             <i className="bi bi-suit-heart-fill text-danger mx-2"></i>
             <span className="text-muted-custom small">using modern technologies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
