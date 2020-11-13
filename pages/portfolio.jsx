import React, { useState, useEffect } from "react";
import Head from "next/head";

import Navbar from "../components/Navbar";
import Watermark from "../components/Watermark";
import Indicator from "../components/Indicator";
import Footer from "../components/Footer";
import ReactPageScroller from "react-page-scroller";
import styles from "./Portfolio.module.css";

const Languages = (_props) => (
  <>
    <strong className={styles["strong-text"]}>I'm comfortable writing</strong>
    <ul className={styles["skill-list"]}>
      <li>Kotlin & Java</li>
      <li>JavaScript & TypeScript</li>
      <li>Python</li>
      <li>Dart</li>
      <li>Rust</li>
      <li>Go</li>
    </ul>
  </>
);

const Frameworks = (_props) => (
  <>
    <strong className={styles["strong-text"]}>
      I'm proficient in building
    </strong>
    <ul className={styles["skill-list"]}>
      <li>
        Native <a href="https://developer.android.com/">Android</a> apps
      </li>
      <li>
        Single-page web apps with <a href="https://reactjs.org/">React</a> and <a href="https://vuejs.org/">Vue</a>
      </li>
      <li>
        Cross-platform apps with <a href="https://flutter.dev">Flutter</a>
      </li>
      <li>
        RESTful APIs with
        <a href="https://fastapi.tiangolo.com/"> FastAPI</a>,
        <a href="https://flask.palletsprojects.com/"> Flask</a>,
        <a href="https://nodejs.org/"> Node.js</a>,
        <a href="https://golang.org/"> Go</a> and
        <a href="https://rocket.rs/"> Rocket</a>
      </li>
    </ul>
  </>
);

const Other = (_props) => (
  <>
    <strong className={styles["strong-text"]}>Some other skills</strong>
    <ul className={styles["skill-list"]}>
      <li>
        I'm a certified{" "}
        <a href="https://www.credential.net/fd9e2904-4ddc-4596-9957-0e168797b43c">
          TensorFlow developer
        </a>
      </li>
      <li>I'm skilled with Linux system administration and scripting</li>
      <li>I can handle DevOps on just about all the popular cloud platforms</li>
    </ul>
  </>
);

const Portfolio = (_props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setContainerHeight(window.innerHeight - 89 - 2 * 54);
      setContainerWidth(window.innerWidth - 2 * 48);
    } else {
      setContainerHeight(window.innerHeight - 89);
      setContainerWidth(window.innerWidth - 2 * 118);
    }
  }, [setContainerHeight, setContainerWidth]);

  return (
    <div>
      <Head>
        <title>SphericalKat</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="SphericalKat's personal portfolio" />
      </Head>

      <Navbar page="portfolio" />

      <Watermark text="Portfolio" />

      <div className={styles["portfolio-header"]}>
        <ReactPageScroller
          pageOnChange={(i) => setCurrentPage(i)}
          customPageNumber={currentPage}
          containerWidth={containerWidth}
          containerHeight={containerHeight}
          transitionTimingFunction="ease"
        >
          <Languages />
          <Frameworks />
          <Other />
        </ReactPageScroller>

        <Indicator
          pages={[0, 1, 2]}
          selected={currentPage}
          setPage={setCurrentPage}
        />

        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
