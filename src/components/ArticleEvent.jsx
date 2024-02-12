import React from "react";
import "../style/articleEvent.css";
import BreadcrumpTemp from "./Template/BreadcrumpTemp";
import { events } from "./Template/Data";
import ServiceList from "./Template/ServiceList";
import { useNavigate } from "react-router-dom";

export default function ArticleEvent() {
  const navigate = useNavigate();
  const breadProp = {
    title: "Articles & Events",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, odit similique? Nulla, enim exercitationem?",
    arr: ["Home", "Articles And Events"],
  };
  const props = {
    title: "Articles & Events ",
    text1:
      "Vama Skylight keep participating in different events around India. Below is a list all of the recent events in which we have partcipated.",
    img2: "gr-3.jpeg",
    img: "guj-1.jpeg",
    text2: "",
  };
  return (
    <div>
      <BreadcrumpTemp bprops={breadProp} />
      <div>
        <div
          className="all-section-p"
          style={{ paddingBottom: "0", marginBottom: "0" }}
        >
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
            {/* <div className="sec3-p-left">
              <div className="s3pl-one" ref={ref}>
                <i class="fa-brands fa-phoenix-squadron"></i>
                <p className="bold">
                  {" "}
                  <NumberAnimation n={354} inView={inView} /> +
                </p>
                <p>Satisfied clients</p>
              </div>
              <div className="s3pl-two" ref={ref}>
                <i class="fa-brands fa-phoenix-squadron"></i>
                <p className="bold">
                  <NumberAnimation n={411} inView={inView} />+
                </p>
                <p>Success of works</p>
              </div>
            </div> */}
            {/* <div className="s4p-inner">
              <p>{props.text2}</p>
              <div className="s4p-img-cnt">
                <img src={require(`../img/events/${props.img2}`)} alt="" /> 
               <img src={props.img3} alt="" />
              </div>
            </div> */}
          </div>
          <div className="asp-right">
            <ServiceList services={events} active={props.title} />

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
      <div className="event-lists">
        <div className="event-card-t">
          <div className="event-card">
            <img
              src="https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <p>Gift City</p>
            <div
              className="dual-line"
              onClick={() => {
                navigate("/thea-agriculture-drone-16-litres");
              }}
            >
              <div className="line1 "></div>
              <p>Read More</p>
              <div className="line1 "></div>
            </div>
          </div>
        </div>
        <div className="event-card-t">
          <div className="event-card">
            <img
              src="https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <p>Gift City</p>
            <div
              className="dual-line"
              onClick={() => {
                navigate("/thea-agriculture-drone-16-litres");
              }}
            >
              <div className="line1 "></div>
              <p>Read More</p>
              <div className="line1 "></div>
            </div>
          </div>
        </div>
        <div className="event-card-t">
          <div className="event-card">
            <img
              src="https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <p>Gift City</p>
            <div
              className="dual-line"
              onClick={() => {
                navigate("/thea-agriculture-drone-16-litres");
              }}
            >
              <div className="line1 "></div>
              <p>Read More</p>
              <div className="line1 "></div>
            </div>
          </div>
        </div>
        <div className="event-card-t">
          <div className="event-card">
            <img
              src="https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <p>This Gift City</p>
            <div
              className="dual-line"
              onClick={() => {
                navigate("/thea-agriculture-drone-16-litres");
              }}
            >
              <div className="line1 "></div>
              <p>Read More</p>
              <div className="line1 "></div>
            </div>
          </div>
        </div>
        <div className="event-card-t">
          <div className="event-card">
            <img
              src="https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <p>Gift City</p>
            <div
              className="dual-line"
              onClick={() => {
                navigate("/thea-agriculture-drone-16-litres");
              }}
            >
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
