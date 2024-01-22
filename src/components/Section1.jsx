import React from "react";
import "../style/section1.css";
import secImg1 from "../img/section1/about.png";
import secImg2 from "../img/section1/section1.jpg";


export default function Section1() {
  return (
   
      
        <div className="section1">
        <div className="sectionImg">
          <img src={secImg1} alt="" />
        </div>

        <div className="section-left-side">
          <h6 className="who">
            <img src="https://devsdesign.net/products/html/konstruk/assets/images/shape-1.png" />{" "}
            WHO WE ARE
          </h6>
          <h2>Construction Solutions focused future ready</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
            obcaecati dolores autem quibusdam repellat optio rerum odio aut
            alias eveniet? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Deserunt, consectetur!
          </p>

          <div className="section-left-middle">
            <img className="img-2-sec-1" src={secImg2} />
            <div className="section-left-left">
              <h5>
                {" "}
                <i class="fa-regular fa-circle-check"></i> Pre-construction
                services
              </h5>
              <h5>
                {" "}
                <i class="fa-regular fa-circle-check"></i> Industrial
                manufacturing
              </h5>
              <h5>
                {" "}
                <i class="fa-regular fa-circle-check"></i> Building and
                construction
              </h5>
              <h5>
                {" "}
                <i class="fa-regular fa-circle-check"></i> After Service
              </h5>
            </div>
          </div>
          <button className="know-more">KNOW MORE</button>
        </div>
      </div>
      
      
   
  );
}
