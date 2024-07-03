import React from "react";
import ProjectCard from "./Helpers/ProjectCard";
import CloudatomImage from "../../assets/Images/Cloudatom.jpg";
import LearnHubImage from "../../assets/Images/LearnHub.png";
import ExitSurveyImage from "../../assets/Images/ExitSurvey.png";
import ToDoAppListImage from "../../assets/Images/TodoApp.png";
import TicTacToeImage from "../../assets/Images/TicTacToe.png";
import StarCafeImage from "../../assets/Images/StarCafe.png";

const projectData = [
  {
    name: "cloudatom",
    subName: "A Gaming E-Commerce Site",
    description:
      "An online gaming purchasing platform made by HTML, CSS, JavaScript, and Bootstrap",
    role: "Frontend Developer",
    repository: "#",
    imageSrc: CloudatomImage,
  },
  {
    name: "Learn HUB",
    subName: "A Learning platform site",
    description:
      "A Learning platform site made by HTML, CSS, JavaScript, and Bootstrap",
    role: "Frontend Developer",
    repository: "https://github.com/Siranjeevi619/LearnHub",
    imageSrc: LearnHubImage,
  },
  {
    name: "Exit Survey Project",
    subName: "Survey Project developed for College",
    description:
      "College Survey Project made by PHP, JavaScript, and Bootstrap",
    role: "Frontend Developer",
    repository: "http://121.200.48.27:8081/ExitSurvey/LoginPage.php",
    imageSrc: ExitSurveyImage,
  },
  {
    name: "ToDo App",
    subName: "An App to Remember",
    description: "A responsive todo app made by React and Bootstrap",
    role: "Frontend Developer",
    repository: "https://github.com/Siranjeevi619/todoApp",
    imageSrc: ToDoAppListImage,
  },
  {
    name: "Tic Tac Toe",
    subName: "A Tic Tac Toe game",
    description: "A responsive Tic Tac Toe game made by React and Bootstrap",
    role: "React Developer",
    repository: "https://github.com/Siranjeevi619/TicTacToe-React",
    imageSrc: TicTacToeImage,
  },
  {
    name: "Star Cafe",
    subName: "An Online Food Order Site",
    description:
      "A responsive Food ordering platform made by HTML, CSS, and Bootstrap",
    role: "React Developer",
    repository: "https://github.com/Siranjeevi619/TicTacToe-React",
    imageSrc: StarCafeImage,
  },
];

const Projects = () => {
  return (
    <>
      <div className="">
        <div className="py-5">
          <div className="container">
            <h1 className="text-center h1">Projects</h1>
            <div className="row">
              {projectData.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
