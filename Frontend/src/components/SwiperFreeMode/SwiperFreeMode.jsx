import {Swiper, SwiperSlide} from 'swiper/react'
import { FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "./swiperFreeMode.css"

export default () => {
    return (
      <div className="box-slide">
          <Swiper
            modules={[ FreeMode, Autoplay ]}
            autoplay={{delay: 2000}}
            effect='freemode'
            freeMode={{
                enabled: true,
                minimumVelocity: 0.02,
                momentum: true,
                momentumBounce: true,
                momentumBounceRatio: true,
                momentumRatio: 1,
                momentumVelocityRatio: 1,
                sticky: true
            }}
            grabCursor={true}
            slidesPerView={4}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className='swiper-free'
          >
            <SwiperSlide className='free-slide right'><img src="src/assets/images/galeria-1.jpg"/></SwiperSlide>
            <SwiperSlide className='free-slide'><img src="src/assets/images/galeria-2.jpg"/></SwiperSlide>
            <SwiperSlide className='free-slide'><img src="src/assets/images/galeria-3.jpg"/></SwiperSlide>
            <SwiperSlide className='free-slide'><img src="src/assets/images/galeria-4.jpg"/></SwiperSlide>
            <SwiperSlide className='free-slide'><img src="src/assets/images/galeria-5.jpg"/></SwiperSlide>
            <SwiperSlide className='free-slide'><img src="src/assets/images/galeria-6.jpg"/></SwiperSlide>
            <SwiperSlide className='free-slide'><img src="src/assets/images/galeria-7.jpg"/></SwiperSlide>
            <SwiperSlide className='free-slide'><img src="src/assets/images/galeria-8.jpg"/></SwiperSlide>
            <SwiperSlide className='free-slide'><img src="src/assets/images/galeria-9.jpg"/></SwiperSlide>
          </Swiper>
      </div>
    );
  };