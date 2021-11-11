import React from "react";
import { Link } from "react-router-dom";
import Styles from "./Title.module.css";

function Title({ big }) {
  return (
    <Link to="/">
      <h1 className={`${Styles.titleHeading} ${big && Styles.titleBig}`}>
        Pay<span className={Styles.titleSubheading}>+</span>
      </h1>
    </Link>
  );
}

export default Title;
