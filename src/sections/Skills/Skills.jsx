import React from "react";

export default function Skills() {
  const style = {
    padding: "0 0 0 40px",
    textAlign: "center",
  };
  const liStyle = {
    textAlign: "left",
  };
  return (
    <div style={style} className="skills">
      <h1>Skills section</h1>
      <ul style={liStyle}>
        <li>Core — HTML, CSS, JavaScript, React</li>
        <li>Tools — Git/GitHub, Figma, Vite</li>
      </ul>
    </div>
  );
}
