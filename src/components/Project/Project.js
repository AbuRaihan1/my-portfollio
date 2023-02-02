import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import SectionTitle from "../SectionTItle/SectionTitle";
import "./Project.css";
import courier from "./ProjectImg/courier.png";
import darkDashboard from "./ProjectImg/darkDashboard.png";
import shaajplastic from "./ProjectImg/shaajplastic.png";
const Project = () => {
  return (
    <div className="project">
      <SectionTitle title="Projects i have done"></SectionTitle>
      <Container>
        <Row>
          <Col md="6" lg="4">
            <div className="projects-wrapper">
              <Link
                to="https://aburaihan1.github.io/final-courier-/"
                target="_blank"
              >
                <div className="projects-item-wrapper">
                  <img src={courier} alt="" />
                  <div className="projects-wrapper-text">
                    <h2>Courier Service</h2>
                    <p>
                      it was a client project, courier site. i had work on it as
                      a front-end designer.
                    </p>
                    <button>Visit website</button>
                  </div>
                </div>
              </Link>
            </div>
          </Col>

          <Col md="6" lg="4">
            <div className="projects-wrapper">
              <Link
                to="https://aburaihan1.github.io/shaaj-plastic-industries-project-2/"
                target="_blank"
              >
                <div className="projects-item-wrapper">
                  <img src={shaajplastic} alt="" />
                  <div className="projects-wrapper-text">
                    <h2>Shaaj Plastic</h2>
                    <p>
                      it was a client project, plasstic industires site. i had
                      work on it as a front-end designer.
                    </p>
                    <button>Visit website</button>
                  </div>
                </div>
              </Link>
            </div>
          </Col>

          <Col md="6" lg="4">
            <div className="projects-wrapper">
              <Link
                to="https://aburaihan1.github.io/my-dashboard-dark/dark_theme.html"
                target="_blank"
              >
                <div className="projects-item-wrapper">
                  <img src={darkDashboard} alt="" />
                  <div className="projects-wrapper-text">
                    <h2>Admin Dashboard</h2>
                    <p>
                      it was a client project, Admin Dashboard. i had work on it
                      as a front-end development.
                    </p>
                    <button>Visit website</button>
                  </div>
                </div>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Project;
