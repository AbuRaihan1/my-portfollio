import React from "react";
import { Link } from "react-router-dom";
import errorImg from "../../errrorImg.jpg";
import Header from "../Header/Header";
import "./ErrorElem.css";
const ErrorElements = () => {
  return (
    <>
      {" "}
      <div className="errorpage">
        <img src={errorImg} alt="" />
        <Link to="/">Back to home page</Link>
      </div>
      <Header></Header>
    </>
  );
};

export default ErrorElements;
