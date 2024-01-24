import React from 'react'

import About_Breadcrump from './AboutBreadcrump.jsx';
import Section1 from './Section1';
import Section2_p from './page2/Section2_p';
import Section3 from './Section3';

export default function About() {
  return (
    <div className='about'>
      <About_Breadcrump />
      <div className='about-inner'>
        <Section1/>
        <Section2_p/>
        <Section3/>
      </div>

    </div>
  )
}
