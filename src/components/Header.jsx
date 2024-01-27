import React, { useState } from "react";
import "../style/header.css";
import logo from "../img/navbar/vama.png";
import { Link } from "react-router-dom";
import DropdownProd from "./DropdownProd";

import DropdownSupport from "./DropdownSupport";

export default function Header({ sidebar, showSidebar }) {
  const [dropdown, setDropdown] = useState(false);
  const [dropdownSpt, setDropdownSpt] = useState(false);
  function handleDropdown() {
    setDropdown((d) => !d);
  }
  return (
    <>
      <div className="header">
        <div className="icon">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className="nav-lists">
          <div className="nav-list">
            <Link to="/">HOME</Link>
          </div>
          <div className="nav-list">
            <Link to="/about">ABOUT US</Link>
          </div>
          <div
            className={dropdownSpt ? "nav-list colorBlue" : "nav-list"}
            onMouseEnter={() => {
              setDropdownSpt(true);
            }}
            onMouseLeave={() => {
              setDropdownSpt(false);
            }}
          >
            <Link to="/services" className="side-listContainer">
              SUPPORT & SERVICES{" "}
              <span class="material-symbols-outlined arrow-down">
                arrow_drop_down
              </span>
            </Link>
            <DropdownSupport dropdownSpt={dropdownSpt} />
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
            <Link className="side-listContainer">
              PRODUCTS{" "}
              <span className="material-symbols-outlined arrow-down">
                arrow_drop_down
              </span>
            </Link>

            <DropdownProd dropdown={dropdown} />
          </div>

          <div className="nav-list">
            <Link to="/gallery">GALLERY</Link>
          </div>

          <Link to="/contact">
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
