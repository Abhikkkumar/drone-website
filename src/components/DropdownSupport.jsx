import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/dropdownProd.css";
import { CSSTransition } from "react-transition-group";

export default function DropdownSupport({ dropdownSpt, setThree, setFour }) {
  const navigate = useNavigate();
  return (
    <CSSTransition
      in={dropdownSpt ? true : false}
      timeout={500}
      classNames="fade"
      unmountOnExit={true}
    >
      <div className="dropdownProd">
        <div
          className="dropdown-list"
          onClick={() => {
            navigate("/agriculture-spraying");
            setFour(false);
            setThree(true);
          }}
        >
          <p>Agriculture Spraying</p>
        </div>
        <div
          className="dropdown-list"
          onClick={() => {
            navigate("/land-mapping");
            setFour(false);
            setThree(true);
          }}
        >
          <p>Land Mapping</p>
        </div>
        <div
          className="dropdown-list"
          onClick={() => {
            navigate("/land-surveillance");
            setFour(false);
            setThree(true);
          }}
        >
          <p>Land Surveillance</p>
        </div>
        <div
          className="dropdown-list"
          onClick={() => {
            navigate("/disaster-management");
            setFour(false);
            setThree(true);
          }}
        >
          <p>Disaster Management</p>
        </div>
        <div
          className="dropdown-list"
          onClick={() => {
            navigate("/pilot-training");
            setFour(false);
            setThree(true);
          }}
        >
          <p>Pilot Training</p>
        </div>
      </div>
    </CSSTransition>
  );
}
