import React from "react";
import "./navbar.css";

const Navbar = (props) => {
  const items = ["portfolio", "contact"];

  return (
    <div>
      <header>
        <a className="nav-logo" href="/">
          Spherical<span className="nav-logo-span">Kat</span>
        </a>
        <nav>
          <ul className="nav-links">
            {items.map((item) => (
              <li key={item}>
                <a
                  href={`/${item}`}
                  style={
                    props.page === item
                      ? { color: "#69F0AE", textTransform: "capitalize" }
                      : { textTransform: "capitalize" }
                  }
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
