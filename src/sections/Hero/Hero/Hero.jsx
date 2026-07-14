import React from "react";
import "./hero.css";
import CalendarDate from "../../../components/Date/CalendarDate";
import About from "../../About/About";
import HeroHeader from "../HeroHeader/HeroHeader";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-container">
        <h1 className="left">春夏秋冬</h1>
        <div className="center">
          <div>吉 · Auspicious Day</div>
          <div className="intro">
            <h1>Hai, I'm Stephanie</h1>
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
    </div>
  );
}
