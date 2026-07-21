import React from "react";
import projects from "./projectData";
import githubIcon from "../../assets/github.png";
import browserIcon from "../../assets/web-browser.png";

export default function Projects() {
  const style = {
    padding: "0 40px",
    textAlign: "center",
  };

  const project = projects.map((p) => (
    <div className="project" key={p.id}>
      <h3>{p.name}</h3>
      <p>{p.description}</p>
      <a href={p.github} target="_blank">
        <img src={githubIcon} />
      </a>
      <a href={p.live} target="_blank">
        <img src={browserIcon} />
      </a>
    </div>
  ));

  console.log(projects);
  return (
    <div style={style}>
      <h1>Projects section</h1>
      <div className="project-container">{project}</div>
    </div>
  );
}
