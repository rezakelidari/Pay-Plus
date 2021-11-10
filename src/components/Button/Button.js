import React from "react";
import Styles from "./Button.module.css"

function Button({ children, action }) {
  return <button onClick={action && action}>{children}</button>;
}

export default Button;
