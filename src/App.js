import "./Styles/style.css";
import Home from "./Components/Content/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/Content/About";
import Projects from "./Components/Content/Projects";
import Certifications from "./Components/Content/Certifications";
import Skill from "./Components/Content/Skill";
import Contact from "./Components/Content/Contact";
import Footer from "./Components/Footer";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Siranjeevi P — Portfolio";
  }, []);

  return (
    <div className="app-wrapper">
      <Navbar />
      <Home />
      <Projects />
      <Skill />
      <Certifications />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
