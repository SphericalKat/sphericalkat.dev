import React from "react";
import Link from "next/link";
import Head from "next/head";

import styles from "./404.module.css";

const NotFound = () => {
  return (
    <div style={{ height: "100%" }}>
      <Head>
        <title>SphericalKat</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="SphericalKat's personal portfolio" />
      </Head>
      <div className={styles["page-container"]}>
        <h1>404</h1>
        <h2>Something went wrong</h2>
        <Link href="/">Go home</Link>
      </div>
    </div>
  );
};

export default NotFound;
