import React from "react";
import "../../style/page2/section2_p.css";

export default function Section2_p() {
  return (
    <div className="section2-prod">
      <div className="sec2-prod-left-about">
        <h1>We Ensure Best Service</h1>
        <p>
          VAMA Skylight Solutions integrates the latest in drone technology to
          offer unmatched solutions releated to agriculture, land mapping and
          surveillance, disaster management and pilot training.
        </p>
        <ul>
          <li>
            <i class="fa-solid fa-check"></i>Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
          </li>
          <li>
            <i class="fa-solid fa-check"></i>Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Lorem, ipsum dolor.
          </li>
          <li>
            <i class="fa-solid fa-check"></i>Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Lorem ipsum dolor sit.
          </li>
          <li>
            <i class="fa-solid fa-check"></i>Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Lorem, ipsum.
          </li>
          <li>
            <i class="fa-solid fa-check"></i>Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Lorem.
          </li>
        </ul>
      </div>
      <div className="sec2-prod-right-about">
        <div className="sec2-prod-right-inner-about">
          <span className="tele-icon">
            <i class="fa-solid fa-phone"></i>
          </span>
          <div>
            <p>Have you any Questions?</p>
            <p>
              Call us <span className="ylo">Today!</span>
            </p>
          </div>
          <div className="dotted-line"></div>
          <p className="call-num">
            <a href="tel:+91-8320844583">+91-8320844583</a>
          </p>
        </div>
      </div>
    </div>
  );
}
