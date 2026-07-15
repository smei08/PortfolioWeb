import React from "react";
import "./hero.css";
import CalendarDate from "../../../components/Date/CalendarDate";
import About from "../../About/About";
import HeroHeader from "../HeroHeader/HeroHeader";
import Skills from "../../Skills/Skills";
import Projects from "../../Projects/Projects";
import ContactFooter from "../../ContactFooter/ContactFooter";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-container">
        <h1 className="left">春夏秋冬</h1>
        <div className="center">
          <div className="a-day">吉 · Auspicious Day</div>
          <div className="intro">
            <h1>Hai, I'm Stephanie</h1>
            <h3>Front-End Developer & Creative Coder</h3>
            <p>
              Building digital experiences where creatvitiy meets technology.
              Based in Boston — crafting thoughtful interfaces with modern
              tools.
            </p>
          </div>
        </div>
        <h1 className="right">吉福運緣 </h1>
      </div>
      <HeroHeader />
      <div className="hero-body">
        <About />
        <div className="skills-projects">
          <Skills />
          <Projects />
        </div>
        <ContactFooter />
      </div>
    </div>
  );
}
