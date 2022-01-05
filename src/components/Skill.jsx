import React from "react";
import { skilldata } from "./skilldata.js";
import "./skill.css"
const Skill = () => {
  const skills = skilldata;
    return (
    <div>
      <label className="section-title">Skills</label>
      <div className="skills">
        {skills.map((skill) => (
          <div className="skill">
            <label className="skill-name">{skill.type}</label>
            <div className="icons">
              {skill.list.map((skillicon) => (
                <div className="icon">{skillicon.icon}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
