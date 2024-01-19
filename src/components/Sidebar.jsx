import React from "react";
import { Link } from "react-router-dom";
import "../style/sidebar.css";
import logo from "../img/navbar/Byteproc-logo-sub-removebg.png";

export default function Sidebar({ sidebar, showSidebar }) {
  return (
    <div
      className={sidebar ? "sidebar" : "sidebar sidebar-hide"}
      onClick={() => {
        showSidebar(!sidebar);
      }}
    >
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
          <Link className="side-list" to="/">
            PRODUCTS
          </Link>
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
    </div>
  );
}
