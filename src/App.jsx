
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home/Home";


import Footer from "./components/Footer";
import Navbar from './components/Navbar/Navbar'



function App() {

  return (
    <>
    <Navbar />
    <BrowserRouter>
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
