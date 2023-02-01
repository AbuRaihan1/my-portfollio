import React from "react";
import "./SectionTitle.css";
const SectionTitle = ({ title }) => {
  return (
    <div className="section-title-wrapper">
      <h2>{title}</h2>
    </div>
  );
};

export default SectionTitle;
