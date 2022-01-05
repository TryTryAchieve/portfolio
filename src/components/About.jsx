import React, { useEffect,useRef } from "react";
import image from "./Typing-bro.png";
import "./about.css";
import { init } from 'ityped';
const About = () => {
  const textRef=useRef();
  useEffect(()=>{
    init(textRef.current, { showCursor: true, strings: ['Developer', 'Programmer' ] })
  },[])
  return (
    <>
      <div className="about">
        <div className="upper">
          <div className="img">
            <img src={image} className="pic" />
          </div>
          <div className="info">
            Hello there, I am <br />
            <span className="sush">Sushant</span>
            <div>
              <span className="color" ref={textRef}> </span>
            </div>
          </div>
        </div>
        <div className="section-title center">About</div>
        <div className="lower">Creative and skilled <span className="diff">Web</span> and <span className="diff">App developer </span>with experience in creating many websites for different <span className="diff">societies and in different hackathons</span> , has worked efficiently both with teams or individually. <br/> Also loves brainstroming, giving out suggestions in team projects, exploring different sectors and domains related to computer science </div>
      </div>
    </>
  );
};

export default About;
