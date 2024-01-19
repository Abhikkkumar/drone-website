import React from "react";
import { Link } from "react-router-dom";
import "../style/dropdownProd.css";

export default function DropdownProd() {
  return (
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
  );
}
