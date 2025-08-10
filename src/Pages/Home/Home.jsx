// IMPORT COMPONENTS HERE

import React from "react";
import Hero from "../../Components/Hero/Hero";
import Scrollinfinite from "../../Components/Scrollinfinite/Scrollinfinite";
import WorkShowcase from "../../components/Work image gallery/WorkShowcase";
import Work from "../../components/How we work/work";
import Brands from "../../components/Brands/Brands";

const Home = () => {
  return (
    <main className="w-full bg-gray-950">
      {/* <Main /> */}
      <Hero />
      <Scrollinfinite />
 
      <Work/>
      <WorkShowcase/>
      <Brands/> 
    </main>
  );
};

export default Home;
