import React from "react";
import "../../style/page2/section2_p.css";


export default function Section2_p() {
  return (
    <div className="section2-prod">
      <div className="sec2-prod-left-about">
        <h1>We Ensure Best Service</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore fuga
          optio, quia hic qui delectus repellat repudiandae unde deleniti
          tenetur exercitationem, accusantium iure laborum ducimus quam
          perferendis a provident in! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Tenetur aspernatur nobis repellendus porro accusamus
          perferendis sequi, veniam saepe?
        </p>
        <ul>
          <li>
            <i class="fa-solid fa-check"></i>Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
          </li>
          <li>
            <i class="fa-solid fa-check"></i>Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Lorem, ipsum dolor.
          </li>
          <li>
            <i class="fa-solid fa-check"></i>Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Lorem ipsum dolor sit.
          </li>
          <li>
            <i class="fa-solid fa-check"></i>Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Lorem, ipsum.
          </li>
          <li>
            <i class="fa-solid fa-check"></i>Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Lorem.
          </li>
        </ul>
      </div>
      <div className="sec2-prod-right-about">
        <div className="sec2-prod-right-inner-about">
          <span className="tele-icon">
            <i class="fa-solid fa-phone"></i>
          </span>
          <div>
            <p>Have you any Questions?</p>
            <p>
              Call us <span className="ylo">Today!</span>
            </p>
          </div>
          <div className="dotted-line"></div>
          <p>(123) 222-8888</p>
        </div>
      </div>
    </div>
  );
}
