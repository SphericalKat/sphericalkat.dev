import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = (props) => {
  const items = ["portfolio", "contact"];

  return (
    <div>
      <header>
        <Link className="nav-logo" to="/">
          Spherical<span className="nav-logo-span">Kat</span>
        </Link>
        <nav>
          <ul className="nav-links">
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
