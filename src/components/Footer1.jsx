import React from "react";
import "../style/footer1.css";
import logo from "../img/footer/vama-footer-logo.png";
import { Link } from "react-router-dom";

export default function Footer1() {
  return (
    <div className="footer1">
      <div className="sub-footer f-1">
        <div className="f-logo">
          <img src={logo} alt="" />
        </div>
        <div className="f1-details">
          <p>
          Vama Skylight is a leading manufacturer of drones, providing innovative solutions to the drone industry. 
          </p>
          <p>
            <strong>Opening Hours</strong> : Monday – Sat: 9am to 6pm
          </p>
          <ul class="footer-social">
            <li>
              <a href="#" target="_blank">
                <span>
                  {" "}
                  <i class="fab fa-facebook-f"></i>{" "}
                </span>
              </a>
            </li>
            <li>
              <a href="# " target="_blank">
                <span>
                  {" "}
                  <i class="fab fa-twitter"></i>{" "}
                </span>
              </a>
            </li>

            <li>
              <a href="# " target="_blank">
                <span>
                  {" "}
                  <i class="fab fa-pinterest-p"></i>{" "}
                </span>
              </a>
            </li>

            <li>
              <a href="# " target="_blank">
                <span>
                  {" "}
                  <i class="fab fa-instagram"></i>{" "}
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="sub-footer f-3">
        <h2>OUR SERVICES</h2>
        <div className="f3-details">
          <Link to="/">
            <i class="fa-solid fa-angle-right"></i> HOME
          </Link>
          <Link to="/about">
            <i class="fa-solid fa-angle-right"></i> ABOUT US
          </Link>
          <Link to="/support">
            <i class="fa-solid fa-angle-right"></i> SUPPORT & SERVICES
          </Link>
          <Link to="/">
            <i class="fa-solid fa-angle-right"></i>  PRODUCTS
          </Link>
          <Link to="/">
            <i class="fa-solid fa-angle-right"></i> GALLERY
          </Link>
          <Link to="/contact">
            <i class="fa-solid fa-angle-right"></i> CONTACT US
          </Link>
        </div>
      </div>
      <div className="sub-footer f-2">
        <h2>CONTACT INFO</h2>
        <div className="f2-details">
          <p>
            <i class="fi fi-rr-map-marker-home"></i>Ta-134/A, Gulshan Badda Link
            Rd, Dhaka
          </p>
          <div>
            <p>
              {/* <a href="tel:(+880)15569569365">+91-9876543210</a> */}
              <a href="tel:+91-8320844583">+91-8320844583</a>
            </p>
          </div>
          <div>
            <p>
              <a href="info@vamadronestores.com">info@vamadronestores.com</a>
              {/* <a href="mailto:infoname@gmail.com">infoname@gmail.com</a> */}
            </p>
          </div>
        </div>
      </div>

      <div className="sub-footer f-4">
        <h2>NEWSLETTER</h2>
        <div className="f4-details">
          <p>
            Tetur adipiscing elit, sed do eiusmod tempor in cididunt ut labore.
          </p>
          <input
            type="email"
            name="EMAIL"
            placeholder="Your email address"
          ></input>
          <button>SUBSCRIBE NOW</button>
        </div>
      </div>
    </div>
  );
}
