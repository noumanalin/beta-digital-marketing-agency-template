import React from 'react';
import './work.css';

const Work = () => {
  const steps = [
    { stepNum: '01', title: 'Audience', description: 'Having these the marketplace to your business' },
    { stepNum: '02', title: 'Plan & Sketch', description: 'Delicate and long-lasting with vitamins and nutritions' },
    { stepNum: '03', title: 'Customize', description: 'Creating brand identities for the digital experiences' },
    { stepNum: '04', title: 'User Testing', description: 'We look forward to engage with beyond the conventional' },
  ];

  return (
    <section className="work-section">
      {/* Blobs */}
      <div className="blob blob-green"></div>
      <div className="blob blob-blue"></div>
      <div className="blob blob-purple"></div>

      {/* Content */}
      <div className="work-container">
        <p className="work-subtitle">Workflow</p>
        <h2 className="work-title">How we work</h2>

        <div className="work-steps">
          {steps.map((step, index) => (
            <div key={index} className="work-step">
              <div className="step-header">
                <span className="step-number">Step {step.stepNum}</span>
                <div className="step-dot"></div>
              </div>
              <span className="step-watermark">{step.stepNum}</span>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
