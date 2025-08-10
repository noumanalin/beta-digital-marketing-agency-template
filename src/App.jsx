import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.css";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";

import { useEffect } from 'react';
import Footer from "./components/Footer";


function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} /> 
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
