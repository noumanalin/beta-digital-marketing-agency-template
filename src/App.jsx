import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.css";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import { useEffect } from 'react';

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* future routes: <Route path="/about" element={<About />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
