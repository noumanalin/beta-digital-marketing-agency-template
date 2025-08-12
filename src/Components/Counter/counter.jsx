import React, { useState, useEffect } from "react";
import "./counter.css";

const StatsSection = () => {
  const [counters, setCounters] = useState([
    { value: 0, target: 25, text: "Project completed", suffix: "K" },
    { value: 0, target: 8, text: "Happy customers", suffix: "K+" },
    { value: 0, target: 15, text: "Years experiences", suffix: "" },
    { value: 0, target: 98, text: "Awards achievement", suffix: "" },
  ]);

  useEffect(() => {
    const duration = 2000;
    const startTime = Date.now();

    const updateCounters = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCounters(prevCounters => 
        prevCounters.map(counter => ({
          ...counter,
          value: Math.floor(counter.target * progress)
        }))
      );

      if (progress < 1) {
        requestAnimationFrame(updateCounters);
      }
    };

    updateCounters();
  }, []);

  return (
    <div className="stats-section-container">
      <div className="stats-content-wrapper">
        <div className="stats-container">
          <div className="stats-grid">
            {counters.map((counter, index) => (
              <div key={index} className="stat-item">
                <div className="stat-value">
                  {counter.value}
                  {counter.suffix && <span className="stat-suffix">{counter.suffix}</span>}
                </div>
                <div className="stat-label">{counter.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;