// MusicSlider.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "styled-components";

const Title = styled.div`
  font-weight: 900;
  margin-top: 20px;
`;

const Main = styled.div`
  width: 300px;
  height: 580px;
  display: flex;
  flex-direction: column;
  background-color: skyblue;
  margin: auto;
  border-radius: 20px;
  text-align: center;
`;

const Image = styled.img`
  display: box;
  border-radius: 30px;
  object-fit: cover;
  height: 300px;
  margin-top: 50px;
`;

const musicData = [
  { id: "아이유", title: "Blueming", image: "./img/IU.jpeg" },
  { id: "태연", title: "I", image: "./img/Taeyeon.png" },
  { id: "선미", title: "가시나", image: "./img/Sunmee.jpg" },
];

const MusicSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
    >
      {musicData.map((song) => (
        <SwiperSlide key={song.id}>
          <Main>
            <Title>{song.id}</Title>
            <Image src={song.image} alt={song.title}></Image>
            <h2>{song.title}</h2>
          </Main>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MusicSlider;
