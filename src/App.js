import "./Styles/style.css";
import Home from "./Components/Content/Home";
import Navbar from "./Components/Navbar";
import "./Styles/Navbar.css";
import About from "./Components/Content/About";
import Projects from "./Components/Content/Projects";
import ProjectCard from "./Components/Content/Helpers/ProjectCard";
import ProjectCardPlaceHolder from "./Components/Content/Helpers/ProjectCardPlaceHolder";
import ErrorDisplay from "./Components/Content/Helpers/ErrorDisplay";
import Skill from "./Components/Content/Skill";
import SkillCard from "./Components/Content/Helpers/SkillCard";
import Contact from "./Components/Content/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Skill />
      <Projects />
      <Contact />
      {/* <ProjectCardPlaceHolder /> */}
      {/* <ErrorDisplay /> */}

      {/* <SkillCard /> */}
    </>
  );
}

export default App;
