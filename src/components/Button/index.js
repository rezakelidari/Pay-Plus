import React from "react";
import { Link } from "react-router-dom";
import "./Button.module.css";

function Button({ children, path, action }) {
  return (
    <Link to={path ? path : ""}>
      <button onClick={action && action}>{children}</button>
    </Link>
  );
}

export default Button;
