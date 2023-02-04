import React from "react";
import { Container } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import SectionTitle from "../SectionTItle/SectionTitle";
import ArticleContent from "./ArticleContent";
import Quotes from "./Quotes";
import "./QuotesAndArticles.css";
const Articles = () => {
  const articles = useLoaderData();

  return (
    <div className="articles">
      <SectionTitle title="Quotes and articles"></SectionTitle>
      <Container>
        <Quotes></Quotes>
        {/* <div className="articles-content-warpper">
          {articles.map((article) => (
            <ArticleContent
              // readMore={readMore}
              article={article}
              key={article.id}
            ></ArticleContent>
          ))}
        </div> */}
        <h2 style={{textAlign:"center", color:"white"}}>Article will add soooooon</h2>
      </Container>
    </div>
  );
};

export default Articles;
