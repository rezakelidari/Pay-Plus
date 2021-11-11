import React from "react";
import Styles from "./styles/Main.module.css";
import Navbar from "./components/Navbar/";
import NotFound from "./pages/NotFound/";
import Home from "./pages/Home/";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loan from "./pages/Loan";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Loan />
            </>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
