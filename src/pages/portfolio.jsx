import React from "react";
import Navbar from "../components/navbar/navbar"
import Watermark from "../components/watermark/watermark";

const Portfolio = () => (
  <div>
    <Navbar page="portfolio"/>
    <Watermark text="Portfolio" />
    <h1>Portfolio</h1>
  </div>
);

export default Portfolio;
