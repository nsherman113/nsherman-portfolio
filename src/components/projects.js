import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SafeFlightImg from "../img/Screenshot 2021-02-08 201716.jpg";
import RecessImg from "../img/Screenshot 2021-04-12 005555.png";
import StockTalkImg from "../img/stock-talk image.png";

const Projects = () => {
  return (
    <div class="container">
      <style>{"body { background-color: orange; }"}</style>
      <h2 class="projects-header">Projects</h2>
      <div class="card-group">
        <div class="card projects">
          <a href="https://n8dogg59.github.io/teamTravel/" target="_blank">
            <img
              src={SafeFlightImg}
              class="card-img-top project-img"
              alt=""
            ></img>
          </a>
          <div class="card-body">
            <h5 class="card-title">SafeFlight</h5>
            <p class="card-text">
              Website that allows users to search for flight data, while
              simultaneously presenting COVID data per the location searched.
              The purpose is to identify trends to better plan for trips given
              current pandemic conditions.
            </p>
          </div>
        </div>
        <div class="card projects">
          <a href="https://pacific-inlet-95494.herokuapp.com/" target="_blank">
            <img src={RecessImg} class="card-img-top" alt=""></img>
          </a>
          <div class="card-body">
            <h5 class="card-title">Recess</h5>
            <p class="card-text">
              Application that takes in a user's given constant schedule (i.e.
              work and sleep hours) to auto generate a random activity that the
              user selects and wishes to spend more time pursuing.
            </p>
          </div>
        </div>
        <div class="card projects">
          <a
            href="https://limitless-refuge-10058.herokuapp.com/"
            target="_blank"
          >
            <img src={StockTalkImg} class="card-img-top" alt=""></img>
          </a>
          <div class="card-body">
            <h5 class="card-title">Stock Talk</h5>
            <p class="card-text">
              Social media application that allows users to engage via forum (or
              feed) by creating posts, liking other posts, adding friends, etc.
              The user will have access to recent stock activity for that day,
              and can search to see what the current price is for each stock to
              make predictions and discuss trends within the stock community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
