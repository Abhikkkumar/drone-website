import React from "react";
import "../style/section2.css";
import lock from "../img/section2/lock.png";
import diamond from "../img/section2/diamond.png";
import medal from "../img/section2/medal.png";

export default function Section2() {
  return (
    <div className="section2">
      <div className="s2-top">
        <div className="s2-top-inner">
          <div className="qlt">
            <div>
              <div className="line l-left"></div>
              <p>About Quality </p>
              <div className="line l-right"></div>
            </div>

            <h2>We're about Quality and Trust</h2>
          </div>
        </div>
      </div>
      <div className="s2-bottom">
        <div className="s2-list">
          <img src={lock} alt="lock-img" />
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
          <img src={medal} alt="medal" />
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
          <img src={diamond} alt="diamond-img" />
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
