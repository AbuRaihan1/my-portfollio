import React from "react";
import { FaTimes } from "react-icons/fa";
import "./QuotesAndArticles.css";
const ArticleContent = ({ article }) => {
  const { id, img, title, articleDesc } = article;

  const fullArticles = document.querySelector(".full-article");
  const openArticleHandle = () => {
    fullArticles.style.display = "none";
  };

  const readMore = () => {
    fullArticles.style.display = "block";
  };

  return (
    <div className="article-content-another-section">
      <div key={id}>
        <div className="articles-content">
          <img src={img} alt="" />
          <div className="articles-text">
            <h3>{title}</h3>
            <p>{articleDesc.slice(0, 154) + "..."}</p>
            <button onClick={readMore}>Read more...</button>
          </div>
        </div>
      </div>

      {/* read more full article  */}
      <div className="full-article ">
        <button onClick={openArticleHandle} id="closeOpenArticles">
          <FaTimes />
        </button>
        <p>{articleDesc}</p>
      </div>
    </div>
  );
};

export default ArticleContent;
