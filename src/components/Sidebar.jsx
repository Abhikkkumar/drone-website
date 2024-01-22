import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "../style/sidebar.css";
import logo from "../img/navbar/Byteproc-logo-sub-removebg.png";

export default function Sidebar({ sidebar, showSidebar }) {
  const [prodList, setProdList] = useState(false);
  
  
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
            <Link className="side-list" to="/">
              HOME
            </Link>
            <Link className="side-list" to="/">
              ABOUT US
            </Link>
            <Link
              className={
                prodList
                  ? "side-list side-listContainer selectedText"
                  : "side-list side-listContainer"
              }
              to="/"
              onClick={() => {
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
              <div  >
                <Link className="side-list sl-list" to="/">
                  Agribot
                </Link>
                <Link className="side-list sl-list" to="/">
                  Agribot A6
                </Link>
                <Link className="side-list sl-list" to="/">
                  Agribot MX
                </Link>
              </div>
            </CSSTransition>

            <Link className="side-list" to="/">
              NETWORKS
            </Link>
            <Link className="side-list" to="/">
              NEWS & EVENTS
            </Link>
            <Link className="side-list" to="/">
              OUR CLIENTS
            </Link>
            <Link className="side-list" to="/">
              CAREER
            </Link>
            <Link className="side-list" to="/">
              CONTACT US
            </Link>
          </div>
        </div>
        <div className="sidebar-social">
          <div className="social-list">
            <i class="fa-brands fa-facebook"></i>
          </div>
          <div className="social-list">
            <i class="fa-brands fa-instagram"></i>
          </div>
          <div className="social-list">
            <i class="fa-brands fa-twitter"></i>
          </div>
          <div className="social-list">
            <i class="fa-brands fa-youtube"></i>
          </div>
          <div className="social-list">
            <i class="fa-brands fa-pinterest"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
