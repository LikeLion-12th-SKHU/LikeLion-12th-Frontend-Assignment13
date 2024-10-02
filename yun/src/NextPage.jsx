import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import son from "./img/son.jpg";
import Kim from "./img/Kim.jpg";
import hwang from "./img/hwang.jpg";
import Lee from "./img/Lee.jpg";
import park from "./img/park.jpg";
import don from "./img/don.jpg";
import kimchi from "./img/kimchi.jpg";
import kka from "./img/kka.jpg";
import mac from "./img/mac.jpg";
import ra from "./img/ra.jpg";
import superson from "./img/superson.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
function NextPage() {
  const navigate = useNavigate();
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img src={don} alt="돈까스" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={kimchi} alt="김볶" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={kka} alt="까르보" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mac} alt="맥" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ra} alt="라면" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={superson} alt="수퍼쏜" />
        </SwiperSlide>
      </Swiper>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <img src={son} alt="우리흥" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={park} alt="우리박" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Kim} alt="우리김" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Lee} alt="우리이" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hwang} alt="우리황" />
        </SwiperSlide>
      </Swiper>
      <button className="Net" onClick={() => navigate("/")}>
        NETFLIX
      </button>
    </>
  );
}

export default NextPage;
