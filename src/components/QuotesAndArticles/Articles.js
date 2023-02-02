import React from "react";
import "./QuotesAndArticles.css";
import SectionTitle from "../SectionTItle/SectionTitle";
import { Col, Container, Row } from "react-bootstrap";
import github from "../skills/skillsiImg/github.png";
import Quotes from "./Quotes";
const Articles = () => {
  return (
    <div className="articles">
      <SectionTitle title="Quotes and articles"></SectionTitle>
      <Container>
        <Row>
        <Quotes></Quotes>
          <Col lg="4" md="6">
            <div className="articles-content">
              <img src={github} alt="" />
              <div className="articles-text">
                <h3>Title</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  architecto modi quae ullam corporis odit inventore repudiandae
                  asperiores consequuntur quos corrupti, voluptatibus cum autem!
                  Dolor accusantium, aliquam quis molestias obcaecati saepe
                  quisquam eum at alias! Dolores enim aut repellat soluta.
                </p>
                <button>Read more...</button>
              </div>
            </div>
          </Col>
          <Col lg="4" md="6">
            <div className="articles-content">
              <img src={github} alt="" />
              <div className="articles-text">
                <h3>Title</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  architecto modi quae ullam corporis odit inventore repudiandae
                  asperiores consequuntur quos corrupti, voluptatibus cum autem!
                  Dolor accusantium, aliquam quis molestias obcaecati saepe
                  quisquam eum at alias! Dolores enim aut repellat soluta.
                </p>
                <button>Read more...</button>
              </div>
            </div>
          </Col>
          <Col lg="4" md="6">
            <div className="articles-content">
              <img src={github} alt="" />
              <div className="articles-text">
                <h3>Title</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  architecto modi quae ullam corporis odit inventore repudiandae
                  asperiores consequuntur quos corrupti, voluptatibus cum autem!
                  Dolor accusantium, aliquam quis molestias obcaecati saepe
                  quisquam eum at alias! Dolores enim aut repellat soluta.
                </p>
                <button>Read more...</button>
              </div>
            </div>
          </Col>
        </Row>
        
      </Container>
    </div>
  );
};

export default Articles;
