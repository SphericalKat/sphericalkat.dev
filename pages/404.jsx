import React from "react";
import styles from "./404.module.css";
import Link from "next/link";

const NotFound = () => {
  return (
    <div style={{ height: "100%" }}>
      <div className={styles["page-container"]}>
        <h1>404</h1>
        <h2>Something went wrong</h2>
        <Link href="/">Go home</Link>
      </div>
    </div>
  );
};

export default NotFound;
