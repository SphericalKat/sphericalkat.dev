import React from "react";
import "./footer.css";
import github from "../../assets/images/github.svg";

const Footer = () => {
  return (
    <div className="footer-div">
      <strong>
        <span>©</span>
        Amogh Lele
      </strong>

      <div className="social-links">
        <a href="https://github.com/ATechnoHazard/sphericalkat.dev">
          <img src={github} alt="github" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
