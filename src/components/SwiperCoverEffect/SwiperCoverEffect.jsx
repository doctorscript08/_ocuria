import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
import 'swiper/css';
import './coverEffect.css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

export default () => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <div className="box-slide">
      <button ref={prevRef} className='slide-btn prevRef'>
        <i class="fa-solid fa-arrow-left"></i>
      </button>


      <Swiper
        effect='coverflow'
        coverflowEffect={{
          depth: 200,
          modifier: 1,
          rotate: 30,
          scale: 1,
          slideShadows: false,
          stretch: 0
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
        navigation={{
          prevEl: '.prevRef',
          nextEl: '.nextRef'
        }}
        pagination={{ clickable: true }}
        slidesPerView={"auto"}
        grabCursor={true}
        initialSlide={5}
        autoplay={{ delay: 2000 }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className='swiper'
      >
        <SwiperSlide className='slide'>
          <img src="src/assets/images/galeria-1.jpg" />
          <div className="descricao">
            <p>
              Nome
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <img src="src/assets/images/galeria-2.jpg" />
          <div className="descricao">
            <p>
              Nome
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <img src="src/assets/images/galeria-3.jpg" />
          <div className="descricao">
            <p>
              Nome
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <img src="src/assets/images/galeria-4.jpg" />
          <div className="descricao">
            <p>
              Nome
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <img src="src/assets/images/galeria-5.jpg" />
          <div className="descricao">
            <p>
              Nome
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <img src="src/assets/images/galeria-6.jpg" />
          <div className="descricao">
            <p>
              Nome
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <img src="src/assets/images/galeria-7.jpg" />
          <div className="descricao">
            <p>
              Nome
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <img src="src/assets/images/galeria-8.jpg" />
          <div className="descricao">
            <p>
              Nome
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <img src="src/assets/images/galeria-9.jpg" />
          <div className="descricao">
            <p>
              Nome
            </p>
          </div>
        </SwiperSlide>
      </Swiper>

      <button ref={nextRef} className='slide-btn nextRef'>
        <i class="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
};
