import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import b5 from "../../assets/b5.avif"
import b11 from "../../assets/b11.avif"
import b12 from "../../assets/b12.avif";

const BannerSlider = () => {
  return (
    <div className="w-11/12 mx-auto mt-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        effect="fade"
        lazy={true}
      >
        {[b5, b11, b12].map((img, i) => (
          <SwiperSlide key={i}>
            <div className="relative">
              <img
                src={img}
                loading="lazy"
                className="w-full h-[350px] md:h-[400px] rounded-lg object-cover"
                alt={`Slide ${i}`}
              />

              {/* Optional Overlay + Text */}
              <div className="absolute inset-0 bg-opacity-30 rounded-lg flex items-center justify-center">
                <h2 className="text-white text-xl md:text-5xl font-extrabold">
                  Beautiful Nature Collection
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;
