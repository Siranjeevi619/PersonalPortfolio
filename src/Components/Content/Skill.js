import React from "react";
import "../../Styles/Skill.css";
import SkillCard from "./Helpers/SkillCard";
import { Link } from "react-scroll";

// Import all assets
import JavaScriptLogo from "../../assets/Icons/icons8-javascript-480.png";
import BootstrapLogo from "../../assets/Icons/icons8-bootstrap-480.png";
import ReactLogo from "../../assets/Icons/ReactLogo.png";
import JavaLogo from "../../assets/Icons/icons8-java-480.png";
import PythonLogo from "../../assets/Icons/icons8-python-480.png";
import MongoDBLogo from "../../assets/Icons/icons8-mongodb-480.png";
import LinuxLogo from "../../assets/Icons/linux.png";

const skillData = [
  { name: "React JS", level: "Expert", imageSrc: ReactLogo, color: "#61DAFB" },
  { name: "Node JS", level: "Advanced", imageSrc: "https://img.icons8.com/color/480/nodejs.png", color: "#68A063" },
  { name: "Spring Boot", level: "Advanced", imageSrc: "https://img.icons8.com/color/480/spring-logo.png", color: "#6DB33F" },
  { name: "JavaScript", level: "Expert", imageSrc: JavaScriptLogo, color: "#EFD81D" },
  { name: "Tailwind CSS", level: "Advanced", imageSrc: "https://img.icons8.com/color/480/tailwindcss.png", color: "#06B6D4" },
  { name: "AWS", level: "Intermediate", imageSrc: "https://img.icons8.com/color/480/amazon-web-services.png", color: "#FF9900" },
  { name: "Mongo DB", level: "Advanced", imageSrc: MongoDBLogo, color: "#47A248" },
  { name: "MySQL", level: "Advanced", imageSrc: "https://img.icons8.com/color/480/mysql-logo.png", color: "#4479A1" },
  { name: "Docker", level: "Intermediate", imageSrc: "https://img.icons8.com/color/480/docker.png", color: "#2496ED" },
  { name: "LangChain", level: "Intermediate", imageSrc: "https://img.icons8.com/color/480/chain.png", color: "#fff" },
  { name: "Java", level: "Advanced", imageSrc: JavaLogo, color: "#007396" },
  { name: "Python", level: "Advanced", imageSrc: PythonLogo, color: "#3776AB" },
  { name: "Linux", level: "Advanced", imageSrc: LinuxLogo, color: "#FCC624" },
  { name: "Bootstrap", level: "Expert", imageSrc: BootstrapLogo, color: "#7952B3" },
];

function Skill() {
  return (
    <section className="skills-section py-5" id="Skills">
      <div className="container">
        <div className="glass-container p-4 p-md-5">
          <div className="d-flex align-items-center mb-5">
            <h1 className="section-title mb-0">
              Technical Expertise <span className="title-glow">.</span>
            </h1>
            <Link to="Skills" className="ms-3">
              <i className="bi bi-cpu nav-icon h4 mb-0"></i>
            </Link>
          </div>
          
          <div className="row g-4">
            {skillData.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
