import React from "react";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <div className="header">
        <h2>
          <Link to="/">Raihan</Link>
        </h2>
        <div className="nav-item">
          <Link to="/">Home</Link>
          <Link to="/project">Project</Link>
          <Link to="/contact">Contact</Link>
          <button>
            <div className="btn-wrap-login">
              <span>Login</span>{" "}
              <ArrowRightOnRectangleIcon className="logoutIcon" />{" "}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
