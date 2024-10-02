import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import image1 from "../img/day6.png";
import image2 from "../img/gg.png";
import image3 from "../img/john.png";

import "../App.css";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

export default function Slide1() {
  const pagination = {
    clickable: true,
    dynamicBullets: true,
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className='mySwiper'>
        <SwiperSlide>
          <img
            src={image1}
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={image2}
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={image3}
            alt=''
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
