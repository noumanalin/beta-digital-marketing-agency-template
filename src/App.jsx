
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home/Home";

import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer.jsx'



function App() {

  return (
    <> 
    <Navbar/>
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} /> 
        </Routes>
      </div> 
    </BrowserRouter>

    <Footer />
    </>
  );
}

export default App;
