import React from "react";
import Styles from "./Footer.module.css";
import Title from "../Title";
import Button from "../Button";

function Footer() {
  return (
    <footer className={Styles.footerMain}>
      <Title />
      <h1 className={Styles.footerHeader}>By Reza Kelidari</h1>
      <Button href="https://github.com/rezakelidari">Github profile</Button>
    </footer>
  );
}

export default Footer;
