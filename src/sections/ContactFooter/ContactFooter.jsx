import React from "react";
import "./contactFooter.css";

export default function ContactFooter() {
  return (
    <div className="footer-container">
      <div className="contacts-container">
        <div className="contacts">
          <p>EMAIL</p>
          <p>SMEI826@GMAIL.COM</p>
        </div>
        <div className="contacts">
          <p>GITHUB</p>
          <p>https://github.com/smei08</p>
        </div>
        <div className="contacts">
          <p>LINKEDIN</p>
          <p>https://www.linkedin.com/in/stephanie-mei-332223bb/</p>
        </div>
        <div className="contacts">
          <p>RESUME</p>
          <p>DOWNLOAD</p>
        </div>
      </div>
      <div className="footer">
        <span>吉祥如意 · 萬事如意</span>
        <span>© 2025 Stephanie · All rights reserved</span>
        <span>✦ Lucky number: 8 ✦</span>
      </div>
    </div>
  );
}
