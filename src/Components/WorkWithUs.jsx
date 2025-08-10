import { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/WorkwithUs.css';

const WorkWithUs = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse move handler for heading & text
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 20;
    const y = (e.clientY - top - height / 2) / 20;
    setMousePosition({ x, y });
  };

  // Mouse move & leave for button hover
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });
  const handleButtonMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 4;
    const y = (e.clientY - rect.top - rect.height / 2) / 4;
    setHoverPos({ x, y });
  };
  const handleButtonLeave = () => {
    setHoverPos({ x: 0, y: 0 });
  };

  return (
    <section className="work-with-us" onMouseMove={handleMouseMove}>
      <div className="container">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.2s ease-out'
          }}
        >
          Work With Us
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          style={{
            transform: `translate(${mousePosition.x / 2}px, ${mousePosition.y / 2}px)`,
            transition: 'transform 0.2s ease-out'
          }}
        >
          We would love to hear more about the project.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          className="cta-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://crowdytheme.com/wp/axtra/contact-us-dark/"
            className="cta-button"
            onMouseMove={handleButtonMove}
            onMouseLeave={handleButtonLeave}
            animate={{
              x: hoverPos.x,
              y: hoverPos.y,
            }}
            transition={{ type: 'spring', stiffness: 150, damping: 12 }}
          >
            Work With Us
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13">
              <path d="M2.40373 0V1.25892H9.96946L0 11.7017L0.847314 12.5892L10.8168 2.14646V10.0714H12.0186V0H2.40373Z"></path>
            </svg>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default WorkWithUs;
