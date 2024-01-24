import React from "react";
import Breadcrump from "./Breadcrump";
import Section1_p from "./Section1_p";
import Section2_p from "./Section2_p";
import Section3_P from "./Section3_P";
import Section4_P from "./Section4_P";

export default function product() {
  return (
    <div className="product">
      <Breadcrump />
      <Section1_p />
      <Section2_p />
      <Section3_P />
      <Section4_P />
    </div>
  );
}
