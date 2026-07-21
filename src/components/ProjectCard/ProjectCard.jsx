import githubIcon from "../../assets/github.png";
import browserIcon from "../../assets/web-browser.png";
import "./projectCard.css";

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <div className="project-tag">
        {project.tags.map((tag) => (
          <span className="tag">{tag}</span>
        ))}
      </div>
      <div className="icon-container">
        <a href={project.github} target="_blank" rel="noreferrer">
          <img className="github icon" src={githubIcon} alt="GitHub" />
        </a>
        <a href={project.live} target="_blank" rel="noreferrer">
          <img className="website icon" src={browserIcon} alt="Live site" />
        </a>
      </div>
    </div>
  );
}
