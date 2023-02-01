import React from "react";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import "./Header.css";
// import ParticlesBackground from "../Particles/ParticlesBackground";
const Header = () => {
  return (
    <div className="header-wrapper">
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
              <span>Login</span>
            </div>
          </button>
        </div>
        {/* <ParticlesBackground></ParticlesBackground> */}
      </div>
    </div>
  );
};

export default Header;
