import React from "react";
import styles from "./Watermark.module.css";

const Watermark = (props) => {
  return (
    <>
      <div className={styles.watermark}>{props.text}</div>
    </>
  );
};

export default Watermark;
