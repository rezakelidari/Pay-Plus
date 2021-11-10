import React from "react";
import Styles from "./styles/Main.module.css";
import Navbar from "./components/Navbar/";
import NotFound from "./pages/NotFound/"
import Home from "./pages/Home/";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className={Styles.nav}>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
