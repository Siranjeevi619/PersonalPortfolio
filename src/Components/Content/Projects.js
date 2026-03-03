import React from "react";
import ProjectCard from "./Helpers/ProjectCard";
import CloudatomImage from "../../assets/Images/Cloudatom.jpg";
import LearnHubImage from "../../assets/Images/LearnHub.png";
import ExitSurveyImage from "../../assets/Images/ExitSurvey.png";
import ToDoAppListImage from "../../assets/Images/TodoApp.png";
import TicTacToeImage from "../../assets/Images/TicTacToe.png";
import StarCafeImage from "../../assets/Images/StarCafe.png";
import ShopBotImage from "../../assets/Images/ShopBot.png";
import ThinkerImage from "../../assets/Images/Thinker.png";
import CityzenImage from "../../assets/Images/Cityzen.png";
import "../../Styles/Project.css";
import { Link } from "react-scroll";

const projectData = [
  {
    name: "Shop Assistant Bot",
    subName: "AI Inventory Assistant",
    description: "An AI-powered assistant using FastAPI and LangChain to manage shop inventory with natural language processing via Groq LLM.",
    role: "AI Developer",
    repository: "https://github.com/Siranjeevi619",
    imageSrc: ShopBotImage,
  },
  {
    name: "Thinker",
    subName: "Serverless Notes App",
    description: "A secure, scalable notes application built on AWS using Lambda, API Gateway, and DynamoDB for a completely serverless architecture.",
    role: "Cloud Developer",
    repository: "https://github.com/Siranjeevi619",
    imageSrc: ThinkerImage,
  },
  {
    name: "Cityzen",
    subName: "Citizen Management Portal",
    description: "A microservices-based portal for citizen services, implementing JWT authentication with Spring Boot and containerized with Docker.",
    role: "Fullstack Developer",
    repository: "https://github.com/Siranjeevi619",
    imageSrc: CityzenImage,
  },
  {
    name: "CloudAtom",
    subName: "Gaming E-Commerce",
    description: "A high-performance gaming platform built with modern web technologies, focusing on seamless user transactions and immersive design.",
    role: "Frontend Developer",
    repository: "#",
    LinkedIn: "https://www.linkedin.com/posts/siranjeevi-selvam-003626258_html-css-bootstrap5-activity-7176939557421023233-qii4",
    imageSrc: CloudatomImage,
  },
  {
    name: "Learn HUB",
    subName: "LMS Platform",
    description: "A comprehensive learning management system designed to facilitate online education with an intuitive course management interface.",
    role: "Frontend Developer",
    repository: "https://github.com/Siranjeevi619/LearnHub",
    imageSrc: LearnHubImage,
  },
  {
    name: "Exit Survey",
    subName: "Institutional Analytics",
    description: "A data-driven survey tool developed for academic insights, featuring robust PHP backend integration and dynamic reporting.",
    role: "Fullstack Developer",
    repository: "http://121.200.48.27:8081/ExitSurvey/LoginPage.php",
    imageSrc: ExitSurveyImage,
  },
  {
    name: "Task Orbit",
    subName: "Productivity App",
    description: "A sleek, responsive task management application built with React, featuring real-time state management and elegant UI transitions.",
    role: "React Developer",
    repository: "https://github.com/Siranjeevi619/todoApp",
    imageSrc: ToDoAppListImage,
  },
  {
    name: "Tic Tac Toe",
    subName: "Strategic Gaming",
    description: "A modern reimagining of the classic game, featuring advanced state synchronization and a mobile-first responsive architecture.",
    role: "React Developer",
    repository: "https://github.com/Siranjeevi619/TicTacToe-React",
    imageSrc: TicTacToeImage,
  },
  {
    name: "Star Cafe",
    subName: "Food Ordering System",
    description: "An elegant digital storefront for modern cafes, prioritizing visual appeal and streamlined navigation for online orders.",
    role: "Frontend Developer",
    repository: "https://github.com/Siranjeevi619/TicTacToe-React",
    imageSrc: StarCafeImage,
  },
];

const Projects = () => {
  return (
    <section className="projects-section py-5" id="Projects">
      <div className="container">
        <div className="glass-container p-4 p-md-5">
          <div className="d-flex align-items-center mb-5">
            <h1 className="section-title mb-0">
              Featured Work <span className="title-glow">.</span>
            </h1>
            <Link to="Projects" className="ms-3">
              <i className="bi bi-folder2-open nav-icon h4 mb-0"></i>
            </Link>
          </div>
          
          <p className="projects-intro mb-5">
            A collection of digital solutions where I've bridged the gap between 
            complex requirements and elegant user experiences. Each project represents 
            a milestone in my journey toward technical excellence.
          </p>

          <div className="row g-4">
            {projectData.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
