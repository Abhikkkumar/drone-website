import React from "react";
import "../style/testimonialCard.css";

export default function TestimonialCard() {
  return (
    <div className="testimonial-card">
      <div className="profile-pic">
        <img
          src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <h2>Name Here</h2>
      <p>Designation Here</p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, eligendi
        non voluptatibus hic animi officiis sapiente distinctio magnam possimus
        nisi dolorum iure.
      </p>
    </div>
  );
}
