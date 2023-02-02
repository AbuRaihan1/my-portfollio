import React from "react";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import SectionTitle from "../SectionTItle/SectionTitle";
import { CodeBracketIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import "./Services.css";
const Services = () => {
  return (
    <div className="services">
      <SectionTitle title=" My Services"></SectionTitle>
      <Container>
        <Row>
          <Tabs defaultActiveKey="tab-1" variant="tabs">
            <Tab eventKey="tab-1" title="Services">
              <Row>
                <Col lg="4" md="6">
                  <div className="inner-service-content">
                    <CodeBracketIcon className="services-inner-icon"></CodeBracketIcon>
                    <h2>Web Design</h2>
                    <p>
                      Conversion from PSD/XD/Figma to Pixel Perfect
                      Design,Device Responsive, jQuery Plugin Effects,Clean
                      Hand-Written Code with W3C Validation, Cross-Browser
                      Compatibility.
                    </p>
                  </div>
                </Col>

                <Col lg="4" md="6">
                  <div className="inner-service-content">
                    <PencilSquareIcon className="services-inner-icon"></PencilSquareIcon>
                    <h2>Graphic Design</h2>
                    <p>
                      Conversion from PSD/XD/Figma to Pixel Perfect
                      Design,Device Responsive, jQuery Plugin Effects,Clean
                      Hand-Written Code with W3C Validation, Cross-Browser
                      Compatibility.
                    </p>
                  </div>
                </Col>

                <Col lg="4" md="6">
                  <div className="inner-service-content">
                    <CodeBracketIcon className="services-inner-icon"></CodeBracketIcon>
                    <h2>Web Development</h2>
                    <p>
                      Conversion from PSD/XD/Figma to Pixel Perfect
                      Design,Device Responsive, jQuery Plugin Effects,Clean
                      Hand-Written Code with W3C Validation, Cross-Browser
                      Compatibility.
                    </p>
                  </div>
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="tab-2" title="Features">
              <Row>
                <Col lg="4" md="6">
                  <div className="inner-service-content">
                    <CodeBracketIcon className="services-inner-icon"></CodeBracketIcon>
                    <h2>Web Design</h2>
                    <p>
                      Conversion from PSD/XD/Figma to Pixel Perfect
                      Design,Device Responsive, jQuery Plugin Effects,Clean
                      Hand-Written Code with W3C Validation, Cross-Browser
                      Compatibility.
                    </p>
                  </div>
                </Col>

                <Col lg="4" md="6">
                  <div className="inner-service-content">
                    <PencilSquareIcon className="services-inner-icon"></PencilSquareIcon>
                    <h2>Graphic Design</h2>
                    <p>
                      Conversion from PSD/XD/Figma to Pixel Perfect
                      Design,Device Responsive, jQuery Plugin Effects,Clean
                      Hand-Written Code with W3C Validation, Cross-Browser
                      Compatibility.
                    </p>
                  </div>
                </Col>

                <Col lg="4" md="6">
                  <div className="inner-service-content">
                    <CodeBracketIcon className="services-inner-icon"></CodeBracketIcon>
                    <h2>Web Development</h2>
                    <p>
                      Conversion from PSD/XD/Figma to Pixel Perfect
                      Design,Device Responsive, jQuery Plugin Effects,Clean
                      Hand-Written Code with W3C Validation, Cross-Browser
                      Compatibility.
                    </p>
                  </div>
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="tab-3" title="Support">
              <Row>
                <Col lg="4" md="6">
                  <div className="inner-service-content">
                    <CodeBracketIcon className="services-inner-icon"></CodeBracketIcon>
                    <h2>Web Design</h2>
                    <p>
                      Conversion from PSD/XD/Figma to Pixel Perfect
                      Design,Device Responsive, jQuery Plugin Effects,Clean
                      Hand-Written Code with W3C Validation, Cross-Browser
                      Compatibility.
                    </p>
                  </div>
                </Col>

                <Col lg="4" md="6">
                  <div className="inner-service-content">
                    <PencilSquareIcon className="services-inner-icon"></PencilSquareIcon>
                    <h2>Graphic Design</h2>
                    <p>
                      Conversion from PSD/XD/Figma to Pixel Perfect
                      Design,Device Responsive, jQuery Plugin Effects,Clean
                      Hand-Written Code with W3C Validation, Cross-Browser
                      Compatibility.
                    </p>
                  </div>
                </Col>

                <Col lg="4" md="6">
                  <div className="inner-service-content">
                    <CodeBracketIcon className="services-inner-icon"></CodeBracketIcon>
                    <h2>Web Development</h2>
                    <p>
                      Conversion from PSD/XD/Figma to Pixel Perfect
                      Design,Device Responsive, jQuery Plugin Effects,Clean
                      Hand-Written Code with W3C Validation, Cross-Browser
                      Compatibility.
                    </p>
                  </div>
                </Col>
              </Row>
            </Tab>
          </Tabs>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
