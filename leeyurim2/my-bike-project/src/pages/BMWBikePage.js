import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination } from "swiper/modules";

const BMWBikePage = () => {
  // 현재 슬라이드 인덱스를 추적하는 상태
  const [activeIndex, setActiveIndex] = useState(0);

  // 각 슬라이드에 해당하는 오토바이 설명 배열
  const descriptions = [
    "BMW S1000RR은 고성능 슈퍼바이크로서, 트랙에서의 성능과 도로 주행 모두에 적합한 모델입니다.",
    "BMW R1250은 투어링 바이크로, 장거리 주행에 적합한 편안함과 강력한 엔진을 제공합니다.",
  ];

  return (
    <div>
      <h2>BMW 오토바이</h2>
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
          <img src="/images/bmw_s1000rr_image.jfif" alt="BMW S1000RR" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/bmw_r1250_image.jfif" alt="BMW R1250" />
        </SwiperSlide>
      </Swiper>

      {/* 현재 슬라이드에 맞는 설명 표시 */}
      <p>{descriptions[activeIndex]}</p>
    </div>
  );
};

export default BMWBikePage;
