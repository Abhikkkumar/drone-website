import React, { useState } from "react";
import { Link } from "react-router-dom";
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
      <div className="inner-sidebar">
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
              {prodList ? (
                <span class="material-symbols-outlined remove">remove</span>
              ) : (
                <span class="material-symbols-outlined add">add</span>
              )}
            </Link>
            {prodList ? (
              <>
                <Link className="side-list sl-list" to="/">
                  Agribot
                </Link>
                <Link className="side-list sl-list" to="/">
                  Agribot A6
                </Link>
                <Link className="side-list sl-list" to="/">
                  Agribot MX
                </Link>
              </>
            ) : (
              ""
            )}
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
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-youtube"></i>
          <i class="fa-brands fa-pinterest"></i>
        </div>
      </div>
    </div>
  );
}
