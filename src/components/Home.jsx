import React from "react";

import Carousel from "./Carousel";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Testimonial from "./Testimonial";
import Section3 from "./Section3";
import Faqs from "./Faqs";


export default function Home() {
  return (
    <div className="home">
      <Carousel />
      
      <Section1 />
      <Section2 />
      <Testimonial />
      <Faqs />
      <Section3 />
    </div>
  );
}
