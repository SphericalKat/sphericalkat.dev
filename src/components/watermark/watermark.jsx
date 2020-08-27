import React from "react";
import "./watermark.css";

const Watermark = (props) => {
  return (
    <>
      <div className="watermark">{props.text}</div>
    </>
  );
};

export default Watermark;
