import React from "react";
import { motion } from "framer-motion";
import "./App.css";

const NetflixLogo = () => {
  const letters = ["N", "E", "T", "F", "L", "I", "X"];

  const letterVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (i) => ({
      opacity: 1,
      scale: [1.2, 0.8, 1],
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div className='logo-container'>
      <div className='netflix-logo'>
        {" "}
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            custom={index}
            initial='hidden'
            animate='visible'
            variants={letterVariants}
            className='netflix-letter'>
            {" "}
            {letter}{" "}
          </motion.span>
        ))}{" "}
      </div>{" "}
    </div>
  );
};

export default NetflixLogo;
