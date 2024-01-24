import React from "react";
import "../style/section4.css";

export default function Section4() {
  return (
    <div className="section4">
      <div className="section_outer">
        <div className="section_inner">
          <h6 className="contact-who">
            <img src="https://devsdesign.net/products/html/konstruk/assets/images/shape-1.png" />{" "}
            NUMBER TALKS
          </h6>

          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <button>CONTACT NOW</button>
        </div>

        <div className="sec4_right">
          <div className="Sec4_Card">
            <h1>0+</h1>
            <p>Completed Projects</p>
          </div>

          <div className="Sec4_Card">
            <h1>0+</h1>
            <p>Happy Clients</p>
          </div>

          <div className="Sec4_Card">
            <h1>0+</h1>
            <p>Qualified Engineers</p>
          </div>

          <div className="Sec4_Card">
            <h1>0+</h1>
            <p>Years Experince</p>
          </div>
        </div>
      </div>
    </div>
  );
}
