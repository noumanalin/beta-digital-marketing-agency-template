import React from 'react';
import NewsInsight from './components/NewsInsight';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import WorkWithUs from './components/WorkwithUs';
import './styles/global.css';
function App() {
  return (
    <div className="App"> 
      
      <Testimonials />
      <NewsInsight />
      <WorkWithUs />
       <Footer />
    </div>
  );
}

export default App;