import React from "react";
import "../style/contact.css";
import img1 from "../img/contact/img1.png";
import img2 from "../img/contact/img2.png";
import img3 from "../img/contact/img3.png";
import Contact_Breadcrump from "./Contact_Breadcrump";

export default function Contact() {
  return (
    <div className="contact-outer">
      <Contact_Breadcrump />
      <div className="contact">
        <div className="contact1">
          <h6 className="contact-who">
            <img src="https://devsdesign.net/products/html/konstruk/assets/images/shape-1.png" alt=""/>{" "}
            LETS TALK
          </h6>
          <h2>Have an Upcoming Project ?</h2>

          <form className="form">
            <input type="text" id="name" name="name" placeholder="Name" />
            <input type="Email" id="Email" name="Email" placeholder="Email" />
            <br />
            <input
              type="Text"
              id="name"
              name="name"
              placeholder="Phone Number"
            />
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Website"
            />
            <br />
            <textarea
              type="text"
              id="name"
              name="name"
              placeholder="Your Massege Here"
            />
            <br />
            <button>Submit Now</button>
          </form>
        </div>

        <div className="Contact-Right-Side">
          <div className="card">
            <img src={img2}  alt=""/>
            <div className="card1">
              <h5>USA Office</h5>
              <p>55 Gerad Lane</p>
              <p>NY 11201, USA</p>
            </div>
          </div>

          <div className="card">
            <img src={img3} alt=""/>
            <div className="card1">
              <h5>Email Us</h5>
              <p>test@gmail.com</p>
              <p>test2@gmail.com</p>
            </div>
          </div>

          <div className="card">
            <img src={img1}  alt=""/>
            <div className="card1">
              <h5>Call Us</h5>
              <p>(+0888) 589-8745</p>
              <p>(+0888) 222-9999</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
