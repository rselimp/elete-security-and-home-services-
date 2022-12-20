import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import bannerImage1 from '../../../images/bg1.jpg';
import bannerImage2 from '../../../images/bg2.jpg';
import bannerImage3 from '../../../images/bg3.jpg';
import ImageSlider, { Slide } from "react-auto-image-slider";

const Banners = () => {
    return (
        <>

<div className=''>
<ImageSlider effectDelay={200} autoPlayDelay={1000}>
      <Slide>
        
        <img style={{width:'1400px',position:'relative'}} alt="img2" src={bannerImage1}/>
    
      </Slide>
      <Slide>
        <img style={{width:'1400px',position:'relative'}} alt="img2" src={bannerImage2}/>
      </Slide>
      <Slide>
        <img style={{width:'1400px',position:'relative'}} alt="img1" src={bannerImage3} />
      </Slide>
    </ImageSlider>

</div>
        
            {/* <Swiper
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
                        className="object-fill w-full"
                        src={bannerImage1} 
                        alt=""
                        
                    />
                    
                </SwiperSlide>
                
                <SwiperSlide>
                    <img
                        className="object-fill w-full"
                        src={bannerImage2}
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill w-full"
                        src={bannerImage3}
                        alt=""
                    />
                </SwiperSlide>
            </Swiper> */}
        </>
    );
};

export default Banners;