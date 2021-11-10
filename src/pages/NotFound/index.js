import React from "react";
import Styles from "./Notfound.module.css";

function NotFound() {
  return (
    <>
      <div className={Styles.notfound}>
        <h1 className={Styles.title}>Oops!</h1>
        <p className={Styles.desc}>404 - Page not found...</p>
      </div>
    </>
  );
}

export default NotFound;
