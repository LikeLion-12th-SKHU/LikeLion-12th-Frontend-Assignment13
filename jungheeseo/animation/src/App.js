import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 80px;
  font-weight: bold;
  color: #e50914;
  background-color: #000;
`;

const letterVariants = {
  hidden: { opacity: 0, scale: 0.5 }, // 초기 상태
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.15, // 각 글자가 0.15초 간격으로 등장
      duration: 0.5, // 애니메이션 지속 시간 0.5초
    },
  }),
};

const letters = ["N", "E", "T", "F", "L", "I", "X"];

const NetflixLogo = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

function App() {
  return (
    <div className="App">
      <NetflixLogo />
    </div>
  );
}

export default App;
