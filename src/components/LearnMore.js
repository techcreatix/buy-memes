import React from "react";
import About from "../assets/images/about.svg";
import Blog from "../assets/images/blog.svg";

import SomeThing from "../assets/images/else.svg";

import TBD from "../assets/images/tbd.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "swiper/css/pagination";
import "swiper/css/scrollbar";
export default function LearnMore() {
  const LearnData = [
    {
      Image: About,
    },
    {
      Image: Blog,
    },
    {
      Image: SomeThing,
    },
    {
      Image: TBD,
    },
  ];

  return (
    <div className="overflow-hidden no-scrollbar">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView="auto"
        loop={true}
        className="mySwiper2 "
        pagination={{
          clickable: true, 
          dynamicBullets: true, 
          renderBullet: (index, className) => {
            return `<span class="${className} custom-bullet">${
              index + 1
            }</span>`; 
          },
        }}
        breakpoints={{
          320: {
            slidesPerView: 1.5,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3, 
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {LearnData.map((item, index) => (
          <SwiperSlide key={index} className="" >
            <div className="items-center flex">
              <img src={item.Image} alt="" />
             
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
