import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import img1 from "../img/dog1.webp";
import img2 from "../img/dog2.webp";
import img3 from "../img/dog3.jpg";

export default function SliderNavigation() {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={{ clickable: true }}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="Swiper"
    >
      <SwiperSlide>
        <img
          src={img1}
          alt="Slide 1"
          style={{
            display: "block",
            width: "450px",
            height: "auto",
            margin: "50px auto 0",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={img2}
          alt="Slide 2"
          style={{
            display: "block",
            width: "500px",
            height: "auto",
            margin: "50px auto 0",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={img3}
          alt="Slide 3"
          style={{
            display: "block",
            width: "500px",
            height: "auto",
            margin: "50px auto 0",
          }}
        />
      </SwiperSlide>
    </Swiper>
  );
}
