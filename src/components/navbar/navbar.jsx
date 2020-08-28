import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import hamburger from "../../assets/images/hamburger.svg";

const Navbar = (props) => {
  const items = ["portfolio", "contact"];
  const onClickHamburger = (_) => {
    const nav = document.getElementById("nav-header");
    if (nav.className === "nav-container") {
      nav.className += " opened";
    } else {
      nav.className = "nav-container";
    }
  };

  return (
    <div>
      <header className="nav-container" id="nav-header">
        <div id="nav-button" onClick={onClickHamburger}>
          <img src={hamburger} alt="hamburger" />
        </div>
        <nav>
          <ul className="nav-links">
            <Link className="nav-logo" to="/">
              Spherical<span className="nav-logo-span">Kat</span>
            </Link>
            {items.map((item) => (
              <li key={item}>
                <Link
                  to={`/${item}`}
                  style={
                    props.page === item
                      ? { color: "#69F0AE", textTransform: "capitalize" }
                      : { textTransform: "capitalize" }
                  }
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
