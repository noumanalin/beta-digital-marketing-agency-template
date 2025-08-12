
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home/Home";




function App() {

  return (
    <> 
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} /> 
        </Routes>
      </div> 
    </BrowserRouter>
    </>
  );
}

export default App;
