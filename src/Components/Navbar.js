import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "../Styles/Navbar.css";

const navItems = [
  { label: "HOME", to: "Home" },
  { label: "PROJECTS", to: "Projects" },
  { label: "SKILLS", to: "Skills" },
  { label: "ABOUT", to: "About" },
];

function Navbar() {
  const [activeSection, setActiveSection] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.to));
      const scrollPos = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollPos) {
          setActiveSection(navItems[i].to);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="editorial-nav" id="editorial-nav">
      <div className="nav-inner">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            spy={true}
            smooth={true}
            offset={-60}
            duration={600}
            className={`nav-link-editorial ${activeSection === item.to ? "active" : ""}`}
            onClick={() => setMobileOpen(false)}
          >
            {activeSection === item.to && <span className="active-dot">●</span>}
            {item.label}
          </Link>
        ))}
      </div>

      {/* Mobile toggle */}
      <button
        className={`mobile-nav-toggle ${mobileOpen ? "open" : ""}`}
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
      </button>

      {/* Mobile overlay */}
      <div className={`mobile-nav-overlay ${mobileOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            spy={true}
            smooth={true}
            offset={-60}
            duration={600}
            className={`mobile-nav-link ${activeSection === item.to ? "active" : ""}`}
            onClick={() => setMobileOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
