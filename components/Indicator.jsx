import React from "react";
import PropTypes from "prop-types";
import styles from "./Indicator.module.css"

const Dot = (props) => {
  return (
    <>
      <button className={styles["indicator-btn"]} onClick={props.onclick}>
        <svg height="24" width="24" viewBox="0 0 100 100">
          <circle cx="50%" cy="50%" r="20" fill={props.color} />
        </svg>
      </button>
    </>
  );
};

const Indicator = (props) => {
  const { pages, selected, setPage } = props;
  return (
    <>
      <div className={styles["page-indicator"]}>
        {pages.map((num) => {
          return (
            <Dot
              key={num}
              color={num === selected ? "#69F0AE" : "#FAFAFA"}
              onClick={(e) => {
                e.preventDefault();
                setPage(num);
              }}
            />
          );
        })}
      </div>
    </>
  );
};

Dot.propTypes = {
  color: PropTypes.string,
};

Indicator.propTypes = {
  pages: PropTypes.array,
  selected: PropTypes.number,
  setPage: PropTypes.func,
};

export default Indicator;
