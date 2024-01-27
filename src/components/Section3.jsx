import React from 'react'
import "../style/section3.css";
import { useNavigate } from 'react-router-dom';

export default function Section3() {
  const navigate = useNavigate();
  return (
    <div className='sec3-outer'>
      <div className='sec3-inner'>
        <h5>WORK WITH US !</h5>
        <h1>Have any upcoming project</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat suscipit porro magnam voluptatibus nulla? Veniam nam inventore id hic fugit, perspiciatis minima nulla deleniti dolor?</p>
        <button onClick={()=>{
          navigate("/contact")
        }}>GET STARTED</button>
      </div>
    </div>
  )
}
