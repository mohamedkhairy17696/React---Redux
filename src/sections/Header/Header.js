import React from "react";
import "./Header.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar navbar-expand-md navbar-dark cyborg-navbar">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt=""></img>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mainmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a href="/search" className="nav-link">
                  Search
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  href="/#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Details
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#learn" className="dropdown-item">
                      Fortnite
                    </a>
                  </li>
                  <li>
                    <a href="#next" className="dropdown-item">
                      Where to go next
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#faq" className="nav-link">
                  Streams
                </a>
              </li>
              <li className="nav-item">
                <Link to="/profile" className="nav-link">
                  Profile
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
