import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
// import ParticlesBackground from "../Particles/ParticlesBackground";
const Header = () => {
  const [closeNav, setCloseNav] = useState(false);
  const handleCloseNav = () => {
    setCloseNav(!closeNav);
    let navItems = document.getElementById("navItems");
    if (!closeNav) {
      navItems.style.display = "block";
    } else {
      navItems.style.display = "none";
    }
  };
  return (
    <div className="header-wrapper">
      <div className="header">
        <h2>
          <Link to="/">Raihan</Link>
        </h2>
        <div className="nav-item" id="navItems">
          <Link to="/">Home</Link>
          {/* <Link to="/about">About</Link> */}
          <Link to="/services">Services</Link>
          <Link to="/project">Projects</Link>
          <Link to="/articles">Articles</Link>
          <Link to="/contact">Contact</Link>
          <button>
            <div className="btn-wrap-login">
              <span>Login</span>
            </div>
          </button>
        </div>

        {/* <ParticlesBackground></ParticlesBackground> */}
      </div>
      <div className="navIcon">
        {closeNav ? (
          <XMarkIcon className="xmarkIcon" onClick={handleCloseNav}></XMarkIcon>
        ) : (
          <Bars2Icon className="barsIcon" onClick={handleCloseNav}></Bars2Icon>
        )}
      </div>
    </div>
  );
};

export default Header;
