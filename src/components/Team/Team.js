import React from "react";
import Carousel from "react-bootstrap/Carousel";
import SectionTitle from "../SectionTItle/SectionTitle";
import babul from "./teamImg/babul.jpg";
import shiblu from "./teamImg/shiblu.jpg";
// import snigdha from "./teamImg/snigdha.png";
import logo from "../../logo.svg";

import { FaFacebookF, FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Team.css";
const Team = () => {
  return (
    <div className="team">
      <SectionTitle title="My teams"></SectionTitle>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={logo} alt="First slide" />
          <div className="team-member">
            <h3>Hamim Snigdha</h3>
            <p>
              Professional front-end web designer. learning more better
              front-end development.
            </p>
            <div className="icons-wrapper">
              <Link
                to="https://www.facebook.com/hamimyasmin.snigdha"
                target="_blank"
              >
                <FaFacebookF className="footerIcons"></FaFacebookF>
              </Link>

              <Link to="#">
                <FaLinkedinIn className="footerIcons"></FaLinkedinIn>
              </Link>

              <Link to="#">
                <FaGithub className="footerIcons"></FaGithub>
              </Link>

              <Link to="#">
                <FaYoutube className="footerIcons"></FaYoutube>
              </Link>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={shiblu} alt="First slide" />
          <div className="team-member">
            <h3>Farabi Shiblu</h3>
            <p>
              Professional front-end web designer. learning more better
              front-end development.
            </p>
            <div className="icons-wrapper">
              <Link
                to="https://www.facebook.com/shiblu.shiblu.520900"
                target="_blank"
              >
                <FaFacebookF className="footerIcons"></FaFacebookF>
              </Link>

              <Link to="#">
                <FaLinkedinIn className="footerIcons"></FaLinkedinIn>
              </Link>

              <Link to="#">
                <FaGithub className="footerIcons"></FaGithub>
              </Link>

              <Link to="#">
                <FaYoutube className="footerIcons"></FaYoutube>
              </Link>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={babul} alt="First slide" />
          <div className="team-member">
            <h3>Babul Hossain</h3>
            <p>
              Professional front-end web designer. learning more better
              front-end development.
            </p>
            <div className="icons-wrapper">
              <Link
                to="https://www.facebook.com/profile.php?id=100034242671249"
                target="_blank"
              >
                <FaFacebookF className="footerIcons"></FaFacebookF>
              </Link>

              <Link to="#">
                <FaLinkedinIn className="footerIcons"></FaLinkedinIn>
              </Link>

              <Link to="#">
                <FaGithub className="footerIcons"></FaGithub>
              </Link>

              <Link to="#">
                <FaYoutube className="footerIcons"></FaYoutube>
              </Link>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Team;
