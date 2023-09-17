import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import SectionTitle from "../SectionTItle/SectionTitle";
import "./Project.css";
import courier from "./ProjectImg/courier.png";
import darkDashboard from "./ProjectImg/darkDashboard.png";
import shaajplastic from "./ProjectImg/shaajplastic.png";
import vbdGazipur from "../../../src/images/vbdGazipur.png";
const Project = () => {
  const projects = [
    {
      img: vbdGazipur,
      link: "https://vbd-gazipur.netlify.app/",
      title: "VBD Gazipur",
      text: "It's a fully dynamic project using react js and tailwind css. for awesome slider used swiper js.",
    },

    {
      img: courier,
      link: "https://aburaihan1.github.io/final-courier-/",
      title: "Courier Service",
      text: "it was a client project, courier site. i had work on it as a front-end designer.",
    },
    {
      img: shaajplastic,
      link: "https://aburaihan1.github.io/shaaj-plastic-industries-project-2/",
      title: "Shaaj Plastic",
      text: "it was a client project, courier site. i had work on it as a front-end designer.",
    },
    {
      img: darkDashboard,
      link: "https://aburaihan1.github.io/my-dashboard-dark/dark_theme.html",
      title: "Graph",
      text: "it was a client project, courier site. i had work on it as a front-end designer.",
    },
  ];
  return (
    <div className="project">
      <SectionTitle title="Projects i have done"></SectionTitle>
      <Container>
        <Row>
          {projects.map((project, idx) => (
            <Col key={idx} xs={12} sm={6} md={4} lg={4}>
              <div className="projects-wrapper">
                <Link to={project.link} target="_blank">
                  <div className="projects-item-wrapper">
                    <img src={project.img} alt="" />
                    <div className="projects-wrapper-text">
                      <h2>{project.title}</h2>
                      <p>{project.text}</p>
                      <button>Visit website</button>
                    </div>
                  </div>
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Project;
