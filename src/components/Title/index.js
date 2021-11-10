import React from "react";
import Styles from "./Title.module.css";

function Title({big}) {
  return (
    <h1 className={big && Styles.big}>
      Pay<span>+</span>
    </h1>
  );
}

export default Title;
