import "./Styles/style.css";
import Home from "./Components/Content/Home";
import Navbar from "./Components/Navbar";
import "./Styles/Navbar.css";
import About from "./Components/Content/About";
import Projects from "./Components/Content/Projects";
import ProjectCard from "./Components/Content/Helpers/ProjectCard";
import ProjectCardPlaceHolder from "./Components/Content/Helpers/ProjectCardPlaceHolder";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Projects /> 
      <ProjectCardPlaceHolder />
    </>
  );
}

export default App;
