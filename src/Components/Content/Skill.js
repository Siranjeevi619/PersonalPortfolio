import React, { useEffect, useRef } from "react";
import "../../Styles/Skill.css";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Java", "JavaScript (ES6+)", "Python", "C"],
  },
  {
    title: "Frontend Development",
    skills: ["React.js", "HTML5", "CSS3", "TailwindCSS", "Bootstrap", "Responsive Web Design", "Component-Based Architecture"],
  },
  {
    title: "Backend Development",
    skills: ["Spring Boot", "Node.js", "Express.js", "FastAPI", "RESTful API Design", "Microservices Architecture"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS (Lambda, API Gateway, DynamoDB, CloudWatch, IAM)", "Docker", "Jenkins", "CI/CD Pipelines", "Serverless Architecture"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB", "DynamoDB", "NoSQL", "SQL", "Database Schema Design"],
  },
  {
    title: "AI & Machine Learning",
    skills: ["LangChain", "Groq LLM", "Retrieval-Augmented Generation (RAG)", "Vector Embeddings", "Semantic Search", "Prompt Engineering"],
  },
  {
    title: "Security & Tools",
    skills: ["JWT Authentication", "Role-Based Access Control (RBAC)", "Git", "GitHub", "Linux", "Postman", "Insomnia", "Vercel", "Render"],
  },
];

function Skill() {
  const headingRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headingRef.current) observer.observe(headingRef.current);
    if (gridRef.current) observer.observe(gridRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (gridRef.current) observer.unobserve(gridRef.current);
    };
  }, []);

  return (
    <section className="editorial-section" id="Skills">
      <div className="editorial-container">
        <h2 className="section-heading reveal" ref={headingRef}>
          SKILLS
        </h2>
        <div className="skills-grid reveal" ref={gridRef}>
          {skillCategories.map((cat, index) => (
            <div key={index} className="skill-category">
              <h3 className="skill-category-title">{cat.title}</h3>
              <div className="skill-tags">
                {cat.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;
