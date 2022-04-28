import React from "react";
import "./skills.scss";
export default function Skills() {
  return (
    <div style={{ position: "relative" }}>
      <div
        className="developer"
        id="skillText"
        style={{
          position: "absolute",
          top: "300px",
          left: "0",
          fontSize: "2.5rem",
          width: "100%",
          fontStyle: "italic",
        }}
      >
        Skills
      </div>
      <div className="skillsContainer" id="skills">
        <div>
          <a href="hello" className="box">
            <div className="box__image"> HTML</div>
          </a>

          <a href="j" className="box">
            <div className="box__image">CSS/SCSS</div>
          </a>

          <a href="j" className="box">
            {" "}
            <div className="box__image"> JavaScript</div>
          </a>

          <a href="j" className="box">
            <div className="box__image"> React</div>
          </a>

          <a href="j" className="box">
            <div className="box__image"> Next</div>
          </a>

          <a href="ff" className="box">
            {" "}
            <div className="box__image"> Node</div>
          </a>
          <a href="ff" className="box">
            {" "}
            <div className="box__image"> Express</div>
          </a>
          <a href="ff" className="box">
            {" "}
            <div className="box__image"> MongoDB</div>
          </a>
          <a href="ff" className="box">
            {" "}
            <div className="box__image"> Git</div>
          </a>
        </div>
      </div>
    </div>
  );
}
