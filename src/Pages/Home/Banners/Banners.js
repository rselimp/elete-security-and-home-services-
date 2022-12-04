import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import bannerImage1 from '../../../images/bg1.jpg';
import bannerImage2 from '../../../images/bg2.jpg';
import bannerImage3 from '../../../images/bg3.jpg';

const Banners = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                  <img
                        className="object-fill w-full h-96"
                        src={bannerImage1} 
                        alt=""
                        
                    />
                    
                </SwiperSlide>
                
                <SwiperSlide>
                    <img
                        className="object-fill w-full h-96"
                        src={bannerImage2}
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill w-full h-96"
                        src={bannerImage3}
                        alt=""
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banners;