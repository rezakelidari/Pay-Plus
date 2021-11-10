import React from "react";
import { Link } from "react-router-dom";
import Styles from "./Title.module.css";

function Title({ big }) {
  return (
    <Link to="/">
      <h1 className={big && Styles.big}>
        Pay<span>+</span>
      </h1>
    </Link>
  );
}

export default Title;
