import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "../style/sidebar.css";
import logo from "../img/navbar/vama.png";

export default function Sidebar({ sidebar, showSidebar }) {
  const [prodList, setProdList] = useState(false);
  const [sideSpt, setSideSpt] = useState(false);

  return (
    <div
      className={sidebar ? "sidebar" : "sidebar sidebar-hide"}
      onClick={() => {
        showSidebar(!sidebar);
      }}
    >
      <div className={sidebar ? "inner-sidebar" : "inner-sidebar sidebar-hide"}>
        <div
          className="sidebar-r"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="side-icon">
            <img src={logo} alt="main-logo" />
          </div>
          <div className="side-lists">
            <Link
              className="side-list"
              to="/"
              onClick={() => {
                showSidebar(!sidebar);
              }}
            >
              HOME
            </Link>
            <Link
              className="side-list"
              to="/about"
              onClick={() => {
                showSidebar(!sidebar);
              }}
            >
              ABOUT US
            </Link>
            <Link
              className={
                sideSpt
                  ? "side-list side-listContainer selectedText"
                  : "side-list side-listContainer"
              }
              to="/services"
              onClick={(e) => {
                e.stopPropagation();
                setSideSpt(!sideSpt);
              }}
            >
              SUPPORT & SERVICES
              <CSSTransition
                in={sideSpt ? true : false}
                timeout={500}
                classNames="btn"
                unmountOnExit={true}
              >
                <span className={"material-symbols-outlined remove"}>
                  remove
                </span>
              </CSSTransition>
              <CSSTransition
                in={!sideSpt ? true : false}
                timeout={500}
                classNames="btn"
              >
                <span className={"material-symbols-outlined add "}>add</span>
              </CSSTransition>
            </Link>
            <CSSTransition
              in={sideSpt ? true : false}
              timeout={500}
              appear={true}
              classNames="fade"
              unmountOnExit={true}
            >
              <div>
                <Link
                  className="side-list sl-list"
                  to="/"
                  onClick={() => {
                    showSidebar(!sidebar);
                  }}
                >
                  Agriculture Spraying
                </Link>
                <Link
                  className="side-list sl-list"
                  to="/"
                  onClick={() => {
                    showSidebar(!sidebar);
                  }}
                >
                  Land Mapping
                </Link>
                <Link
                  className="side-list sl-list"
                  to="/"
                  onClick={() => {
                    showSidebar(!sidebar);
                  }}
                >
                  Land Surveillance
                </Link>
                <Link
                  className="side-list sl-list"
                  to="/"
                  onClick={() => {
                    showSidebar(!sidebar);
                  }}
                >
                  Disaster Management
                </Link>
                <Link
                  className="side-list sl-list"
                  to="/"
                  onClick={() => {
                    showSidebar(!sidebar);
                  }}
                >
                  Pilot Training
                </Link>
              </div>
            </CSSTransition>

            <Link
              className={
                prodList
                  ? "side-list side-listContainer selectedText"
                  : "side-list side-listContainer"
              }
              to="/"
              onClick={(e) => {
                e.stopPropagation();
                setProdList(!prodList);
              }}
            >
              PRODUCTS{" "}
              <CSSTransition
                in={prodList ? true : false}
                timeout={500}
                classNames="btn"
                unmountOnExit={true}
              >
                <span className={"material-symbols-outlined remove"}>
                  remove
                </span>
              </CSSTransition>
              <CSSTransition
                in={!prodList ? true : false}
                timeout={500}
                classNames="btn"
              >
                <span className={"material-symbols-outlined add "}>add</span>
              </CSSTransition>
            </Link>

            <CSSTransition
              in={prodList ? true : false}
              timeout={500}
              appear={true}
              classNames="fade"
              unmountOnExit={true}
            >
              <div>
                <Link
                  className="side-list sl-list"
                  to="/"
                  onClick={() => {
                    showSidebar(!sidebar);
                  }}
                >
                  Thea Agriculture Drone 16 Litres
                </Link>
                <Link
                  className="side-list sl-list"
                  to="/"
                  onClick={() => {
                    showSidebar(!sidebar);
                  }}
                >
                  Thea Agriculture Drone 10 Litres
                </Link>
                <Link
                  className="side-list sl-list"
                  to="/"
                  onClick={() => {
                    showSidebar(!sidebar);
                  }}
                >
                  Naina Disaster Management Drone
                </Link>
                <Link
                  className="side-list sl-list"
                  to="/"
                  onClick={() => {
                    showSidebar(!sidebar);
                  }}
                >
                  Surveillance Drone
                </Link>
              </div>
            </CSSTransition>

            <Link
              className="side-list"
              to="/"
              onClick={() => {
                showSidebar(!sidebar);
              }}
            >
              NETWORKS
            </Link>
            <Link
              className="side-list"
              to="/"
              onClick={() => {
                showSidebar(!sidebar);
              }}
            >
              NEWS & EVENTS
            </Link>

            <Link
              className="side-list"
              to="/"
              onClick={() => {
                showSidebar(!sidebar);
              }}
            >
              CAREER
            </Link>
            <Link
              className="side-list"
              to="/contact"
              onClick={() => {
                showSidebar(!sidebar);
              }}
            >
              CONTACT US
            </Link>
          </div>
        </div>
        <div className="sidebar-social">
          <div
            className="social-list"
            onClick={() => {
              showSidebar(!sidebar);
            }}
          >
            <i class="fa-brands fa-facebook"></i>
          </div>
          <div
            className="social-list"
            onClick={() => {
              showSidebar(!sidebar);
            }}
          >
            <i class="fa-brands fa-instagram"></i>
          </div>
          <div
            className="social-list"
            onClick={() => {
              showSidebar(!sidebar);
            }}
          >
            <i class="fa-brands fa-twitter"></i>
          </div>
          <div
            className="social-list"
            onClick={() => {
              showSidebar(!sidebar);
            }}
          >
            <i class="fa-brands fa-youtube"></i>
          </div>
          <div
            className="social-list"
            onClick={() => {
              showSidebar(!sidebar);
            }}
          >
            <i class="fa-brands fa-pinterest"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
