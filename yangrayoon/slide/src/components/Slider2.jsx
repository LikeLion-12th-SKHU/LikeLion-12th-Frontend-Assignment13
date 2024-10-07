import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import gu1 from "../img/gu1.jpeg";
import gu2 from "../img/gu2.jpg";
import gu3 from "../img/gu3.jpeg";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "../App.css";

export default function Slide1() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <img src={gu1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gu2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gu3} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
