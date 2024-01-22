import React from "react";
import { Link } from "react-router-dom";
import "../style/dropdownProd.css";
import { CSSTransition } from "react-transition-group";

export default function DropdownProd({ dropdown }) {
  return (
    <CSSTransition in={dropdown ? true : false} timeout={500} classNames="fade">
      <div className="dropdownProd">
        <div className="dropdown-list">
          <Link to="/">Agribot</Link>
        </div>
        <div className="dropdown-list">
          <Link to="/">Agribot A6</Link>
        </div>
        <div className="dropdown-list">
          <Link to="/">Agribot MX</Link>
        </div>
        <div className="dropdown-list">
          <Link to="/">Heavybot</Link>
        </div>
        <div className="dropdown-list">
          <Link to="/">Surveybot</Link>
        </div>
        <div className="dropdown-list">
          <Link to="/">Drishti</Link>
        </div>
      </div>
    </CSSTransition>
  );
}
