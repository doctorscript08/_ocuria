// components/Slider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="rounded-lg overflow-hidden shadow-lg"
      >
        <SwiperSlide>
          <img src="src/assets/images/galeria-1.jpg" alt="Slide 1" className="w-full h-64 object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/assets/images/galeria-2.jpg" alt="Slide 2" className="w-full h-64 object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/assets/images/galeria-3.jpg" alt="Slide 3" className="w-full h-64 object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/assets/images/galeria-4.jpg" alt="Slide 4" className="w-full h-64 object-cover" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;