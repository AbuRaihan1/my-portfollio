import React from "react";
import About from "../About/About";
import Skills from "../skills/Skills";
import UnderHeader from "../UnderHeader/UnderHeader";
import "./Home.module.css";
const Home = () => {
  return (
    <div>
      <UnderHeader></UnderHeader>
      <About></About>
      <Skills></Skills>
      {/* <Articles></Articles> */}
    </div>
  );
};

export default Home;
