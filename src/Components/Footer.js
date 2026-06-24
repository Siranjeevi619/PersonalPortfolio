import React from "react";

function Footer() {
  return (
    <footer className="editorial-footer">
      <div className="editorial-container">
        <div className="footer-inner">
          <p className="footer-copyright">
            Copyright &copy; {new Date().getFullYear()} Siranjeevi. All Rights
            Reserved.
          </p>
          <div className="footer-socials">
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
            <a
              href="https://leetcode.com/Siranjeevi619"
              target="_blank"
              rel="noreferrer"
              aria-label="LeetCode"
            >
              <i className="bi bi-code-slash"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
