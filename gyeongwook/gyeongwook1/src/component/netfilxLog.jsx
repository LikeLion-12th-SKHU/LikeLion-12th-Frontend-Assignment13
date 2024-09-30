import React from "react";
import { color, motion } from "framer-motion";

const NetflixLogo = () => {
  // 개별 글자에 대한 애니메이션 설정
  const letterVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1.3,
      transition: {
        delay: i * 0.15, // 각 글자가 0.15초 간격으로 나타남
        duration: 0.5, // 애니메이션이 최소 0.5초 동안 지속
      },
    }),
  };

  // 'NETFLIX' 글자를 배열로 변환
  const letters = ["N", "E", "T", "F", "L", "I", "X"];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "black",
      }}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        style={{
          display: "flex",
          color: "red",
          fontSize: "5rem",
          fontWeight: "bold",
        }}
      >
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={letterVariants}
            style={{ margin: "0 5px" }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default NetflixLogo;
