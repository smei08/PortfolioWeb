import React from "react";
import "./skills.css";

export default function Skills() {
  const style = {
    padding: "0 0 0 40px",
    textAlign: "center",
  };
  const liStyle = {
    textAlign: "left",
  };
  return (
    <section class="skills-section">
      <h1>Skills</h1>

      <div class="skills-table">
        <div class="skill-group">
          <h3>Languages &amp; Frameworks</h3>
          <div class="tag-row">
            <span class="tag">JavaScript (ES6+)</span>
            <span class="tag">React</span>
            <span class="tag">Next.js</span>
            <span class="tag">HTML5</span>
            <span class="tag">CSS3</span>
            <span class="tag">Python</span>
          </div>
        </div>

        <div class="skill-group">
          <h3>Styling</h3>
          <div class="tag-row">
            <span class="tag">Tailwind CSS</span>
            <span class="tag">Responsive / Mobile-First</span>
          </div>
        </div>

        <div class="skill-group">
          <h3>State &amp; Tooling</h3>
          <div class="tag-row">
            <span class="tag">Zustand</span>
            <span class="tag">Vite</span>
            <span class="tag">Git</span>
            <span class="tag">GitHub</span>
          </div>
        </div>

        <div class="skill-group">
          <h3>APIs &amp; Integration</h3>
          <div class="tag-row">
            <span class="tag">REST APIs</span>
            <span class="tag">OpenAI API</span>
            <span class="tag">Third-Party API Integration</span>
          </div>
        </div>

        <div class="skill-group">
          <h3>Deployment</h3>
          <div class="tag-row">
            <span class="tag">Netlify</span>
            <span class="tag">Netlify Functions (Serverless)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
