import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import image1 from '../img/나띠.jpg';
import image2 from '../img/안유진.jpg';
import image3 from '../img/에스파카리나.jpg';

import '../styles/styles1.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Slide2() {
    return (
        <>
            <Swiper
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={image1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image3} alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
