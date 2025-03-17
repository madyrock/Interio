import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const Home = () => {
  // Array of background images
  const slides = [
    "https://cdn.pixabay.com/photo/2018/10/28/12/37/bedroom-3778695_1280.jpg",
    "https://5.imimg.com/data5/SELLER/Default/2021/2/WI/XA/BF/61206760/living-room-interior-designing.jpg",
    "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?cs=srgb&dl=pexels-vika-glitter-392079-1648776.jpg&fm=jpg",
  ];

  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect="fade"
      loop
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      className="h-screen w-full"
      id="home"
    >
      {slides.map((image, index) => (
        <SwiperSlide key={index}>
          <div
            className="h-screen w-full bg-cover bg-center relative"
            style={{ backgroundImage: `url(${image})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/55 flex flex-col justify-center items-center">
              <h1 className="text-white text-3xl text-center p-8">
                Welcome to <br />
                <span className="font-bold text-6xl lg:text-8xl tracking-wide">
                  Interio
                </span>
              </h1>
              <p className="text-white text-center pt-4 mx-5">
                We provide the best interior design services
              </p>
              <button className="bg-white text-black px-6 py-3 rounded-lg mt-8 hover:bg-blue-400 hover:text-white transition">
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Home;
