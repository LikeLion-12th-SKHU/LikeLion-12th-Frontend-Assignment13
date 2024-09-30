// AnimalSlider.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "styled-components";

const animalData = [
  { id: 1, name: "Lion", image: "./img/Lion.jpg" },
  { id: 2, name: "Elephant", image: "./img/Elephant.png" },
  { id: 3, name: "Tiger", image: "./img/Tiger.png" },
];

const SlideContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
`;

const TextOverlay = styled.h2`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 2rem;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
`;

const AnimalSlider = () => {
  return (
    <Swiper
      modules={[Autoplay, EffectFade, Navigation, Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      effect="fade"
      navigation
      pagination={{ clickable: true }}
      loop={true}
    >
      {animalData.map((animal) => (
        <SwiperSlide key={animal.id}>
          <SlideContent>
            <Image src={animal.image} alt={animal.name} />
            <TextOverlay>{animal.name}</TextOverlay>
          </SlideContent>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AnimalSlider;
