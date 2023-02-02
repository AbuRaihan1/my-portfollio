import React from "react";
import About from "../About/About";
import Skills from "../skills/Skills";
import Team from "../Team/Team";
import UnderHeader from "../UnderHeader/UnderHeader";
import "./Home.module.css";
const Home = () => {
  return (
    <div>
      <UnderHeader></UnderHeader>
      <About></About>
      <Skills></Skills>
      <Team></Team>
    </div>
  );
};

export default Home;
