import React, { useState } from "react";
import "../style/header.css";
import logo from "../img/navbar/Byteproc-logo-sub-removebg.png";
import { Link } from "react-router-dom";
import DropdownProd from "./DropdownProd";
import { CSSTransition } from "react-transition-group";

export default function Header({ sidebar, showSidebar }) {
  const [dropdown, setDropdown] = useState(false);
  function handleDropdown() {
    setDropdown((d) => !d);
  }
  return (
    <>
      <div className="header">
        <div className="icon">
          <img src={logo} alt="logo" />
        </div>

        <div className="nav-lists">
          <div className="nav-list">
            <Link to="/">HOME</Link>
          </div>
          <div className="nav-list">
            <Link to="/product">ABOUT US</Link>
          </div>
          <div
            className={dropdown ? "nav-list colorBlue" : "nav-list"}
            onMouseEnter={() => {
              // setDropdown(dropdown);
              handleDropdown();
            }}
            onMouseLeave={() => {
              setDropdown(false);
              
            }}
          >
            <Link className="side-listContainer" to="/">
              PRODUCTS{" "}
              <span class="material-symbols-outlined arrow-down">
                arrow_drop_down
              </span>
            </Link>

            <DropdownProd dropdown={dropdown} />
          </div>
          <div className="nav-list">
            <Link to="/">NETWORKS</Link>
          </div>
          <div className="nav-list">
            <Link to="/">NEWS & EVENTS</Link>
          </div>
          <div className="nav-list">
            <Link to="/">OUR CLIENTS</Link>
          </div>
          <div className="nav-list">
            <Link to="/">CAREER</Link>
          </div>

          <Link to="/">
            <button className="btn-contactUs">CONTACT US</button>
          </Link>
        </div>
        <span
          className="material-symbols-outlined hamburger"
          onClick={() => {
            showSidebar(!sidebar);
          }}
        >
          menu
        </span>
      </div>
    </>
  );
}
