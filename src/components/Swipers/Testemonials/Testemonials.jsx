import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "./testemonials.css"

export default ({foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8, foto9}) => {
  return (
    <div className="box-slide">
      <Swiper
        modules={[FreeMode, Autoplay]}
        autoplay={{ delay: 2000 }}
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
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1620: { slidesPerView: 4 }
        }}
        navigation={{
          prevEl: '.prevRef',
          nextEl: '.nextRef'
        }}
        grabCursor={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className='swiper-free'
      >
        <SwiperSlide className='free-slide'>
            <div className="comentario">
                <div className="foto">
                    <img src={foto1} alt="foto do usuario" />
                </div>
                <div className="textos">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, similique alias</p>
                    <span className="classificacao">stars</span>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='free-slide'>
            <div className="comentario">
                <div className="foto">
                    <img src={foto1} alt="foto do usuario" />
                </div>
                <div className="textos">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, similique alias</p>
                    <span className="classificacao">stars</span>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='free-slide'>
            <div className="comentario">
                <div className="foto">
                    <img src={foto1} alt="foto do usuario" />
                </div>
                <div className="textos">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, similique alias</p>
                    <span className="classificacao">stars</span>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};