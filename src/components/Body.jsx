import React from "react";
import About from "./About";
import Skill from "./Skill";
import Project from "./Project.jsx";
import Contact from "./Contact";

import "./body.css";
import Separator from "./Separator";
import Work from "./Work";
const Body = () => {
  return (
    <div className="body">
      <section id="about">
        <About />
      </section>
      <section id="skill">
        <Separator />

        <Skill />
      </section>
      <section>
        <Separator />

        <Work />
      </section>
      <section id="project">
        <Separator />

        <Project />
      </section>
      <section id="contact">
        <Separator />

        <Contact />
      </section>
    </div>
  );
};

export default Body;
