import React from "react";
import "./services.css"; // Optional: use your own CSS or Tailwind

const services = [
  {
    id: 1,
    title: "Web & Mobile Development",
    description:
      "We create, products, brands, apps & websites for the companies all around the world class digital products",
  },
  {
    id: 2,
    title: "Interaction Design",
    description:
      "Metameet combines the idea of a 3D virtual environment with companies growing need for more personalised",
  },
  {
    id: 3,
    title: "Digital Marketing ",
    description:
      "We partnered digital marketing tocreate an interactive video tool will change the way businesses.",
  },
  {
    id: 4,
    title: "Branding and Strategy",
    description:
      "Funnels that increase response rates is just the first step for them and we can’t wait to see where it takes the",
  },

];

const SolutionSection = () => {
  return (
    <section className="solution-section">
      <div className="left-column">
        <h4 className="sub-heading">Services</h4>
        <h1 className="main-heading">Solution we provide</h1>
        <p className="description">
          With every single one of our clients we bring forth a deep passion for{" "}
          <span className="highlight">creative problem solving innovations</span>{" "}
          forward thinking brands boundaries
        </p>
        <div className="view-services">View All Services ↗</div>
      </div>

      <div className="right-column">
        {services.map((service) => (
          <div key={service.id} className="service-box">
            <div className="service-index">{service.id}</div>
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
            <div className="service-arrow">↗</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SolutionSection;
