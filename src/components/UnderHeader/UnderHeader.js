import React from "react";
import { Link } from "react-router-dom";
import TypeWriterEffect from "react-typewriter-effect";
// import logo from "../../logo.svg";
import logo from "../../../src/images/raihan_formal.jpg";
import "./UnderHeader.css";
const UnderHeader = () => {
  return (
    <div className="underHeader-wrapper">
      <div className="underHeader_item">
        <div className="underHeader_text_side common-underHeader-div">
          <div className="my-text-underHeader">
            <h1>HI!</h1>
            <h2>
              I'm <span>Abu Raihan</span>
            </h2>

            <TypeWriterEffect
              textStyle={{
                fontFamily: "Red Hat Display",
                color: "#fff",
                fontWeight: 500,
                fontSize: "47px",
              }}
              startDelay={1500}
              cursorColor="#0284C7"
              multiText={[
                "Web Designer",
                "Web Developer",
                "Programmer",
                "Front-end Developer",
              ]}
              multiTextDelay={1000}
              typeSpeed={30}
              multiTextLoop
            />
            <p>
              I'm a professional front-end web developer. <br />
              I have been learning web development since 2021. <br />
              My Work Is Always Simple, Fresh, And Pixel-Perfect. readable code
              also.
            </p>
            <div className="underHeader-buttons">
              <button>Download Cv</button>
              <Link to="/contact">
                <button>Contact</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="underHeader-img-side common-underHeader-div">
          <img
            src={logo}
            alt=""
            className=""
            // style={{ height: "500px", width: "500px", borderRadius: "50%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default UnderHeader;
