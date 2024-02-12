import React from "react";
import TestimonialCard from "./TestimonialCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "../style/testimonial.css";



export default function Testimonial() {
  const testimonialProp = {
    photo:
      "https://iili.io/Jc7WTZb.jpg",
    name: "Name Here",
    designation: "Designation Here",
    para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, eligendi non voluptatibus hic animi officiis sapiente distinctio magnam possimus nisi dolorum iure.",
  };
  return (
    <div className="test-container">
      <div className="test-top">
        <h2>Our Testimonials </h2>
        <p>
          Testimonials regarding our products and services from our customers.
        </p>
      </div>
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
              <TestimonialCard details={testimonialProp} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image">
              <TestimonialCard details={testimonialProp} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image">
              <TestimonialCard details={testimonialProp} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image">
              <TestimonialCard details={testimonialProp} />
            </div>
          </SwiperSlide>
          
        </Swiper>
      </div>
    </div>
  );
}
