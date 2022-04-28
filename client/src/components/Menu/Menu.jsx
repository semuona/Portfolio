import React from "react";
import { Link } from "react-router-dom";
import "./menu.scss";
export default function Menu() {
  return (
    <div className="menuContainer">
      <a className="developer" href="#about">
        About Me
      </a>
      <a className="developer" href="#timeline">
        Journey
      </a>
      <a className="developer" href="#skills">
        Skills
      </a>
      <a className="developer" href="#cv">
        Download CV
      </a>
      <a className="developer" href="#contact">
        Contact
      </a>
    </div>
  );
}
