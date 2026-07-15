import { useState } from "react";

import "./index.css";
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
