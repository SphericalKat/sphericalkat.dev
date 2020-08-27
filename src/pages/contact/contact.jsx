import React from "react";
import Navbar from "../../components/navbar/navbar";
import Watermark from "../../components/watermark/watermark";
import "./contact.css";
import telegram from "../../assets/images/telegram.svg";
import mail from "../../assets/images/mail.svg";
import github from "../../assets/images/github.svg";
import linkedin from "../../assets/images/linkedin.svg";
import Footer from "../../components/footer/footer";

const Contact = () => (
  <div>
    <Navbar page="contact" />
    <Watermark text="Contact" />
    <div className="contact-header-div">
      <strong className="strong-text">You can find me at:</strong>
      <ul className="contact-list">
        <li>
          <a href="https://t.me/sphericalkat">
            <img src={telegram} alt="telegram" />
            <span className="contact-item-text">Telegram</span>
          </a>
        </li>

        <li>
          <a
            href="mailto:amolele@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={mail} alt="email" />
            <span className="contact-item-text">Email</span>
          </a>
        </li>

        <li>
          <a href="https://github.com/ATechnoHazard">
            <img src={github} alt="github" />
            <span className="contact-item-text">GitHub</span>
          </a>
        </li>

        <li>
          <a href="https://www.linkedin.com/in/amogh-lele-830131a4/">
            <img src={linkedin} alt="linkedin" />
            <span className="contact-item-text">LinkedIn</span>
          </a>
        </li>
      </ul>

      <Footer />
    </div>
  </div>
);

export default Contact;
