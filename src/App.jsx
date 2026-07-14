import { useState } from "react";

import "./App.css";
import CalenderHeader from "./sections/CalendarHeader/CalendarHeader";
import Hero from "./sections/Hero/Hero/Hero";

function App() {
  return (
    <div className="app-container">
      <CalenderHeader />
      <Hero />
    </div>
  );
}

export default App;
