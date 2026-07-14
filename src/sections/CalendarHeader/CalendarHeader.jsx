import React from "react";
import CalendarDate from "../../components/Date/CalendarDate";
import "./calendarHeader.css";
import knotBorder from "../../assets/knot-border.svg";

export default function CalenderHeader() {
  return (
    <div className="calender-header-container">
      <img src={knotBorder} alt="" className="knot-border" />
      <div className="header-content">
        <span>
          丙午年
          <br />
          二〇二六
          <br />
          Year of the Horse
        </span>
        <CalendarDate show="year" />
        <span>
          Available for Work
          <br />
          Front-End Dev
        </span>
      </div>
    </div>
  );
}
