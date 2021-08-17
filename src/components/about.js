import React from "react";
import "../App.css";
// import "C:/Users/noahs/Desktop/nsherman-portfolio/src/pages/about.js";

import profileImg from "../img/Barcelona.jpg";
const aboutMe = () => {
  return (
    <div className="aboutApp">
      <style>{"body { background-color: orange; }"}</style>
      <div className="container about-me">
        <div className="aboutme-card">
          <img src={profileImg} class="profileImg" alt=""></img>
          <div className="card-header">
            <h3>About Me</h3>
          </div>
          <div className="card-body">
            <p>
              I'm a Full Stack Developer proficient in React.js, Node.js, as
              well as Javascript based programming with a background in
              accounting and finance. Task oriented with a determination to
              solve problems and work with others to build more efficient
              processes.. <br />
              When I'm not working or studying, I enjoy watching live music,
              traveling, playing golf, being outdoors, and gaming.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default aboutMe;
