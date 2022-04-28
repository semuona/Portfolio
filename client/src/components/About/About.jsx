import React from "react";
import Photo from "../images/prof1.jpg";
import "./about.scss";

export default function About() {
  return (
    <div className="aboutContainer" id="about" style={{ marginTop: "270px" }}>
      <div className="photo">
        <h1>Simona Ziauberyte</h1>
        <img src={Photo} alt="Simona" />

        <div className="glow-wrap">
          <i className="glow"></i>
        </div>
      </div>
      <h2 className="aboutText" style={{ fontStyle: "italic" }}>
        Professional with extensive background in hospitality and retail, deep
        knowledge of how to meet customer expectations. My international
        experience from different countries makes me a great fit for diverse
        teams. Currently looking for my next challenging role as a web developer
        where I can apply my work experience combined with my knowledge I gained
        as a full stack web development student.
      </h2>
    </div>
  );
}
