import React from "react";
import "./workflow.css";

const WorkProcess = () => {
  return (
    <div className="work-process-container">
        <h6 className="section-subtitle">Workflow</h6>
      <h1 className="section-title">How we work</h1>
      
      <div className="process-steps">
        <div className="step">
          <h3 className="step-number">Step 01</h3>
          <h4 className="step-title">Audience</h4>
          <p className="step-description">
            Having these the marketplace to your business
          </p>
        </div>
        
        <div className="step">
          <h3 className="step-number">Step 02</h3>
          <h4 className="step-title">Plan & Sketch</h4>
          <p className="step-description">
            Delicate and long-lasting with vitamins and nutritious
          </p>
        </div>
        
        <div className="step">
          <h3 className="step-number">Step 03</h3>
          <h4 className="step-title">Customize</h4>
          <p className="step-description">
            Creating brand identities for the digital experiences
          </p>
        </div>
        
        <div className="step">
          <h3 className="step-number">Step 04</h3>
          <h4 className="step-title">User Testing</h4>
          <p className="step-description">
            We look forward to engage with beyond the conventional
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;