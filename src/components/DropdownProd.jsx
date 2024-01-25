import React from "react";
import { Link } from "react-router-dom";
import "../style/dropdownProd.css";
import { CSSTransition } from "react-transition-group";

export default function DropdownProd({ dropdown }) {
  return (
    <CSSTransition
      in={dropdown ? true : false}
      timeout={500}
      classNames="fade"
      unmountOnExit={true}
    >
      <div className="dropdownProd">
        <div className="dropdown-list">
          <Link to="/">Thea Agriculture Drone 16 Litres</Link>
        </div>
        <div className="dropdown-list">
          <Link to="/">Thea Agriculture Drone 10 Litres</Link>
        </div>
        <div className="dropdown-list">
          <Link to="/">Naina Disaster Management Drone</Link>
        </div>
        <div className="dropdown-list">
          <Link to="/">Surveillance Drone</Link>
        </div>
      </div>
    </CSSTransition>
  );
}
