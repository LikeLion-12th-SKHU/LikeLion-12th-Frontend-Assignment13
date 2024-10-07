// Vertical

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation, EffectCards } from "swiper/modules";

import "../styles/ex2.css";
import image1 from "../img/하츄핑.png";
import image2 from "../img/조아핑.png";
import image3 from "../img/믿어핑.png";

export default function App() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation, EffectCards]}
        className="mySwiper"
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

/*
// Autoplay progress

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles/ex2.css";
import image1 from "../img/하츄핑.png";
import image2 from "../img/조아핑.png";
import image3 from "../img/믿어핑.png";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  const progressCircle = useRef(null); //프로그레스 서클 null
  const progressContent = useRef(null); //프로그레스 컨텐트 null
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true} //센터드 슬라이즈 중앙에 배치하기
        autoplay={{
          delay: 2500,
          disableOnInteraction: false, //디세이블 온 인터랙션 을 false 로 해주기
        }}
        pagination={{
          clickable: true, //"clickable" 속성은 슬라이드 하단에 나타나는 점(dot)들이 클릭 가능하게 만들어줍니다. 사용자가 그 점을 클릭하면 해당 슬라이드로 이동할 수 있습니다.
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
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
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
*/
