import React from "react";
import Navbar from "../../components/navbar/navbar";
import Watermark from "../../components/watermark/watermark";
import "./contact.css"

const Contact = () => (
  <div>
    <Navbar page="contact" />
    <Watermark text="Contact" />
    <div className="contact-header-div">
      <strong>
        You can find me at:
      </strong>
    </div>
  </div>
);

export default Contact;
