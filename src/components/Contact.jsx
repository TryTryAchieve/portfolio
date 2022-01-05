import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <div className="section-title">Contact</div>
      <div>
        <div className="contact1">
          <div className="emailat">
            <i class="fi fi-rr-envelope icon1"></i>

            <div>sushantsb026@gmail.com</div>
          </div>
          <div className="location">
            <i class="fi fi-rr-marker icon1"></i>
            <div>Delhi</div>
          </div>
        </div>
        <div className="contact2">
          <a href="https://github.com/TryTryAchieve">
            <i class="devicon-github-original colored contact-icon"></i>
          </a>
          <a href="https://github.com/TryTryAchieve">
            <i class="devicon-facebook-plain colored contact-icon"></i>
          </a>
          <a href="https://github.com/TryTryAchieve">
            <i class="devicon-linkedin-plain colored contact-icon"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
