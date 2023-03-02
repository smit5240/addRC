import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark navbar-dark">
        <a className="navbar-brand" href="/">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li
              className={`nav-item ${
                location.pathname === "/" ? "text-white" : ""
              }`}
            >
              <Link className="nav-link" to="/">
                Form
              </Link>
            </li>
            <li
              className={`nav-item ${
                location.pathname === "/table" ? "text-white" : ""
              }`}
            >
              <Link className="nav-link" to="/table">
                Table
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
