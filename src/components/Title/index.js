import React from "react";
import { Link } from "react-router-dom";
import Styles from "./Title.module.css";

function Title({ big, soBig, dark, clickable = true }) {
  return (
    <Link to={`${clickable ? "/" : ""}`}>
      <h1
        className={`
          ${Styles.titleHeading}
          ${big && Styles.titleBig}
          ${soBig && Styles.titleSoBig}
          ${dark && Styles.titleDark}`}
      >
        Pay<span className={Styles.titleSubheading}>+</span>
      </h1>
    </Link>
  );
}

export default Title;
