import React from "react";
import "../../Styles/Skill.css";
import HTMLLogo from "../../assets/Icons/icons8-html-logo-480.png";
import CSSLogo from "../../assets/Icons/icons8-css-240.png";
import JavaScriptLogo from "../../assets/Icons/icons8-javascript-480.png";
import BootstrapLogo from "../../assets/Icons/icons8-bootstrap-480.png";
import ReactLogo from "../../assets/Icons/ReactLogo.png";
import MaterialUILogo from "../../assets/Icons/icons8-material-ui-480.png";
import JavaLogo from "../../assets/Icons/icons8-java-480.png";
import CLogo from "../../assets/Icons/icons8-c-240.png";
import PythonLogo from "../../assets/Icons/icons8-python-480.png";
import MongoDBLogo from "../../assets/Icons/icons8-mongodb-480.png";
import SkillCard from "./Helpers/SkillCard";

const Skills = [
  {
    name: "HTML",
    level: "pro",
    imageSrc: HTMLLogo,
  },
  {
    name: "CSS",
    level: "intermediate",
    imageSrc: CSSLogo,
  },
  {
    name: "JavaScript",
    level: "intermediate",
    imageSrc: JavaScriptLogo,
  },
  {
    name: "Boostrap",
    level: "intermediate",
    imageSrc: BootstrapLogo,
  },
  {
    name: "React JS",
    level: "intermediate",
    imageSrc: ReactLogo,
  },
  {
    name: "Material UI",
    level: "Beginner",
    imageSrc: MaterialUILogo,
  },
  {
    name: "Java",
    level: "Intermediate",
    imageSrc: JavaLogo,
  },
  {
    name: "C",
    level: "Intermediate",
    imageSrc: CLogo,
  },
  {
    name: "Python",
    level: "Intermediate",
    imageSrc: PythonLogo,
  },
  {
    name: "Mongo DB",
    level: "Intermediate",
    imageSrc: MongoDBLogo,
  },
];

function Skill() {
  return (
    <div className="bg-skill py-5">
      <div className="text-center h1">Skills</div>
      <div className="container d-flex justify-content-center">
        <div className="row justify-content-evenlyx">
          {Skills.map((Skill, index) => (
            <SkillCard key={index} {...Skill} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skill;
