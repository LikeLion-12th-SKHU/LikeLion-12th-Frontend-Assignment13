import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

import image01 from "../assets/champ01.jpg";
import image02 from "../assets/champ02.jpg";
import image03 from "../assets/champ03.jpg";
import image04 from "../assets/champ04.jpg";

const BasicSlider = () => {
  return (
    <div style={{ width: "80%", maxWidth: "800px" }}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
      >
        <SwiperSlide>
          <img
            src={image01}
            alt="Image 1"
            style={{ width: "100%", height: "auto" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={image02}
            alt="Image 2"
            style={{ width: "100%", height: "auto" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={image03}
            alt="Image 3"
            style={{ width: "100%", height: "auto" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={image04}
            alt="Image 4"
            style={{ width: "100%", height: "auto" }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BasicSlider;
