import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="container navbar navbar-transparent navbar-expand-lg">
    <div className="navbar-brand">
      <Link to="/app/home" className="logo">
        Online Photo Editor
      </Link>
      <p>
        Photos delivered by{" "}
        <u>
          <a href="https://unsplash.com/" target="_blank">
            Unsplash
          </a>
        </u>
      </p>
    </div>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon">
        <i class="fas fa-bars" />
      </span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item p-3">
          <div className="dropdown">
            <button
              className="btn btn-success px-3 dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Information
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <Link to="/app/docs" className="dropdown-item">
                Documentation
              </Link>
            </div>
          </div>
        </li>
        <li className="nav-item p-3">
          <Link to="/app/account">
            <button className="btn btn-success px-3">Account</button>
          </Link>
        </li>
        <li className="nav-item p-3">
          <button className="btn btn-success px-3">Log Out</button>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
