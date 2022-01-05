import React from "react";
import './work.css'
import { workdata } from "./workdata";

const Work = () => {
  const data = workdata;
  return (
    <div>
      <div className="section-title">Experience</div>
      <div className="works">
        {data.map((work) => (
          <div className="work">
            <div className="left">
              <div className="work-name">{work.title}</div>
              <div className="desc">{work.desc}</div>
            </div>
            <div>
              <img src={work.image} className="soc-img"></img>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
