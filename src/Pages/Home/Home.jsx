// IMPORT COMPONENTS HERE

import React from "react";
import Hero from "../../components/Hero/Hero";
import Scrollinfinite from "../../components/Scrollinfinite/Scrollinfinite";
import WorkShowcase from "../../components/Work image gallery/WorkShowcase";
import Work from "../../components/How we work/work";
import Brands from "../../components/Brands/Brands";
import '../../styles/global.css';
import Testimonials from "../../components/Testimonials";
import NewsInsight from "../../components/NewsInsight";
import WorkWithUs from "../../components/WorkWithUs";
import SolutionSection from "../../components/Services/services";
import StatsSection from "../../components/Counter/counter";
import WorkProcess from "../../components/Workflow/workflow";

const Home = () => {
  return (
    <main className="w-full bg-gray-950">
      {/* <Main /> */}
      <Hero />
      <Scrollinfinite />
 
      {/* <WorkProcess/> */}
      <SolutionSection/>
      <StatsSection/>

      <Work/>
      <WorkShowcase/>
      <Brands/> 





       <div className="App"> 
      
      <Testimonials />
      <NewsInsight />
      <WorkWithUs />
       
    </div>
    </main>
  );
};

export default Home;
