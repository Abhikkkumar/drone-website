import React from "react";
import "../style/page2/allSectionP2.css";
import { services, products } from "./Template/Data";
import ServiceList from "./Template/ServiceList";
import BreadcrumpTemp from "./Template/BreadcrumpTemp";

export default function GiftCityT() {
  const breadProp = {
    title: "Gift City",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, odit similique? Nulla, enim exercitationem?",
    arr: ["Home", "Articles And Events", "Gift City"],
  };
  const props = {
    breadProp,
    title: "Gift City ",
    text1:
      "Vibrant Gujarat is known for being a significant platform for business networking, investment opportunities, and showcasing innovations in various sectors. Having the event inaugurated by the Prime Minister of India adds a considerable level of importance and visibility to the exhibition. VAMA SKYLIGHT found the event to be interactive, knowledgeable, and successful.",
    // img2: "gr-3.jpeg",
    img: "guj-2.jpeg",
    text2: "",
  };
  return (
    <div>
      <BreadcrumpTemp bprops={props.breadProp} />
      <div className="all-section-p">
        <div className="asp-left">
          <div className="prod-img">
            <img
              src={require(`../img/events/${props.img}`)}
              alt="drone-footage"
            />
          </div>
          <div className="sec2-prod-left">
            <h1>{props.title}</h1>
            <p>{props.text1}</p>
            {/* <ul>
              {props.pointArr.map((curr) => {
                return (
                  <li>
                    <i class="fa-solid fa-check"></i>
                    {curr}
                  </li>
                );
              })}
            </ul> */}
          </div>

          {/* <div className="s4p-inner">
            <p>{props.text2}</p>
            <div className="s4p-img-cnt">
              {props.img3 === "" ? (
                <>
                  <img
                    src={require(`../../img/Service-Product/${props.img2}`)}
                    alt=""
                  />
                </>
              ) : (
                <>
                  <img src={props.img2} alt="" />
                  <img src={props.img2} alt="" />
                </>
              )}
            </div>
          </div> */}
        </div>
        <div className="asp-right">
          <ServiceList services={services} active={props.breadProp.title} />

          {/* <div className="asp-right-2">
            <div className="sec2-prod-right">
              <div className="sec2-prod-right-inner">
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
                <p className="call-num">
                  <a href="tel:+91-8320844583">+91-8320844583</a>
                </p>
              </div>
            </div>
            <div className="sec3-p-right">
              <h2>Brochure</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Exercitationem sit ipsa qui commodi numquam.
              </p>
              <div className="s3p-btn-cnt">
                <button>Download</button>
                <span>Or</span>
                <button>Discover</button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
