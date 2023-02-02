import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
          <NavLink className={({ isActive }) => (isActive ? 'active-link' : undefined)} to="/">Home</NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'active-link' : undefined)} to="/services">Services</NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'active-link' : undefined)} to="/project">Projects</NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'active-link' : undefined)} to="/articles">Articles</NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'active-link' : undefined)} to="/contact">Contact</NavLink>
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
