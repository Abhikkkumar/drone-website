import React from "react";
import "../style/about.css";

import BreadcrumpTemp from "./Template/BreadcrumpTemp";
import Section1 from "./Section1";
import Section2_p from "./page2/Section2_p";
import Section3 from "./Section3";

import TestimonialCard from "./TestimonialCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "../style/testimonial.css";

export default function About() {
  const breadProp = {
    title: "About Us",
    text: "Join us in building a resilient future with the help of cutting-edge drone technology",
    arr: ["Home", "About Us"],
  };

  const NiteshMundra = {
    photo: "https://www.dronekrishi.com/assets/images/profile/nitesh_p.png",
    name: "Nitesh Mundhra",
    designation: "Director and Drone Pilot",
    para: "Nitesh Mundhra's educational background in BBA with a specialization in analytics provides a strong foundation in business administration and data analysis. ",
  };
  const nikunjBajoria = {
    photo: "https://www.dronekrishi.com/assets/images/profile/nikunj_p.png",
    name: "Nikunj Bajoria",
    designation: "Director & co-founder",
    para: "Nikunj Bajoria is a dynamic individual who, at the age of 30, has gained extensive experience in the business world, ranging from trading to manufacturing.",
  };
  const ankurSomani = {
    photo: "https://www.dronekrishi.com/assets/images/profile/Ankur_p.png",
    name: "Ankur Somani",
    designation: "Director and Drone pilot Instructor",
    para: "Ankur Somani is a highly skilled professional with a diverse range of qualifications and experience. Holding a bachelor's degree in commerce (Bcom) and a master's degree in business administration (MBA).",
  };
  const dhruvPanchal = {
    photo: "https://www.dronekrishi.com/assets/images/profile/dhruv_p.png",
    name: "Dhruv Panchal",
    designation: "System Engineer",
    para: "As a mechanical engineer with a growing passion for the aerospace industry and UAV design, I am excited to bring my skills and expertise to the field of system engineering.",
  };
  const sujitPalande = {
    photo: "https://www.dronekrishi.com/assets/images/profile/sujit_p.png",
    name: "Sujit Palande",
    designation: "Legal operations & Drone Pilot",
    para: "Sujit Palande, a highly experienced legal and compliance professional, brings a wealth of expertise to our company. With a degree in LLB, Sujit has a strong educational foundation in law and business.",
  };
  return (
    <div className="about">
      <BreadcrumpTemp bprops={breadProp} />
      <div className="about-inner">
        <Section1 />
        <Section2_p />
        <div className="our-team">
          <div className="test-top">
            <div className="dual-line">
              <div className="line1 "></div>
              <h2>Our Team </h2>
              <div className="line1 "></div>
            </div>
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
                  <TestimonialCard details={NiteshMundra} />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="image">
                  <TestimonialCard details={nikunjBajoria} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="image">
                  <TestimonialCard details={ankurSomani} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="image">
                  <TestimonialCard details={dhruvPanchal} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="image">
                  <TestimonialCard details={sujitPalande} />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <Section3 />
      </div>
    </div>
  );
}
