import React from "react";
import Styles from "./Notfound.module.css";

function NotFound() {
  return (
    <>
      <div className={Styles.notfoundMain}>
        <h1 className={Styles.notfoundTitle}>Oops!</h1>
        <p className={Styles.notfoundDesc}>404 - Page not found...</p>
      </div>
    </>
  );
}

export default NotFound;
