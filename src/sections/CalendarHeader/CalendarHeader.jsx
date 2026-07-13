import React from "react";
import CalendarDate from "../../components/Date/CalendarDate";
import "./calendarHeader.css";

export default function CalenderHeader() {
  return (
    <div className="calender-header-container">
      <span>
        丙午年
        <br />
        二〇二六
        <br />
        Year of the Horse
      </span>
      <CalendarDate show="year" />
      <span>
        Avaiable for Work
        <br />
        Front-End Dev
      </span>
    </div>
  );
}
