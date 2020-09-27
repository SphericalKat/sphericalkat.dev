import React from "react";
import styles from "./Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Watermark from "../components/Watermark";

const Home = () => (
  <div>
    <Navbar page="home" />
    <div className={styles["home-header-div"]}>
      <Watermark text="Home" />
      <strong>
        Hi, I'm Amogh Lele,
        <br />a<span> Full Stack Developer.</span>
      </strong>
      <h2 className={styles["short-desc"]}>
        Hardwired to write{" "}
        <span className={styles["span-highlight"]}>scalable</span> and{" "}
        <span className={styles["span-highlight"]}>efficient</span> code.
      </h2>
      <a
        href="mailto:amolele@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className={styles["contact-btn"]}>Let's get in touch!</button>
      </a>
    </div>
    <Footer />
  </div>
);

export default Home;
