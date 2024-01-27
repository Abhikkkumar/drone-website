import React from "react";
import { Link } from "react-router-dom";
import "../style/dropdownProd.css";
import { CSSTransition } from "react-transition-group";

export default function DropdownSupport({ dropdownSpt, setThree, setFour }) {
  return (
    <CSSTransition
      in={dropdownSpt ? true : false}
      timeout={500}
      classNames="fade"
      unmountOnExit={true}
    >
      <div className="dropdownProd">
        <div className="dropdown-list">
          <Link
            to="/agriculture-spraying"
            onClick={() => {
              setFour(false);
              setThree(true);
            }}
          >
            Agriculture Spraying
          </Link>
        </div>
        <div className="dropdown-list">
          <Link
            to="/land-mapping"
            onClick={() => {
              setFour(false);
              setThree(true);
            }}
          >
            Land Mapping
          </Link>
        </div>
        <div className="dropdown-list">
          <Link
            to="/land-surveillance"
            onClick={() => {
              setFour(false);
              setThree(true);
            }}
          >
            Land Surveillance
          </Link>
        </div>
        <div className="dropdown-list">
          <Link
            to="/disaster-management"
            onClick={() => {
              setFour(false);
              setThree(true);
            }}
          >
            Disaster Management
          </Link>
        </div>
        <div className="dropdown-list">
          <Link
            to="/pilot-training"
            onClick={() => {
              setFour(false);
              setThree(true);
            }}
          >
            Pilot Training
          </Link>
        </div>
      </div>
    </CSSTransition>
  );
}
