import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Autoplay, Pagination } from "swiper/modules";

const cards = [
  { id: 1, title: "Card 1", image: "https://images.pexels.com/photos/3356416/pexels-photo-3356416.jpeg?cs=srgb&dl=pexels-houzlook-3356416.jpg&fm=jpg" },
  { id: 2, title: "Card 2", image: "https://i.pinimg.com/474x/10/d9/eb/10d9eb220c737172e8529060f19965a5.jpg" },
  { id: 3, title: "Card 3", image: "https://img.freepik.com/premium-photo/luxury-living-room-foyer-design_815143-828.jpg" },
  { id: 4, title: "Card 4", image: "https://i.pinimg.com/originals/aa/f6/0f/aaf60fb0390642dbf4080b66f7d43d40.png" },
];

const Projects = () => {
  return (
    <div id="projects" className="w-full py-24  text-center">
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={800}
        transitionTimingFunction="ease-in-out"
        modules={[Autoplay]}
        className="mySwiper"
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="bg-white p-4 ">
              <img src={card.image} alt={card.title} className="w-full h-100 object-cover rounded-lg " />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
