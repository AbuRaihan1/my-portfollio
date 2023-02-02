import {
  FlagIcon,
  GlobeAltIcon,
  InboxIcon,
  MapIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../logo.svg";
import SectionTitle from "../SectionTItle/SectionTitle";
import "./About.css";
const About = () => {
  return (
    <div className="about">
      <SectionTitle title="About Me"></SectionTitle>
      <Container fluid>
        <Row className="about-content-devide">
          <Col md="6" lg="6" sm="12">
            <div className="about-item-wrapper">
              <div className="about-img-content">
                <img src={logo} alt="" />
              </div>
            </div>
          </Col>

          <Col md="6" lg="6" sm="12">
            <div className="about-item-wrapper">
              <div className="about-text-content">
                <p>
                  HI! I'm a professional Front-end web developer. Learning web
                  development since 2021. passionate to learn programming. and i
                  want to make technology out of thought. Self-learner.{" "}
                </p>
              </div>
            </div>
            <Row>
              <Col lg="6">
                <div className="inner-about-content">
                  <div>
                    <i>
                      <UserIcon className="aboutInnerIcon" />
                    </i>
                    <b>Name : </b> <span>Abu Raihan</span>
                  </div>

                  <div>
                    <i>
                      <PhoneIcon className="aboutInnerIcon" />
                    </i>
                    <b>Phone : </b> <span>01916891765</span>
                  </div>

                  <div>
                    <i>
                      <InboxIcon className="aboutInnerIcon" />
                    </i>
                    <b>: </b> <span>raihanahmed01973@gmail.com</span>
                  </div>
                </div>
              </Col>
              <Col lg="6">
                <div className="inner-about-content">
                  <div>
                    <i>
                      <FlagIcon className="aboutInnerIcon" />
                    </i>
                    <b>Nationality : </b> <span>Bangladeshi</span>
                  </div>

                  <div>
                    <i>
                      <MapIcon className="aboutInnerIcon" />
                    </i>
                    <b>Address : </b> <span>Dhaka</span>
                  </div>

                  <div>
                    <i>
                      <GlobeAltIcon className="aboutInnerIcon" />
                    </i>
                    <b>Freelance : </b> <span>Available</span>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
