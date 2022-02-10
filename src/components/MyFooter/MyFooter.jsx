import React from "react";
import "./MyFooter.css";

const MyFooter = () => {
  return (
    <div>
      <footer className="footer">
        <ul className="footer-list">
          <li> Contact Us</li>
          <li> Instagram</li>
          <li>Twitter</li>
        </ul>
        <ul className="footer-list">
          <li> Download</li>
          <li>More info</li>
          <li>help Me</li>
        </ul>
      </footer>
    </div>
  );
};

export default MyFooter;
