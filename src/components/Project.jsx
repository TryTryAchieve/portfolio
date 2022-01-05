import React from "react";
import './project.css'
import { projectdata } from "./projectdata";

const Project = () => {
  const data = projectdata;
  return (
    <div className="projects">
      <label className="section-title">Basic Projects</label>
      <div>
        {data.map((project) => (
          <div className="project-card">
            <div className="project-info">
                <label className="name">{project.title}</label>
                <div className="project-desc">{project.about}</div>
                <span className="project-github">
                <i class="fi fi-rr-globe"><a href={project.github}>Web Link</a></i>
                </span>
                <div className="project-tags">
                {
                    project.tags.map((tag)=>(
                        <label className="tag">{tag}</label>
                    ))
                }
                </div>
            </div>
            <img src={project.img} className="project-pic"></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
