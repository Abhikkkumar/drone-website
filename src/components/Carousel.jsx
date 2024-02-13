import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay } from "swiper/modules";
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
          
          modules={[Autoplay]}
        >
          <SwiperSlide className="slides s4">
            <div className="slides-inner">
              {/* <h2>Slide 4</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p> */}
            </div>
          </SwiperSlide>
          <SwiperSlide className="slides s1">
            <div className="slides-inner">
              {" "}
              <h2>Agriculture spraying Drone</h2>
              <p>Agriculture Vama drone specifically designed for use in agriculture</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slides s2">
            <div className="slides-inner">
              <h2>Drone Pilot Training</h2>
              <p>Drone pilot typically involves a combination of education, training, and certification. </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slides s3">
            <div className="slides-inner">
              <h2>Drone Pilot Training</h2>
              <p>Drones can provide real-time footage and data from a unique perspective</p>
            </div>
          </SwiperSlide>
          
        </Swiper>
      </>
    </div>
  );
}
