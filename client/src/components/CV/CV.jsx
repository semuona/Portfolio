import React from "react";
import resume from "../images/resume_2022.pdf";
import "./cv.scss";

export default function CV() {
  return (
    <div id="cv" style={{ marginBottom: "50px" }}>
      {" "}
      <a className="a1" href={resume} download="CV_Ziauberyte.pdf">
        <span> Download CV </span>
        <div class="wave"></div>
      </a>
      {/*       <button>
        <a href={resume} download="CV_Ziauberyte.pdf">
          {" "}
          Download CV{" "}
        </a>
      </button> */}
    </div>
  );
}
