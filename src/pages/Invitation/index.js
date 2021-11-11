import React from "react";
import Styles from "./Invitation.module.css";
import Button from "../../components/Button/index";

function Invitation() {
  return (
    <div className={Styles.main}>
      <div className={Styles.box}>
        <h1 className={Styles.heading}>Register now</h1>
        <p className={Styles.subheading}>and get your credit quickly</p>
        <br />
        <Button path="/download">Download App</Button>
      </div>
    </div>
  );
}

export default Invitation;
