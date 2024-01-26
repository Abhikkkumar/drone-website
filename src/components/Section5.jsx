import React from "react";
import "../style/section5.css";
import img from "../img/section5/AbhayPic-1.jpg";

export default function Section5() {
  return (
    <div className="section5-container">
      <div className="s5-top">
        <h2>Our Products </h2>
        <p>
          Welcome to our FAQ page! We have compiled a list of commonly asked
          questions for you with quick and informative answers.
        </p>
      </div>
      <div className="section5">
        <div className="Section5-card">
          <div className="Sec1-inner">
            <div className="Sec5-img">
              <img src={img} alt="" />
            </div>
            <h4>Thea Agriculture Drone 16 Litres</h4>
            <p>
              Autonomous flying and spraying capability with{" "}
              <strong>16L</strong> tank capacity and upto 20 minutes of flying
              time. It has advanced radars for{" "}
              <strong>collision avoidance</strong>.
            </p>
            <div className="dual-line">
              <div className="line1 "></div>
              <p>Read More</p>
              <div className="line1 "></div>
            </div>
          </div>
        </div>

        <div className="Section5-card">
          <div className="Sec1-inner">
            <div className="Sec5-img">
              <img src={img} alt="" />
            </div>
            <h4>Thea Agricultural Drone 10 Litres</h4>
            <p>
              Agricultural Drone with a tank capacity of 10L and flying time of
              25 minutes. It has 2.5 acre spraying capacity in single charge.
              Comes with collision avoidance facility.
            </p>
            <div className="dual-line">
              <div className="line1 "></div>
              <p>Read More</p>
              <div className="line1 "></div>
            </div>
          </div>
        </div>

        <div className="Section5-card">
          <div className="Sec1-inner">
            <div className="Sec5-img">
              <img src={img} alt="" />
            </div>
            <h4>Disaster Management Drone</h4>
            <p>
              “NAINA” Disaster management Search and Rescue Drone comes with
              Target Locking and Tracking Mechanism with Four Deploying Drop
              Mechanism.
            </p>
            <div className="dual-line">
              <div className="line1 "></div>
              <p>Read More</p>
              <div className="line1 "></div>
            </div>
          </div>
        </div>

        <div className="Section5-card">
          <div className="Sec1-inner">
            <div className="Sec5-img">
              <img src={img} alt="" />
            </div>
            <h4>Surveillance Drone</h4>
            <p>
              Surveillance drones are equipped with various sensors, cameras,
              and other technologies to gather information and monitor specific
              areas.
            </p>
            <div className="dual-line">
              <div className="line1 "></div>
              <p>Read More</p>
              <div className="line1 "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
