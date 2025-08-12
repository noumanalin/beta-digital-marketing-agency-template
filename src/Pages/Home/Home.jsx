
import Hero from "@/components/Hero/Hero";
import Scrollinfinite from "@/components/Scrollinfinite/Scrollinfinite";
import WorkShowcase from "@/components/WorkImageGallery/WorkShowcase";  
import Work from "@/components/HowWeWork/Work"; 
import Brands from "@/components/Brands/Brands";
import "@/styles/global.css";
import Testimonials from "@/components/Testimonials";
import NewsInsight from "@/components/NewsInsight";
import WorkWithUs from "@/components/WorkWithUs";
import SolutionSection from "@/components/Services/Services";
import StatsSection from "@/components/Counter/Counter";
import WorkProcess from "@/components/Workflow/Workflow";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  return (<>
    <Navbar/>
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

    <Footer />
      </>
  );
};

export default Home;
