import React from "react";

import Carousel from "./Carousel";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Testimonial from "./Testimonial";
import Section3 from "./Section3";
import Faqs from "./Faqs";
import Section4 from "./Section4";
import Section5 from "./Section5";
import CarouselM from "./CarouselM";
import safety from "../img/product/safety.JPG";

export default function Home() {
  return (
    <div className="home">
      <Carousel />
      <CarouselM />
      <Section1 />
      <Section2 />
      <Section5 />
      <Section4 />
      <Testimonial />
      <div className="safety">
        <img  src={safety} alt="" />
      </div>

      <Faqs />
      <Section3 />
    </div>
  );
}
