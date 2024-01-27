import React from 'react'

import BreadcrumpTemp from './Template/BreadcrumpTemp';
import Section1 from './Section1';
import Section2_p from './page2/Section2_p';
import Section3 from './Section3';

export default function About() {
  const breadProp = {
    title: "About Us",
    text: "Join us in building a resilient future with the help of cutting-edge drone technology",
    arr: ["Home", "About Us"],
  };
  return (
    <div className='about'>
      <BreadcrumpTemp bprops={breadProp} />
      <div className='about-inner'>
        <Section1/>
        <Section2_p/>
        <Section3/>
      </div>

    </div>
  )
}
