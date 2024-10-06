import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

// 이미지 import
import USJImage from '../img/USJ.jpg';
import DotonboriImage from '../img/Dotonbori.jpg';
import KimonoImage from '../img/Kimono.jpg';

// 스타일 import 
import '../style/japan.css'

const Japan = () => {
  // 현재 슬라이드 인덱스를 추적하는 상태
  const [activeIndex, setActiveIndex] = useState(0);

  // 각 슬라이드에 해당하는 오토바이 설명 배열
  const descriptions = [
    "오사카의 유니버셜 스튜디오 재팬입니다.",
    "오사카의 도톤보리입니다.",
    "교토의 기모노를 입고 온 야사카 신사입니다."
  ];

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>일본 관광지 추천</h1>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        // 슬라이드가 변경될 때 호출되는 함수
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        <SwiperSlide>
          <img src={USJImage} alt="USJ" /> 
        </SwiperSlide>
        <SwiperSlide>
          <img src={DotonboriImage} alt="Dotonbori" /> 
        </SwiperSlide>
        <SwiperSlide>
          <img src={KimonoImage} alt="Kimono" /> 
        </SwiperSlide>
      </Swiper>

      {/* 현재 슬라이드에 맞는 설명 표시 */}
      <p style={{ textAlign: "center" }}>{descriptions[activeIndex]}</p>
      <div style={{ textAlign: "center" }}>
      <Link to="/" >
        넷플릭스 로고 소개하기
      </Link>
      <p>
      <Link to="/japan2" >
        일본 여행 먹거리 소개하기
        </Link>
        </p>
      </div>
    </div>
  );
};

export default Japan;
