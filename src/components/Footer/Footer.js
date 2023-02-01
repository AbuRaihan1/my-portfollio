import React from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <div className="social">
        <div className="icons-wrapper">
          <Link to="https://www.facebook.com/AbuRaihan019" target="_blank">
            <FaFacebookF className="footerIcons"></FaFacebookF>
          </Link>

          <Link to="https://www.linkedin.com/in/aburaihan019/" target="_blank">
            <FaLinkedinIn className="footerIcons"></FaLinkedinIn>
          </Link>

          <Link to="https://github.com/AbuRaihan1">
            <FaGithub className="footerIcons"></FaGithub>
          </Link>

          <Link to="#">
            <FaYoutube className="footerIcons"></FaYoutube>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
