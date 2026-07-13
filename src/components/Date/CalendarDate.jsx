import React from "react";
import "./calendarDate.css";

export default function CalendarDate({ show }) {
  const now = new Date();

  const year = now.getFullYear();

  return (
    <div className="date-container">{show === "year" && <h1>{year}</h1>}</div>
  );
}
