import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./QuotesAndArticles.css";
const Quotes = () => {
  return (
    <Container>
      <Row className="my-5">
        <Col md="6" lg="4">
          <div className="quotes">
            <p>
              Do you search your self <br />
              people will search your self
            </p>
            <cite>-Abu Raihan</cite>
          </div>
        </Col>

        <Col md="6" lg="4">
          <div className="quotes">
            <p> Many things are not permanent. some things upgrade with  time. and man is on of them. so don't judge someone too early. 
            </p>
            <cite>-Abu Raihan</cite>
          </div>
        </Col>
        <Col md="6" lg="4">
          <div className="quotes">
            <p>
              Makes dream, not a hope. <br />
              cause, hope depends another one. but dream depends only up to you.
            </p>
            <cite>-Abu Raihan</cite>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Quotes;
