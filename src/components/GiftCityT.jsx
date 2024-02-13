import React from "react";
import "../style/page2/allSectionP2.css";
import "./giftCityT.css";
import { events } from "./Template/Data";
import ServiceList from "./Template/ServiceList";
import BreadcrumpTemp from "./Template/BreadcrumpTemp";

export default function GiftCityT({props}) {
  console.log(props);

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
        <div className="otherImages">
          {props.otherImages.map((imgName) => {
            return <img src={require(`../img/events/${imgName}`)} alt="" />;
          })}
        </div>
      </div>
    </div>
  );
}
