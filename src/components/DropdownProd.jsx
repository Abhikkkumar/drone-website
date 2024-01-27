import React from "react";
import { Link } from "react-router-dom";
import "../style/dropdownProd.css";
import { CSSTransition } from "react-transition-group";

export default function DropdownProd({ dropdown, setFour, setThree }) {
  return (
    <CSSTransition
      in={dropdown ? true : false}
      timeout={500}
      classNames="fade"
      unmountOnExit={true}
    >
      <div className="dropdownProd">
        <div className="dropdown-list">
          <Link
            to="/thea-agriculture-drone-16-litres"
            onClick={() => {
              setFour(true);
              setThree(false);
            }}
          >
            Thea Agriculture Drone 16 Litres
          </Link>
        </div>
        <div className="dropdown-list">
          <Link
            to="/thea-agriculture-drone-10-litres"
            onClick={() => {
              setFour(true);
              setThree(false);
            }}
          >
            Thea Agriculture Drone 10 Litres
          </Link>
        </div>
        <div className="dropdown-list">
          <Link
            to="/naina-disaster-management-drone"
            onClick={() => {
              setFour(true);
              setThree(false);
            }}
          >
            Naina Disaster Management Drone
          </Link>
        </div>
        <div className="dropdown-list">
          <Link
            to="/surveillance-drone"
            onClick={() => {
              setFour(true);
              setThree(false);
            }}
          >
            Surveillance Drone
          </Link>
        </div>
      </div>
    </CSSTransition>
  );
}
