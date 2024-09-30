import './App.css';
import React from 'react';
import { motion } from 'framer-motion';

const NetflixArea = ['N', 'E', 'T', 'F', 'L', 'I', 'X']; // 넷플릭스 알파벳 배열
const rainbow = [
    '#FF0000',
    '#FF7F00',
    '#FFFF00',
    '#00FF00',
    '#0000FF',
    '#4B0082',
    '#8B00FF',
];
// 뭔가 밋밋하게 빨간색으로 하면 재미없을 거 같아서 무지개 색 레츠기릿~

const containerVariants = {
    hidden: { opacity: 0 }, // 처음에는 안 보이게
    visible: {
        opacity: 1, // 컨테이너 보이게 하기
        transition: {
            staggerChildren: 0.12, // 0.12초 속도로 차례대로 보이게
        },
    },
};

const letterVariants = {
    hidden: { scale: 0, opacity: 0 }, // 글자 크기 0, 투명하게
    visible: {
        scale: [1.5, 1], // 글자가 커보였다가 다시 작아지는 효과 과제 조건!
        opacity: 1, // 글자 완전 보이게
        transition: {
            duration: 0.5, // 글자 애니메이션이 0.5초 동안 지속되도록
            ease: 'easeInOut', // 애니메이션의 가속도를 부드럽게 설정
        },
    },
};

function App() {
    return (
        <div className="Container">
            <motion.div
                className="netflixLogo"
                variants={containerVariants}
                animate="visible"
                initial="hidden"
            >
                {NetflixArea.map((letter, index) => (
                    <motion.span
                        key={index}
                        variants={letterVariants}
                        style={{
                            color: rainbow[index % rainbow.length],
                        }} // 무지개 색상
                    >
                        {letter}
                    </motion.span>
                ))}
            </motion.div>
        </div>
    );
}

export default App;
