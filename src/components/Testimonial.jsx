import React from "react";
import TestimonialCard from "./TestimonialCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";  
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "../style/testimonial.css";

import abhay from "../img/testimonial/AbhayPic-1.jpg";
import abhi from "../img/testimonial/abhi-img.jpeg";

export default function Testimonial() {
  const testimonialProp = {
    photo: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Name Here",
    designation: "Designation Here",
    para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, eligendi non voluptatibus hic animi officiis sapiente distinctio magnam possimus nisi dolorum iure.",
  };
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
            <TestimonialCard details={testimonialProp} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image">
            <TestimonialCard  details={testimonialProp}/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image">
            <TestimonialCard details={testimonialProp}/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image">
            <TestimonialCard  details={testimonialProp}/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image">
            <TestimonialCard details={{photo:abhay,name:"Abhay Gupta",designation:"Sr. Developer",para:"I love the tech world sooo much...Drones are one of the most exciting thing I have come across in my life and this company provides excellent quality drones."}}/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image">
            <TestimonialCard details={{photo:abhi,name:"Abhishek",designation:"Sr. Developer",para:"I love the tech world sooo much...Drones are one of the most exciting thing I have come across in my life and this company provides excellent quality drones."}}/>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
