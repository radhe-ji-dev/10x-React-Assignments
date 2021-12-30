import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./Landing/LandingPage.js";
import Postview from "./Post/Postview";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/about" element={<Postview />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
// App.js
