import React from "react";
import Styles from "./styles/Main.module.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className={Styles.nav}>
        <Navbar />
      </div>
    </>
  );
}

export default App;
