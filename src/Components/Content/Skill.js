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
import { Link } from "react-scroll";

// import ExpressLogo from "../../assets/Icons/icons8-express-js (1).svg";
import LinuxLogo from "../../assets/Icons/linux.png";
// import DockerLogo from "../../assets/Icons/icons8-docker.svg";

const Skills = [
  {
    name: "HTML",
    level: "Pro",
    imageSrc: HTMLLogo,
    fillColor: "#E86229",
  },
  {
    name: "CSS",
    level: "Intermediate",
    imageSrc: CSSLogo,
    fillColor: "#254BDD",
  },
  {
    name: "JavaScript",
    level: "Intermediate",
    imageSrc: JavaScriptLogo,
    fillColor: "#EFD81D",
  },
  {
    name: "Boostrap",
    level: "Intermediate",
    imageSrc: BootstrapLogo,
    fillColor: "#8F1AFF",
  },
  {
    name: "React JS",
    level: "Intermediate",
    imageSrc: ReactLogo,
    fillColor: "#58C4DC",
  },
  {
    name: "Mongo DB",
    level: "Beginner",
    imageSrc: MongoDBLogo,
    fillColor: "#5D4037",
  },

  {
    name: "Node Js",
    level: "Intermediate",
    imageSrc: "https://img.icons8.com/color/480/nodejs.png",
    fillColor: "#5FA624",
  },
  {
    name: "Express Js",
    level: "Intemediate",
    imageSrc: "https://img.icons8.com/color/480/express-js.png",
    fillColor: "#b30000",
  },
  {
    name: "Java",
    level: "Intermediate",
    imageSrc: JavaLogo,
    fillColor: "#F2930B",
  },
  {
    name: "C",
    level: "Intermediate",
    imageSrc: CLogo,
    fillColor: "#084A86",
  },
  {
    name: "Python",
    level: "Intermediate",
    imageSrc: PythonLogo,
    fillColor: "#FFD448",
  },
  {
    name: "Material UI",
    level: "Beginner",
    imageSrc: MaterialUILogo,
    fillColor: "#0073E5",
  },
  {
    name: "Docker",
    level: "Beginner",
    imageSrc: "https://img.icons8.com/color/480/docker.png",
    fillColor: "",
  },
  {
    name: "Linux",
    level: "Ubuntu",
    imageSrc: LinuxLogo,
    fillColor: "#FFCC33 ",
  },
];

function Skill() {
  return (
    <div className="bg-skill py-md-5 mt-3" id="Skills">
      <div className="text-center ms-3 h1">
        Skills{" "}
        <Link to="Skills">
          <i class="bi bi-link-45deg nav-icon"></i>
        </Link>
      </div>
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
