import React from "react";
import About from "../About/About";
import UnderHeader from "../UnderHeader/UnderHeader";
import "./Home.module.css";
const Home = ({ title }) => {
  return (
    <div>
      <UnderHeader></UnderHeader>
      <About></About>
    </div>
  );
};

export default Home;
