import { useState } from "react";
import "./dotNav.css";
import About from "../../sections/About/About";
import Skills from "../../sections/Skills/Skills";
import Projects from "../../sections/Projects/Projects";

export default function DotNav() {
  const section = [
    { id: "about", component: <About /> },
    { id: "skills", component: <Skills /> },
    { id: "projects", component: <Projects /> },
  ];

  const [active, setActive] = useState(0);

  return (
    <div className="dot-container">
      <div className="dot-nav">
        {section.map((section, index) => (
          <button
            key={section.id}
            className={`dot ${active === index ? "active" : ""}`}
            onClick={() => setActive(index)}
            aria-label={`Go to ${section.id}`}
          />
        ))}
      </div>
      <div className="section-display" key={active}>
        {section[active].component}
      </div>
    </div>
  );
}
