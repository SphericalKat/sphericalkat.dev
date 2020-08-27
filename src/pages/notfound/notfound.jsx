import React from "react";
import "./notfound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{height: "100%"}}>
      <div className="page-container">
        <h1>404</h1>
        <h2>Something went wrong</h2>
        <Link to="/">Go home</Link>
      </div>
    </div>
  );
};

export default NotFound;
