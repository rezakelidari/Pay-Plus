import React from "react";
import Styles from "./Button.module.css";
import { Link } from "react-router-dom";

function Button({ children, path, href, action }) {
  return (
    <Link to={path ? path : ""}>
      <button
        className={Styles.button}
        onClick={(action && action, href && (() => window.open(href)))}
      >
        {children}
      </button>
    </Link>
  );
}

export default Button;
