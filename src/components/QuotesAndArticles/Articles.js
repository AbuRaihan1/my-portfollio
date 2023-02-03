import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import SectionTitle from "../SectionTItle/SectionTitle";
import github from "../skills/skillsiImg/github.png";
import Quotes from "./Quotes";
import "./QuotesAndArticles.css";
const Articles = () => {
  const articles = useLoaderData();
  const [openArticle, setOpenArticle] = useState(false);
  console.log(articles);

  const openArticleHandle = () => {
    setOpenArticle(!openArticle);
    const closeBtn = document.getElementById("closeOpenArticles");
    const fullArticles = document.querySelector(".full-article");
    if (!openArticle) {
      fullArticles.style.display = "none";
    } else {
      fullArticles.style.display = "block";
    }
  };


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
               {
              articles.map(article => console.log(article))
               }
                <button>Read more...</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="full-article">
        <button onClick={openArticleHandle} id="closeOpenArticles">
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Articles;
