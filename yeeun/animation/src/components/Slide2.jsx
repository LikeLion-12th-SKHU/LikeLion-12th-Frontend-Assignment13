import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import image1 from "../img/p1.png";
import image2 from "../img/ppts.png";
import image3 from "../img/sabrina.png";

import "../App.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function Slide2() {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
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
