import React from "react";
import "./contactFooter.css";

export default function ContactFooter() {
  return (
    <div className="footer-container">
      <div className="contacts-container">
        <div className="contacts">
          {/* <p>EMAIL</p> */}
          <a href="mailto:smei826@gmail.com">smei826@gmail.com</a>
        </div>
        <div className="contacts">
          {/* <p>GITHUB</p> */}
          <a href="https://github.com/smei08" target="_blank" rel="noreferrer">
            GITHUB
          </a>
        </div>
        <div className="contacts">
          <a
            href="https://www.linkedin.com/in/stephanie-mei-332223bb/"
            target="_blank"
            rel="noreferrer"
          >
            LINKEDIN
          </a>
          {/* <p>LINKEDIN</p>
          <p>https://www.linkedin.com/in/stephanie-mei-332223bb/</p> */}
        </div>
        <div className="contacts resume">
          {/* <p>RESUME</p>
          <p>DOWNLOAD</p> */}
          <a href="/resume.pdf" download>
            RESUME
          </a>
          <img src="../../../downloding.png" alt="download icon" />
        </div>
      </div>
      <div className="footer">
        <div>吉祥如意 · 萬事如意</div>
        <div>© 2026 Stephanie · All rights reserved</div>
        <div>✦ Lucky number: 8 ✦</div>
      </div>
    </div>
  );
}
