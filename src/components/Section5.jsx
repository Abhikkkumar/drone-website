import React from "react";
import "../style/section5.css";
import img from "../img/section5/AbhayPic-1.jpg";

export default function Section5() {
  return (
    <div className="section5">
      <div className="Section5-card">
        <div className="Sec1-inner">
          <div className="Sec5-img">
            <img src={img} />
          </div>
          <h1>Service 1</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
            eum ex inventore laboriosam libero. Dolore deleniti quos blanditiis
            sapiente ipsam tempora vero commodi quo ab.
          </p>
        </div>
      </div>

      <div className="Section5-card">
        <div className="Sec1-inner">
          <div className="Sec5-img">
            <img src={img} />
          </div>
          <h1>Service 2</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
            eum ex inventore laboriosam libero. Dolore deleniti quos blanditiis
            sapiente ipsam tempora vero commodi quo ab.
          </p>
        </div>
      </div>

      <div className="Section5-card">
        <div className="Sec1-inner">
          <div className="Sec5-img">
            <img src={img} />
          </div>
          <h1>Service 3</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
            eum ex inventore laboriosam libero. Dolore deleniti quos blanditiis
            sapiente ipsam tempora vero commodi quo ab.
          </p>
        </div>
      </div>

      <div className="Section5-card">
        <div className="Sec1-inner">
          <div className="Sec5-img">
            <img src={img} />
          </div>
          <h1>Service 4</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
            eum ex inventore laboriosam libero. Dolore deleniti quos blanditiis
            sapiente ipsam tempora vero commodi quo ab.
          </p>
        </div>
      </div>
    </div>
  );
}
