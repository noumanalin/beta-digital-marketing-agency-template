import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import { motion } from 'framer-motion';

import "@fontsource/montserrat/500.css";
import { BsArrowUpRight } from "react-icons/bs";
import arrowDown from "../../assets/arrow-down.png";
import TypingText from "./TypingText";
 
const DigitalAgency = () => {
  const [count, setCount] = useState(0);
  const targetCount = 25;

  // ✅ Scroll function
  const scrollToSection = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const duration = 2000;
    const increment = targetCount / (duration / 16);

    const timer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= targetCount) {
          clearInterval(timer);
          return targetCount;
        }
        return Math.min(prevCount + increment, targetCount);
      });
    }, 16);

    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const itemVariants2 = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.mainContainer}>
        {/* First Column */}
        <div className={styles.firstColumn}>
          <div className={styles.firstsubcolumn2}>
            <h2 className={styles.firstsubcolumn3}>
              Strategy, Design, Solution
              <br />
              <BsArrowUpRight className={styles.firsticon} />
            </h2>
          </div>
          <h2>Development</h2>
        </div>

        {/* Middle Column - Grid */}
        <motion.div
          className={styles.middleColumn}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className={styles.gridItem} variants={itemVariants2}>
            <h1><TypingText text="Digital" /></h1>
          </motion.div>

          <motion.div className={styles.gridItem} variants={itemVariants2}>
            <div className={styles.agencyPro}>
              <h1 className={styles.promaaz}><TypingText text="agency" /></h1>
              <div className={styles.btnpro}>
                <button>pro</button>
              </div>
            </div>
          </motion.div>

          <motion.div className={styles.gridItem} variants={itemVariants2}>
            <h1><TypingText text="studio" /></h1>
          </motion.div>

          <motion.div className={styles.gridItem} variants={itemVariants}>
            <p>
              With every single one of our clients, we bring forth deep passion
              for <span className={styles.hilighttext}> creative problem solving </span>which is what we deliver.
            </p>
          </motion.div>
        </motion.div>

        {/* Third Column */}
        <div className={styles.thirdColumn}>
          {/* ✅ Clickable image with scroll */}
          <img
            src={arrowDown}
            alt=""
            className={styles.arrowDown}
            onClick={scrollToSection}
          />
          <div className={styles.projectsCount}>
            <p>{Math.floor(count)}k+</p>
            <p className={styles.para2}>
              Projects completed <br /> successfully
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalAgency;
