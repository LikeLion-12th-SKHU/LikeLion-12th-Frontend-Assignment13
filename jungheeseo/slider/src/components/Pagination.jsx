import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import img1 from "../img/day6.webp";
import img2 from "../img/newjeans.jpg";
import img3 from "../img/aespa.webp";

export default function SliderPagination() {
  return (
    <Swiper
      spaceBetween={30}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="Swiper"
    >
      <SwiperSlide>
        <img
          src={img1}
          alt="Slide 1"
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
