import React from "react";
import "../style/section2.css";
import Agriculture from "../img/section2/Agriculture-spraying.png";
import Land from "../img/section2/Land-Mapping.png";
import Pilot from "../img/section2/Pilot-training.png";

export default function Section2() {
  return (
    <div className="section2">
      <div className="s2-top">
        <div className="s2-top-inner">
          <div className="qlt">
            <div>
              <div className="line l-left"></div>
              <p>Services </p>
              <div className="line l-right"></div>
            </div>

            <h2>VAMA Skylight Support & Services</h2>
          </div>
        </div>
      </div>
      <div className="s2-bottom">
        <div className="s2-list">
          <div className="s2-list-icons">
            <img src={Agriculture} alt="lock-img" />
          </div>

          <h2>How to Use Battery</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
            facilis minus, veniam cumque magni ut?
          </p>

          <div className="dual-line">
            <div className="line1 "></div>
            <p>Read More</p>
            <div className="line1 "></div>
          </div>
        </div>
        <div className="s2-list">
          <div className="s2-list-icons">
            <img src={Land} alt="medal" />
          </div>
          <h2>How to Use Controller</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
            facilis minus, veniam cumque magni ut?
          </p>
          <div className="dual-line">
            <div className="line1 "></div>
            <p>Read More</p>
            <div className="line1 "></div>
          </div>
        </div>
        <div className="s2-list">
          <div className="s2-list-icons">
            <img src={Pilot} alt="diamond-img" />
          </div>

          <h2>How to Fly Drone</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
            facilis minus, veniam cumque magni ut?
          </p>
          <div className="dual-line">
            <div className="line1 "></div>
            <p>Read More</p>
            <div className="line1 "></div>
          </div>
        </div>
      </div>
    </div>
  );
}
