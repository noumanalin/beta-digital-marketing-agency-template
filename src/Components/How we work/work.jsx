// src/components/work.jsx
import React from 'react';
import './work.css'; // Import the custom CSS for additional styling and background elements

const Work = () => {
  // Define the data for each step
  const steps = [
    {
      stepNum: '01',
      title: 'Audience',
      description: 'Having these the marketplace to your business',
    },
    {
      stepNum: '02',
      title: 'Plan & Sketch',
      description: 'Delicate and long-lasting with vitamins and nutritions',
    },
    {
      stepNum: '03',
      title: 'Customize',
      description: 'Creating brand identities for the digital ex periences',
    },
    {
      stepNum: '04',
      title: 'User Testing',
      description: 'We look forward to engage with beyond the conventional',
    },
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black text-white overflow-hidden font-inter">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>


      {/* Content Section */}
      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Subtitle */}
        <p className="text-gray-400 uppercase tracking-widest text-sm mb-2">Workflow</p>
        {/* Main Title */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-16 leading-tight">
          How we work
        </h2>

        {/* Steps Container */}
        <div className="flex flex-col md:flex-row justify-center items-start md:items-stretch gap-8 md:gap-4 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-6 sm:p-8 flex flex-col items-start text-left w-full md:w-1/4"
            >
              {/* Step number and dot - now stacked vertically */}
              <div className="flex flex-col items-start mb-4 relative z-10">
                {/* Increased mb-2 to mb-4 for more vertical space */}
                <span className="text-3xl sm:text-4xl font-bold text-white mb-4">Step {step.stepNum}</span>
                {/* Added self-center to horizontally center the dot */}
                <div className="w-3 h-3 rounded-full bg-lime-400 shadow-lime-400 shadow-md self-center"></div> {/* Green dot */}
              </div>

              {/* Large translucent number in the background (watermark/backdrop) */}
              <span className="absolute bottom-8 left-8 text-[8rem] sm:text-[10rem] font-extrabold text-gray-800 opacity-50 pointer-events-none z-0 leading-none">
                {step.stepNum}
              </span>

              {/* Step Title */}
              <h3 className="text-xl sm:text-2xl font-bold mb-2 relative z-10">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-gray-400 text-base sm:text-lg relative z-10">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
