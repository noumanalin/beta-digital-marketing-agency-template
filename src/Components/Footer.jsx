import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Footer.css';

const fadeInVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
 

const Footer = () => {
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setHoverPos({ x: x / 5, y: y / 5 });
  };

  const handleMouseLeave = () => {
    setHoverPos({ x: 0, y: 0 });
  };

  return (
    <motion.div
      className="footer-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="footer-main">
        {/* Main Footer Content (3 columns) */}
        <motion.div className="footer-content" variants={fadeInVariant}>
          
          {/* Logo & Description */}
          <motion.div className="footer-column" variants={fadeInVariant}>
            <div className="logo-section">
              <a href="/">
                <img
                  src="https://crowdytheme.com/wp/axtra/wp-content/uploads/2024/03/axtra-logo-light-2.webp"
                  alt="Axtra Logo"
                />
              </a>
            </div>
            <p className="footer-description">
              When do they work well, and when do they on us and finally, when do we actually need how can we avoid them.
            </p>
            <div className="social-icons">
              {/* Your SVG social icons go here */}
            </div>
          </motion.div>

          {/* Information Links */}
          <motion.div className="footer-column" variants={fadeInVariant}>
            <h4 className="footer-title">Information</h4>
            <ul className="footer-menu">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </motion.div>

          {/* Contact Details */}
          <motion.div className="footer-column" variants={fadeInVariant}>
            <h4 className="footer-title">Contact Us</h4>
            <p className="contact-text">Valentin, Street Road 24, New York, USA - 67452</p>
            <ul className="contact-list">
              <li><a href="tel:+02)-574-328-301">+02)-574-328-301</a></li>
              <li><a href="mailto:Info@Gmail.Com">Info@Gmail.Com</a></li>
            </ul>
          </motion.div>

        </motion.div>

        {/* Project Column with mouse-move CTA */}
        <motion.div className="project-column" variants={fadeInVariant}>
          <div className="project-section">
            <h3 className="project-title">Have a project in your mind?</h3>
            <br />
            <motion.a
              href="#"
              className="project-button"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              animate={{
                x: hoverPos.x,
                y: hoverPos.y,
              }}
              transition={{ type: 'spring', stiffness: 150, damping: 12 }}
            >
              Contact Us
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13">
                <path d="M2.40373 0V1.25892H9.96946L0 11.7017L0.847314 12.5892L10.8168 2.14646V10.0714H12.0186V0H2.40373Z"></path>
              </svg>
            </motion.a>
            <br /><br />
            <div className="working-hours">09 : 00 AM - 10 : 30 PM</div>
            <div className="working-days">Saturday - Thursday</div>
          </div>
          <div className="project-extended"></div>
        </motion.div>
      </div>
      

      {/* Footer Bottom */}
      <motion.div className="footer-bottom" variants={fadeInVariant}>
        <p className="copyright">
          © 2022 - 2025 | All rights reserved by <a href="#">Crowdyflow</a>
        </p>
        <form className="newsletter-form">
          <div className="newsletter-input">
            <input type="email" placeholder="Enter your email" required />
          </div>
          <button type="submit" className="newsletter-button">
            <svg aria-hidden="true" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path>
            </svg>
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Footer
