import React from "react";
import { Link } from "react-router-dom";
import "../style/dropdownProd.css";
import { CSSTransition } from "react-transition-group";

export default function DropdownSupport({ dropdownSpt }) {
  return (
    <CSSTransition
      in={dropdownSpt ? true : false}
      timeout={500}
      classNames="fade"
      unmountOnExit={true}
    >
      <div className="dropdownProd">
        <div className="dropdown-list">
          <Link to="/">Agriculture Spraying</Link>
        </div>
        <div className="dropdown-list">
          <Link to="/">Land Mapping</Link>
        </div>
        <div className="dropdown-list">
          <Link to="/">Disaster Management</Link>
        </div>
        <div className="dropdown-list">
          <Link to="/">Pilot Training</Link>
        </div>
      </div>
    </CSSTransition>
  );
}
