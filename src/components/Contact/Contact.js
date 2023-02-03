import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "../SectionTItle/SectionTitle";
import "./Contact.css";
import {
  FlagIcon,
  GlobeAltIcon,
  InboxIcon,
  MapIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
const Contact = () => {
  const handleSendMsg = () => {
    alert("This Button does not work yet");
  };
  return (
    <div className="contact">
      <SectionTitle title="Contact with me"></SectionTitle>
      <Container>
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
                <b>Email : </b> <span>raihanahmed01973@gmail.com</span>
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

        <Row>
          <Col md="6">
            <input type="text" placeholder="Your Name" />
          </Col>
          <Col md="6">
            <input type="email" placeholder="Your Email" />
          </Col>
          <Col md="12">
            <textarea placeholder="enter your message here"></textarea>
          </Col>
        </Row>
        <button onClick={handleSendMsg}>Send message</button>

        <Col md="12">
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                title="unique"
                className="mapInner"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=Gazipuir,%20bangladesh&t=k&z=9&ie=UTF8&iwloc=&output=embed"
              ></iframe>
              <a href="https://www.embedgooglemap.net"> </a>
            </div>
          </div>
        </Col>
      </Container>
    </div>
  );
};

export default Contact;
