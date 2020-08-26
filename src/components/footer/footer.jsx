import React from "react";
import "./footer.css";
import github from "../../assets/images/github.svg";
import linkedin from "../../assets/images/linkedin.svg";

const Footer = () => {
  return (
    <div className="footer-div">
      <strong>
        <span>©</span>
        Amogh Lele
      </strong>

      <div className="social-links">
        <a href="https://github.com/ATechnoHazard">
          <img src={github} alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/amogh-lele-830131a4/">
          <img src={linkedin} alt="linkedin" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
