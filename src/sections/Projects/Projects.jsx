import React from "react";
import projects from "./projectData";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./project.css";
export default function Projects() {
  const project = projects.map((p) => <ProjectCard key={p.id} project={p} />);

  console.log(projects);
  return (
    <div className="project-section">
      <h1>Projects section</h1>
      <div className="project-container">{project}</div>
    </div>
  );
}
