import React from "react";
import "./home.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Watermark from "../../components/watermark/watermark";

const Home = () => (
  <div>
    <Navbar page="home" />
    <div className="home-header-div">
      <Watermark text="Home" />
      <strong>
        Hi, I'm Amogh Lele,
        <br />a<span> Full Stack Developer.</span>
      </strong>
      <h2 className="short-desc">
        Hardwired to write <span className="span-highlight">scalable</span> and{" "}
        <span className="span-highlight">efficient</span> code.
      </h2>
      <a
        href="mailto:amolele@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="contact-btn">Let's get in touch!</button>
      </a>
    </div>
    <Footer />
  </div>
);

export default Home;
