import "../style/App.css";
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

// 넷플릭스 로고 배열로 저장
const NetflixLogo = ['N', 'E', 'T', 'F', 'L', 'I', 'X']; // 넷플릭스 알파벳 배열
const logo = ['#F30006', '#8A0003'];

const containerVariants = {
    hidden: { opacity: 0 }, 
    visible: {
        opacity: 1, 
        transition: {
            staggerChildren: 0.15, // 0.15초 간격
        },
    },
};

const letterVariants = {
    hidden: { scale: 0.8, opacity: 0 }, 
    visible: {
        scale: [1.5, 1], // 글자가 커보였다가 다시 작아지는 효과
        opacity: 1, 
        transition: {
            duration: 0.5, // 0.5초 지속
            ease: 'easeInOut',
        },
    },
};

function Netflix() {
    return (
        <div className="Container">
            <motion.div
                className="netflix-logo"
                variants={containerVariants} // 순차적으로 등장
                animate="visible"
                initial="hidden"
            >
                {NetflixLogo.map((letter, index) => (
                    <motion.span
                        key={index}
                        variants={letterVariants}
                        style={{
                            color: logo[index % logo.length],
                        }} // 2가지 색상 번갈아 등장
                    >
                        {letter}
                    </motion.span>
                ))}
            </motion.div>
            <Link to="/japan">
                일본 여행 관광지 소개하기
            </Link>
            <p>
            <Link to="/japan2">
                일본 여행 먹거리 소개하기
            </Link>
            </p>
        </div>
    );
}

export default Netflix;
