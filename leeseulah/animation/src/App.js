import React from "react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const word = "NETFLIX".split(); // N, E, T, F, L, I, X 각 글자로 분할

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // 0.15초 간격으로 등장
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: [1.2, 1], // 확대 후 원래 크기로 축소
      transition: {
        duration: 0.6, // 최소 0.5초 이상 지속되도록 설정
      },
    },
  };

  return (
    <div className="netflix-container">
      <motion.div
        className="netflix-logo"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {word.map((char, index) => (
          <motion.span key={index} className="letter" variants={letter}>
            {char}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}

export default App;
