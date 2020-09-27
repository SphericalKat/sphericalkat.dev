import React from "react";
import Navbar from "../components/Navbar";
import Watermark from "../components/Watermark";
import styles from "./Contact.module.css";
import telegram from "../assets/telegram.svg";
import mail from "../assets/mail.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import Footer from "../components/Footer";

const Contact = () => (
  <div>
    <Navbar page="contact" />
    <Watermark text="Contact" />
    <div className={styles['contact-header-div']}>
      <strong className={styles['strong-text']}>You can find me at:</strong>
      <ul className={styles['contact-list']}>
        <li>
          <a href="https://t.me/sphericalkat">
            <img src={telegram} alt="telegram" />
            <span className={styles['contact-item-text']}>Telegram</span>
          </a>
        </li>

        <li>
          <a
            href="mailto:amolele@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={mail} alt="email" />
            <span className={styles['contact-item-text']}>Email</span>
          </a>
        </li>

        <li>
          <a href="https://github.com/ATechnoHazard">
            <img src={github} alt="github" />
            <span className={styles['contact-item-text']}>GitHub</span>
          </a>
        </li>

        <li>
          <a href="https://www.linkedin.com/in/amogh-lele-830131a4/">
            <img src={linkedin} alt="linkedin" />
            <span className={styles['contact-item-text']}>LinkedIn</span>
          </a>
        </li>
      </ul>

      <Footer />
    </div>
  </div>
);

export default Contact;
