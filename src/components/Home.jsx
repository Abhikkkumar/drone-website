import React from "react";

import Carousel from "./Carousel";
import Section1 from "./Section1";
import Section2 from "./Section2";

export default function Home() {
  return (
    <div className="home">
      <Carousel />
      <Section1 />
      <Section2 />
    </div>
  );
}
