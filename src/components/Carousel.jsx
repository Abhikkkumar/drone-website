import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

import "../style/carousel.css";

export default function Carousel() {
  return (
    <div className="carousel">
      <>
        <Swiper
          className="mySwiper"
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable:true
          }}
          modules={[Autoplay, Pagination]}
        >
          <SwiperSlide className="slides s1">
            <div className="slides-inner">
              {" "}
              <h2>Slide 1</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slides s2">
            <div className="slides-inner">
              <h2>Slide 2</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slides s3">
            <div className="slides-inner">
              <h2>Slide 3</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slides s4">
            <div className="slides-inner">
              <h2>Slide 4</h2>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
}
