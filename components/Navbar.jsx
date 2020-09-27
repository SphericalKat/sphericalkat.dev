import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import hamburger from "../assets/hamburger.svg";

const Navbar = (props) => {
  const items = ["portfolio", "contact"];
  const onClickHamburger = (_) => {
    const nav = document.getElementById("nav-header");
    if (nav.className === styles["nav-container"]) {
      nav.className += ` ${styles.opened}`;
    } else {
      nav.className = styles["nav-container"];
    }
  };

  return (
    <div>
      <header className={styles["nav-container"]} id="nav-header">
        <div id={styles["nav-button"]} onClick={onClickHamburger}>
          <img src={hamburger} alt="hamburger" />
        </div>
        <nav className={styles["nav-root"]}>
          <ul className={styles["nav-links"]}>
            <Link href="/">
              <a className={`${styles["nav-logo"]}`}>
                Spherical<span className={`${styles["nav-logo-span"]} ${styles["font-styles"]}`}>Kat</span>
              </a>
            </Link>
            {items.map((item) => (
              <li className={styles["font-style"]} key={item}>
                <Link href={`/${item}`}>
                  <a
                    style={
                      props.page === item
                        ? { color: "#69F0AE", textTransform: "capitalize" }
                        : { textTransform: "capitalize" }
                    }
                  >
                    {item}
                  </a>
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
