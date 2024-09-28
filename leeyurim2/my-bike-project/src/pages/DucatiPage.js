import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination } from "swiper/modules";

const DucatiPage = () => {
  // 현재 슬라이드 인덱스를 추적하는 상태
  const [activeIndex, setActiveIndex] = useState(0);

  // 각 슬라이드에 해당하는 오토바이 설명 배열
  const descriptions = [
    "Ducati Panigale는 최상의 트랙 주행 성능을 제공하는 슈퍼바이크입니다.",
    "Ducati Monster는 도시 주행에 적합한 네이키드 바이크로, 스타일과 성능을 겸비하고 있습니다.",
  ];

  return (
    <div>
      <h2>Ducati 오토바이</h2>
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
          <img src="/images/ducati_panigale_image.png" alt="Ducati Panigale" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/ducati_monster_image.jpg" alt="Ducati Monster" />
        </SwiperSlide>
      </Swiper>

      {/* 현재 슬라이드에 맞는 설명 표시 */}
      <p>{descriptions[activeIndex]}</p>
    </div>
  );
};

export default DucatiPage;
