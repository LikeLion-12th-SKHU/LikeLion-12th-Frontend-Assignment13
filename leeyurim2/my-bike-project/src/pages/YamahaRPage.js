import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination } from "swiper/modules";

const YamahaRPage = () => {
  // 현재 슬라이드 인덱스를 추적하는 상태
  const [activeIndex, setActiveIndex] = useState(0);

  // 각 슬라이드에 해당하는 오토바이 설명 배열
  const descriptions = [
    "Yamaha R1은 고성능의 슈퍼 스포츠 바이크로, 트랙과 도로 모두에서 우수한 성능을 발휘합니다.",
    "Yamaha R3은 초보자와 중급 라이더에게 적합한 스포츠 바이크로, 우수한 핸들링과 성능을 자랑합니다.",
    "Yamaha R6은 경량 스포츠 바이크로, 트랙 주행에 최적화된 디자인과 성능을 제공합니다.",
  ];

  return (
    <div>
      <h2>Yamaha R 시리즈</h2>
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
          <img src="/images/yamaha_r1_image.jpg" alt="Yamaha R1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/yamaha_r3_image.jpg" alt="Yamaha R3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/yamaha_r6_image.jfif" alt="Yamaha R6" />
        </SwiperSlide>
      </Swiper>

      {/* 현재 슬라이드에 맞는 설명 표시 */}
      <p>{descriptions[activeIndex]}</p>
    </div>
  );
};

export default YamahaRPage;
