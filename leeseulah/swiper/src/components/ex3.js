/*
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
//FreeMode는 Swiper에서 자유롭게 스크롤할 수 있는 모드를 활성화하는 기능입니다.
// 이 모드를 활성화하면 사용자가 슬라이드를 터치하거나 드래그할 때,
//슬라이드가 딱딱하게 고정되지 않고 자연스럽게 스크롤되는 느낌을 제공합니다.
//즉, 슬라이드를 마치 페이지 단위가 아닌 부드럽게
//이어지는 리스트처럼 스크롤할 수 있습니다.
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "../styles/ex3.css";
import image1 from "../img/하츄핑.png";
import image2 from "../img/조아핑.png";
import image3 from "../img/믿어핑.png";

//**"thumbs"**는 Swiper에서 **썸네일 슬라이더(thumbnail slider)**를
//설정할 때 사용하는 속성입니다. 보통 두 개의 슬라이더가 연동되어 있을 때,
//메인 슬라이더와 썸네일 슬라이더가 함께 동작하도록 만드는 기능을 합니다.

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined} // thumbsSwiper가 null이 아닐 때만 설정
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper1"
      >
        <SwiperSlide>
          <img src={image1} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="Slide 3" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src={image1} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="Slide 3" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
*/
