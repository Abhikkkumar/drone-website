import React from "react";
import "../style/footer1.css";
import logo from "../img/navbar/Byteproc-logo-sub-removebg.png";
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            reiciendis nam voluptates adipisci natus voluptatibus!
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
            <i class="fa-solid fa-angle-right"></i> General Construction
          </Link>
          <Link to="/">
            <i class="fa-solid fa-angle-right"></i> Property Maintenance
          </Link>
          <Link to="/">
            <i class="fa-solid fa-angle-right"></i> Project Managment
          </Link>
          <Link to="/">
            <i class="fa-solid fa-angle-right"></i> Virtual Design & Build
          </Link>
          <Link to="/">
            <i class="fa-solid fa-angle-right"></i> Preconstruction
          </Link>
          <Link to="/">
            <i class="fa-solid fa-angle-right"></i> Design Build
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
              <a href="tel:(+880)15569569365">(+880)155 69569 365</a>
              <a href="tel:(+880)15569569366">(+880)155 69569 366</a>
            </p>
          </div>
          <div>
            <p>
              <a href="mailto:support@rstheme.com">support@rstheme.com</a>
              <a href="mailto:infoname@gmail.com">infoname@gmail.com</a>
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
