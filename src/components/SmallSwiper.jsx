import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const SmallSwiper = () => {
  const slides = [
    { id: 1, img: "https://c1.wallpaperflare.com/preview/617/83/702/real-estate-sample-room-hainan.jpg" },
    { id: 2, img: "https://w0.peakpx.com/wallpaper/117/421/HD-wallpaper-living-room-modern-interior-design-stylish-interior-design-of-the-living-room-gray-green-living-room-luxurious-interiors.jpg" },
    { id: 3, img: "https://cdn.pixabay.com/photo/2018/10/28/12/37/bedroom-3778695_1280.jpg" },
  ];

  return (
    <div className='hidden lg:block absolute top-[250px] right-24 '>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        loop
        className="w-[200px] h-[300px] bg-cover"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="darken-effect">
              {slide.img ? (
                <img
                  src={slide.img}
                  alt={`Slide ${slide.id}`}
                  className="w-full bg-cover "
                />
              ) : (
                <div className="bg-gray-200 w-full h-full flex items-center justify-center">
                  <p className="text-2xl text-white">No image available</p>
                </div>
              )}
            </div>

            
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SmallSwiper