import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.css";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";

import { useEffect } from 'react';


function App() {
  // useEffect(() => {
  //   const handleContextMenu = (e) => e.preventDefault();
  //   document.addEventListener("contextmenu", handleContextMenu);

  //   const handleKeyDown = (e) => {
  //     if (
  //       e.key === "F12" ||
  //       (e.ctrlKey && e.shiftKey && e.key === "I") ||
  //       (e.ctrlKey && e.key === "U") ||
  //       (e.ctrlKey && e.shiftKey && e.key === "J") ||
  //       (e.ctrlKey && e.key === "S") ||
  //       (e.ctrlKey && e.key === "C")
  //     ) {
  //       e.preventDefault();
  //     }
  //   };
  //   document.addEventListener("keydown", handleKeyDown);

  //   // Cleanup function
  //   return () => {
  //     document.removeEventListener("contextmenu", handleContextMenu);
  //     document.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* future routes: <Route path="/about" element={<About />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
