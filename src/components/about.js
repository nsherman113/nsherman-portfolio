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
              Hey there 👋
              <br />
              <br />
              My name is Noah, I'm a full stack engineer out of Austin Texas. I
              have a background in economics, accounting and finance, as well as
              computer programming, and I'm currently looking to pursue a career
              in Software Development utlizing the Full Stack. I am proficient
              in Javascript with experience covering technologies such as
              React.js, Express, Node, MySQL, MongoDB, HTML, CSS, et al.
              <br />
              <br />
              When I'm not working or studying, I enjoy watching live music,
              traveling, reading, playing golf, being outdoors, and gaming.
              <br />
              <br />I am passionate about learning new things and working with
              others to solve problems and create more efficient processes. I
              look forward to connecting with you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default aboutMe;
