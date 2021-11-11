import React from "react";
import Styles from "./Button.module.css";
import { Link } from "react-router-dom";

function Button({ children, path, action }) {
  return (
    <Link to={path ? path : ""}>
      <button className={Styles.button} onClick={action && action}>
        {children}
      </button>
    </Link>
  );
}

export default Button;
