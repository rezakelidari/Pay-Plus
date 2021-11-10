import React from "react";
import Styles from "./Wrapper.module.css";

function Wrapper({ children }) {
  return <div className={Styles.wrapper}>{children}</div>;
}

export default Wrapper;
