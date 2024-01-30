import React from "react";
import "../style/contact.css";
import add from "../img/contact/add.png";
import call from "../img/contact/call.png";
import mail from "../img/contact/mail.png";
import BreadcrumpTemp from "./Template/BreadcrumpTemp";

export default function Contact() {
  const breadProp = {
    title: "Our Contact",
    text: "Join us in building a resilient future with the help of cutting-edge drone technology",
    arr: ["Home", "Contact"],
  };
  return (
    <div className="contact-outer">
      <BreadcrumpTemp bprops={breadProp} />
      <div className="contact">
        <div className="contact1">
          <h6 className="contact-who">
            <img
              src="https://devsdesign.net/products/html/konstruk/assets/images/shape-1.png"
              alt=""
            />{" "}
            LETS TALK
          </h6>
          <h2>Have an Upcoming Project ?</h2>

          <form className="form" action="mailto:abhaykr15102000@gmail.com">
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
            <button type="submit">Submit Now</button>
          </form>
        </div>

        <div className="Contact-Right-Side">
          <div className="card">
            <img src={add} alt="" />
            <div className="card1">
              <h5>Address</h5>
              <p>Daman Industrial Estate</p>
              <p>Daman - 396210</p>
            </div>
          </div>

          <div className="card">
            <img src={mail} alt="" />
            <div className="card1">
              <h5>Email Us</h5>
              <p>
                <a href="info@vamadronestores.com">info@vamadronestores.com</a>
              </p>
              {/* <p>test2@gmail.com</p> */}
            </div>
          </div>

          <div className="card">
            <img src={call} alt="" />
            <div className="card1">
              <h5>Call Us</h5>
              <p>
                <a href="tel:+91-8320844583">+91-8320844583</a>
              </p>
              {/* <p>(+0888) 222-9999</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
