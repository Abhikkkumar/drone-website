import React from "react";

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
            <img
              src="https://assets-global.website-files.com/5fdb2866020c200cd7fd7369/5feb5cc597cb067bc0b1ffc8_2-LinkedIn-7-1-2020-7-38-09-PM.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image">
            <img
              src="https://assets-global.website-files.com/5fdb2866020c200cd7fd7369/5feb5cc597cb06d52cb1ffd4_LinkedIn-6-28-2020-1-53-57-AM.png
              "
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image">
            <img
              src="https://assets-global.website-files.com/5fdb2866020c200cd7fd7369/5feb5cc597cb06bdedb1ffbc_2-LinkedIn-6-28-2020-12-35-04-AM.png
"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image">
            <img
              src="https://assets-global.website-files.com/5fdb2866020c200cd7fd7369/5feb5cc597cb067812b1ffc2_2-LinkedIn-6-28-2020-12-36-50-AM.png
"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image">
            <img
              src="https://assets-global.website-files.com/5fdb2866020c200cd7fd7369/5feb5cc597cb0602b1b1ffc5_2-LinkedIn-6-28-2020-12-48-16-AM.png
"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

