import React, { useEffect, useRef, useState } from "react";
import "../../Styles/Project.css";

const projectData = [
  {
    name: "Shop Assistant Bot",
    subName: "AI Inventory Assistant",
    role: "AI Developer",
    date: "Jan 2026",
    bullets: [
      "Built an AI-powered inventory assistant that helps manage shop operations through natural language prompts and structured backend workflows.",
      "Combined retrieval-style prompt handling with LLM integration to keep responses grounded and useful for day-to-day product management.",
      "Shaped the project as a learning-focused full stack demo that connects AI tooling with a responsive React interface.",
    ],
    techStack: "FastAPI, MongoDB, LangChain, Groq LLM, RAG, React.js",
    repository: "https://github.com/Siranjeevi619/llm-shopmind-ai",
  },
  {
    name: "Resume Analyzer",
    subName: "AI Resume QA Bot",
    role: "AI Developer",
    date: "2026",
    bullets: [
      "Created a resume analysis workflow that can answer questions against uploaded documents with context-aware retrieval.",
      "Used an LLM-backed RAG flow to improve answer relevance and reduce hallucinated responses during document review.",
      "Designed the project as a practical learning build around semantic search and conversational document understanding.",
    ],
    techStack:
      "Python, LangChain, RAG, Vector Embeddings, Semantic Search, React.js",
    repository: "https://github.com/Siranjeevi619/resume-analyzer",
  },
  {
    name: "KB Retriever",
    subName: "Knowledge Base Retrieval Project",
    role: "AI Developer",
    date: "2025",
    bullets: [
      "Built a lightweight knowledge-base retrieval project focused on finding the right context quickly from stored material.",
      "Explored search and retrieval patterns that are useful for LLM-powered applications and learning-oriented AI projects.",
      "Kept the implementation intentionally practical so it can act as a reusable experimentation base.",
    ],
    techStack: "Python, Retrieval, Search, LLM Workflows",
    repository: "https://github.com/Siranjeevi619/kb-retriever",
  },
  {
    name: "Learn HUB",
    subName: "LMS Platform",
    role: "Full Stack Developer",
    date: "2024",
    bullets: [
      "Built a learning management platform for organizing courses and educational content with a React-based interface.",
      "Focused on a clean user flow for browsing learning material and managing the platform experience.",
      "This project reflects the earlier portfolio work that you used to showcase your frontend and full stack learning builds.",
    ],
    techStack: "React.js, Bootstrap, JavaScript",
    repository: "https://github.com/Siranjeevi619/LearnHub",
  },
  {
    name: "Task Orbit",
    subName: "Productivity App",
    role: "React Developer",
    date: "2025",
    bullets: [
      "Implemented a responsive task-management experience focused on clarity, fast interactions, and simple state handling.",
      "Built the app as a clean productivity tool to practice component design and client-side UI flows.",
      "The project highlights the kind of learning repo that benefits from being visible on your portfolio.",
    ],
    techStack: "React.js, JavaScript, Responsive UI",
    repository: "https://github.com/Siranjeevi619/todoApp",
  },
  {
    name: "Tic Tac Toe",
    subName: "Strategic Gaming",
    role: "React Developer",
    date: "2025",
    bullets: [
      "Reimagined the classic game with a mobile-friendly UI and modern React state handling.",
      "Used the project to practice interaction design, component reuse, and game-state synchronization.",
      "Kept the build lightweight so it loads quickly and behaves well on smaller screens.",
    ],
    techStack: "React.js, JavaScript, Mobile-first UI",
    repository: "https://github.com/Siranjeevi619/TicTacToe-React",
  },
  {
    name: "Personal Portfolio",
    subName: "React Portfolio Site",
    role: "Frontend Developer",
    date: "2025",
    bullets: [
      "Developed a personal portfolio using React and Bootstrap to present profile information and featured work.",
      "Focused on a polished presentation layer and clear navigation to practice responsive portfolio design.",
      "This repo is a useful reference point for how your current portfolio evolved.",
    ],
    techStack: "React.js, Bootstrap, JavaScript",
    repository: "https://github.com/Siranjeevi619/PersonalPortfolio",
  },
  {
    name: "Develop Your Skills",
    subName: "MERN E-Learning Platform",
    role: "Full Stack Developer",
    date: "2024",
    bullets: [
      "Built a MERN-based learning platform that aggregates educational content and organizes it into a structured experience.",
      "Worked on scalable backend services and a role-aware interface for different platform users.",
      "Containerization and modular architecture made it a strong learning project for full stack fundamentals.",
    ],
    techStack: "React.js, Node.js, Express.js, MongoDB, Docker, JavaScript",
    repository: "https://github.com/Siranjeevi619/DYS-DevelopYourSkills",
  },
];

function ProjectRow({ project, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const rowRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 },
    );
    const rowEl = rowRef.current;
    if (rowEl) observer.observe(rowEl);
    return () => {
      if (rowEl) observer.unobserve(rowEl);
    };
  }, []);

  return (
    <a
      href={project.repository}
      target="_blank"
      rel="noreferrer"
      className="project-row-link"
    >
      <div
        className={`project-row reveal`}
        ref={rowRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ transitionDelay: `${index * 0.08}s` }}
      >
        <div className="project-row-main">
          <span className="project-bullet">•</span>
          <span className="project-name-editorial">
            {project.name.toUpperCase()}
          </span>
        </div>
        <div className={`project-row-meta ${isHovered ? "show" : ""}`}>
          <span className="project-role-tag">{project.role}</span>
          <span className="project-arrow">
            <i className="bi bi-arrow-up-right"></i>
          </span>
        </div>
        {/* Hover description */}
        <div className={`project-row-description ${isHovered ? "show" : ""}`}>
          <ul className="project-bullets">
            {project.bullets.map((bullet, idx) => (
              <li key={idx}>{bullet}</li>
            ))}
          </ul>
          <p className="project-tech-stack">
            <strong>TECH STACK:</strong> {project.techStack}
          </p>
        </div>
      </div>
      <div className="separator"></div>
    </a>
  );
}

const Projects = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 },
    );
    const headingEl = headingRef.current;
    if (headingEl) observer.observe(headingEl);
    return () => {
      if (headingEl) observer.unobserve(headingEl);
    };
  }, []);

  return (
    <section className="editorial-section" id="Projects">
      <div className="editorial-container">
        <h2 className="section-heading reveal" ref={headingRef}>
          PROJECTS
        </h2>
        <div className="project-list">
          <div className="separator"></div>
          {projectData.map((project, index) => (
            <ProjectRow key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
