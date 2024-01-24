import React from "react";
import TestimonialCard from "./TestimonialCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/swiper-bundle.css";

import "../style/testimonial.css";

export default function Testimonial() {
  return (
    <div className="carousel-tesimonial">
      <Swiper
        spaceBetween={20}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
        breakpoints={{
          // when window width is >= 320px

          600: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <div className="image">
            <TestimonialCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image">
            <TestimonialCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image">
            <TestimonialCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image">
            <TestimonialCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image">
            <TestimonialCard />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
