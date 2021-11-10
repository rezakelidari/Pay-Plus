import React from "react";
import Styles from "./Home.module.css";
import Wrapper from "../../components/Wrapper";
import Title from "../../components/Title";
import Banner from "../../assets/img/top_banner.gif";

function Home() {
  return (
    <div className={Styles.main}>
      <Wrapper>
        <div className={Styles.left}>
          <Title className={Styles.title} big />
          <p className={Styles.desc}>
            New generation of payment applications. Get a loan of up to $100
            from Pay+, get it quickly in your account and buy online.
          </p>
        </div>
        <div className={Styles.right}>
          <img
            className={Styles.banner}
            src={Banner}
            alt="Application banner"
          />
        </div>
      </Wrapper>
      <span className={Styles.scrollDown}></span>
    </div>
  );
}

export default Home;
