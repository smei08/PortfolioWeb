import React from "react";
import { Lunar, Solar } from "lunar-javascript";
import "./calendarDate.css";

export default function CalendarDate({ show }) {
  const now = new Date();
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const solar = Solar.fromDate(now);

  const day = weekday[now.getDay()];
  const year = now.getFullYear();
  const lunar = solar.getLunar();

  const lunarDay = new Date().toLocaleString("zh-CN", { weekday: "long" });
  console.log(day);

  return (
    <div className="date-container">
      {show === "year" && <h1 className="year">{year}</h1>}
      {show === "lunar" && <h1>{lunar.getDayInChinese()}</h1>}
      {show === "lunar-day" && <h1>{lunarDay[lunarDay.length - 1]}</h1>}
      {show === "day" && <h1>{day}</h1>}
    </div>
  );
}
