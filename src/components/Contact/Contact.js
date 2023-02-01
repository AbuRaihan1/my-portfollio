import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "../SectionTItle/SectionTitle";
import "./Contact.css";
const Contact = () => {
  const handleSendMsg = () => {
    alert("This Button does not work yet");
  };
  return (
    <div className="contact">
      <SectionTitle title="Contact with me"></SectionTitle>
      <Container>
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
          <div class="mapouter">
            <div class="gmap_canvas">
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
