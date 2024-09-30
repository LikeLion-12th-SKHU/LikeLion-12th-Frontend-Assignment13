import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Logo = styled.div`
  background-color: black;
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  height: 100vh;
  font-size: 150px;
`;

const text = "NETFLIX"; // 보여줄 글자

const letterVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1.3,
    transition: { duration: 0.8 }, // 글자당 최소 0.5초 이상 지속
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // 0.15초 간격으로 등장
    },
  },
};

const NetflixLogo = () => {
  return (
    <Logo>
      <motion.div
        className="logo"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ display: "flex", gap: "0.5rem" }} // 글자 간 간격 설정
      >
        {text.split("").map((char, index) => (
          <motion.span key={index} variants={letterVariants}>
            {char}
          </motion.span>
        ))}
      </motion.div>
    </Logo>
  );
};

export default NetflixLogo;
