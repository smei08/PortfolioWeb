import React from "react";
import "./heroHeader.css";
import CalendarDate from "../../../components/Date/CalendarDate";

export default function HeroHeader() {
  return (
    <div className="hero-header">
      <div className="chinese-date">
        <CalendarDate show="lunar" />
        <CalendarDate show="lunar-day" />
      </div>
      <img src="../../../flower.png" />
      <CalendarDate show="day" />
    </div>
  );
}
