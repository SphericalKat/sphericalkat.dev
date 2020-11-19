import React from "react";
import Head from "next/head";

import styles from "./Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Watermark from "../components/Watermark";

import stack from "../assets/stack.svg";

const Home = () => (
  <div>
    <Head>
      <title>SphericalKat</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content="SphericalKat's personal portfolio" />
    </Head>

    <Navbar page="home" />

    <div className={styles["home-header-div"]}>
      <Watermark text="Home" />

      <div className="flex justify-between">
        <div className="flex flex-col justify-start">
          <strong>
            Hi, I'm Amogh Lele,
            <br />a<span> Full Stack Developer.</span>
          </strong>
          <h2 className={styles["short-desc"]}>
            Hardwired to write{" "}
            <span className={styles["span-highlight"]}>scalable</span> and{" "}
            <span className={styles["span-highlight"]}>efficient</span> code.
          </h2>
        </div>
      </div>

      <a
        href="mailto:me@sphericalkat.dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className={`${styles["contact-btn"]} focus:outline-none`}>Let's get in touch!</button>
      </a>
    </div>

    <Footer />
  </div>
);

export default Home;
