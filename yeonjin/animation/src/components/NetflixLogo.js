import React from 'react';
import { motion } from 'framer-motion';
import '../styles/NetflixLogo.css'; 

const letters = ["N", "E", "T", "F", "L", "I", "X"];

const letterVariants = {
  hidden: { opacity: 0, scale: 0.5 }, 
  visible: (i) => ( {
    scale: 1,
    opacity: 1,
    transition: {
      delay: i * 0.15, 
      duration: 0.9, 
      ease: "easeInOut", //이걸 넣으면 더 부드럽게 나타낼수있다고해서 넣어봤어용
    },
  }),
};

const NetflixLogo = () => {
  return (
    <div className="logo-wrapper">
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          custom={i}
          initial="hidden"
          animate="visible"
          variants={letterVariants}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};

export default NetflixLogo;

//테스트
