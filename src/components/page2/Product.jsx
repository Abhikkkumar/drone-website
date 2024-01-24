import React from 'react'
import Breadcrump from "./Breadcrump";
import Section1_p from './Section1_p';
import Section2_p from './Section2_p';

export default function product() {
  return (
    <div className='product'>
      <Breadcrump />
      <Section1_p />
      <Section2_p />

    </div>
  )
}
