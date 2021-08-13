import React, { Component } from "react";
import "../App.css";
import ReactTypingEffect from "react-typing-effect";
import profilepic from "../img/IMG_1519 (2) 03.26.19.jpg";
class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <img src={profilepic} className="profilepic"></img>
        <ReactTypingEffect
          className="typingeffect"
          text={["I am Noah Sherman", "I am a software engineer"]}
          speed={100}
          eraseDelay={700}
        />
      </div>
    );
  }
}
export default Home;
