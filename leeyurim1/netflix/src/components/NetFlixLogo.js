// NetflixLogo.js
import React from "react";
import { motion } from "framer-motion";
import "./NetFlixLogo.css";

const letters = ["N", "E", "T", "F", "L", "I", "X"];

const NetflixLogo = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // 각 글자가 0.15초 간격으로 등장
      },
    },
  };

  const letterVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: [1.2, 1], // 확대 후 축소되는 효과
      opacity: 1,
      transition: {
        duration: 0.5, // 각 글자당 최소 0.5초 이상 지속
      },
    },
  };

  return (
    <motion.div
      className="netflix-logo"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span key={index} className="letter" variants={letterVariants}>
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default NetflixLogo;
