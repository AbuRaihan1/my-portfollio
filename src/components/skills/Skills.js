import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "../SectionTItle/SectionTitle";
import "./skills.css";

import html from "./skillsiImg/html.png";
import css from "./skillsiImg/css.png";
import js from "./skillsiImg/js.png";
import bootstrap from "./skillsiImg/bootstrap.png";
import github from "./skillsiImg/github.png";
import tailwind from "./skillsiImg/tailwind.png";
import node from "./skillsiImg/node.png";
import reactImg from "./skillsiImg/react.png";
import firebase from "./skillsiImg/firebase.png";
import express from "./skillsiImg/express.png";
import mongoDB from "./skillsiImg/mongoDB.png";
import redux from "./skillsiImg/redux.png";

const Skills = () => {
  return (
    <div>
      <div className="skills">
      <SectionTitle title="Those skills i have"></SectionTitle>
        <Container>
          <Row>
            <Col lg="3" md="4">
              <div>
                <div className="sikklsItem">
                  <img src={html} alt="" />
                  <div className="skillsNametext">
                    <h2>HTML</h2>
                    <p>Advanced</p>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg="3" md="4">
              <div>
                <div className="sikklsItem">
                  <img src={css} alt="" />
                  <div className="skillsNametext">
                    <h2>CSS</h2>
                    <p>Advanced</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="3" md="4">
              <div>
                <div className="sikklsItem">
                  <img src={js} alt="" />
                  <div className="skillsNametext">
                    <h2>JavaScriipt</h2>
                    <p>Intermediate</p>
                  </div>
                </div>
              </div>{" "}
            </Col>

            <Col lg="3" md="4">
              <div>
                <div className="sikklsItem">
                  <img src={bootstrap} alt="" />
                  <div className="skillsNametext">
                    <h2>Bootstrap</h2>
                    <p>Advanced</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="3" md="4">
              <div>
                <div className="sikklsItem">
                  <img src={tailwind} alt="" />
                  <div className="skillsNametext">
                    <h2>Tailwind</h2>
                    <p>Intermediate</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="3" md="4">
              <div>
                <div className="sikklsItem">
                  <img src={reactImg} alt="" />
                  <div className="skillsNametext">
                    <h2>React</h2>
                    <p>Intermediate</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="3" md="4">
              <div>
                <div className="sikklsItem">
                  <img src={node} alt="" />
                  <div className="skillsNametext">
                    <h2>Node</h2>
                    <p>Intermediate</p>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg="3" md="4">
              <div>
                <div className="sikklsItem">
                  <img src={mongoDB} alt="" />
                  <div className="skillsNametext">
                    <h2>Mongo DB </h2>
                    <p>Intermediate</p>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg="3" md="4">
              <div>
                <div className="sikklsItem">
                  <img src={express} alt="" />
                  <div className="skillsNametext">
                    <h2>Express </h2>
                    <p>Intermediate</p>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg="3" md="4">
              <div>
                <div className="sikklsItem">
                  <img src={firebase} alt="" />
                  <div className="skillsNametext">
                    <h2>Firebase</h2>
                    <p>Intermediate</p>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg="3" md="4">
              <div>
                <div className="sikklsItem">
                  <img src={github} alt="" />
                  <div className="skillsNametext">
                    <h2>Github </h2>
                    <p>Intermediate</p>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg="3" md="4">
              <div>
                <div className="sikklsItem">
                  <img src={redux} alt="" />
                  <div className="skillsNametext">
                    <h2>Redux </h2>
                    <p>Beginer</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Skills;
