import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

// 이미지 import
import ButterBeerImage from '../img/butterBeer.jpg';
import HoedeopbapImage from '../img/Hoedeopbap.jpg';
import RamenNoodleImage from '../img/RamenNoodles.jpg';

// 스타일 import 
import '../style/japan2.css'

const Japan2 = () => {
  // 현재 슬라이드 인덱스를 추적하는 상태
  const [activeIndex, setActiveIndex] = useState(0);

  // 각 슬라이드에 해당하는 오토바이 설명 배열
  const descriptions = [
    "유니버셜 스튜디오 재팬에 위치한 버터맥주입니다.",
    "교토점에 위치한 회덮밥입니다.",
    "우메다점에 위치한 이치란 라멘입니다."
  ];

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>일본 먹거리 추천</h2>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} // 자동재생 추가
        navigation={true}
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        // 슬라이드가 변경될 때 호출되는 함수
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        <SwiperSlide>
          <img src={ButterBeerImage} alt="ButterBeerImage" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HoedeopbapImage} alt="HoedeopbapImage" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={RamenNoodleImage} alt="RamenNoodleImage" />
        </SwiperSlide>
      </Swiper>

      {/* 현재 슬라이드에 맞는 설명 표시 */}
      <p style={{ textAlign: "center" }}>{descriptions[activeIndex]}</p>
      <div style={{ textAlign: "center" }}>
      <Link to="/" >
        넷플릭스 로고 소개하기
      </Link>
      <p>
      <Link to="/japan">
        일본 여행 관광지 소개하기
      </Link>
      </p>
      </div>
    </div>
  );
};

export default Japan2;