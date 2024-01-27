import React from "react";
import "../../style/page2/allSectionP2.css";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import { services, products } from "./Data";
import ServiceList from "./ServiceList";
import BreadcrumpTemp from "../Template/BreadcrumpTemp";

export default function ServiceTemplate({ props }) {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once when it comes into view
  });
  function NumberAnimation({ n }) {
    const { number } = useSpring({
      from: { number: 0 },
      reset: !inView, // Reset the animation when not in view
      number: inView ? n : 0, // Start the animation when in view
      delay: 200,
      config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
  }

  return (
    <div>
      <BreadcrumpTemp bprops={props.breadProp} />
      <div className="all-section-p">
        <div className="asp-left">
          <div className="prod-img">
            <img
              src={require(`../../img/Service-Product/${props.img}`)}
              alt="drone-footage"
            />
          </div>
          <div className="sec2-prod-left">
            <h1>{props.title}</h1>
            <p>{props.text1}</p>
            <ul>
              {props.pointArr.map((curr) => {
                return (
                  <li>
                    <i class="fa-solid fa-check"></i>
                    {curr}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="sec3-p-left">
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
          </div>
          <div className="s4p-inner">
            <p>{props.text2}</p>
            <div className="s4p-img-cnt">
              <img src={props.img2} alt="" />
              <img src={props.img3} alt="" />
            </div>
          </div>
        </div>
        <div className="asp-right">
          {props.isService ? (
            <ServiceList services={services} active={props.breadProp.title} />
          ) : (
            <ServiceList services={products} active={props.breadProp.title} />
          )}
          <div className="asp-right-2">
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
          </div>
        </div>
      </div>
    </div>
  );
}