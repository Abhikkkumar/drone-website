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
            {/* <div className="sec2-prod-left">
              <h1>{props.title}</h1>
              <p>{props.text1}</p>
            </div> */}
          </div>
          {/* <div className="asp-right">
            <ServiceList services={events} active={props.title} />
          </div> */}
        </div>
      </div>
      <div className="art-div-cnt">
        <h3>Articles & Events</h3>
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
                  navigate("/giftcityt");
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
                  navigate("/giftcityt");
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
                  navigate("/giftcityt");
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
                  navigate("/giftcityt");
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
                  navigate("/giftcityt");
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
    </div>
  );
}
