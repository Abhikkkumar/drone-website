import React from "react";
import "../style/page2/allSectionP2.css";
import { events } from "./Template/Data";
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
          </div>
        </div>
        <div className="asp-right">
          <ServiceList services={events} active={props.breadProp.title} />
        </div>
      </div>
    </div>
  );
}
