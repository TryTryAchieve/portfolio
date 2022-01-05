import React from "react";
import "./header.css";
import image1 from "./toppic.png";

const Header = () => {
  return (
    <div className="header">
      <div className="menu">
        <div className="option">
          <a href="#about">
            <i class="fi fi-rr-info"> About</i>
          </a>
        </div>
        <div className="option">
          <a href="#skill">
            <i class="fi fi-rr-form"> Skills</i>
          </a>
        </div>
        <div className="option">
          <a href="#project">
            <i class="fi fi-rr-edit-alt"> Projects</i>
          </a>
        </div>
        <div className="option">
          <a href="#contact">
            <i class="fi fi-rr-envelope"> Contact</i>
          </a>
        </div>
      </div>
      <img src={image1} className="top-pic"/>
    </div>
  );
};

export default Header;
