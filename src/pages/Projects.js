import React from "react";
import "../App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import SafeFlightImg from "../img/Screenshot 2021-02-08 201716.jpg";
import RecessImg from "../img/Screenshot 2021-04-12 005555.png";
import StockTalkImg from "../img/stock-talk image.png";
// import {stocktalkimg} from "C:/Users/noahs/Desktop/nsherman-portfolio/src/img/stock-talk image.png";

const Projects = () => {
  return (
    <div class="container">
      <style>{"body { background-color: orange; }"}</style>
      <h2>Projects</h2>
      <div class="card-group">
        <div class="card">
          <a href="https://n8dogg59.github.io/teamTravel/" target="_blank">
            <img src={SafeFlightImg} class="card-img-top" alt=""></img>
          </a>
          <div class="card-body">
            <h5 class="card-title">SafeFlight</h5>
            <p class="card-text">
              SafeFlight is an interactive website that allows user to search
              for flight data, while simultaneously presenting COVID data per
              the location searched.
            </p>
          </div>
        </div>
        <div class="card">
          <a href="https://pacific-inlet-95494.herokuapp.com/" target="_blank">
            <img src={RecessImg} class="card-img-top" alt=""></img>
          </a>
          <div class="card-body">
            <h5 class="card-title">Recess</h5>
            <p class="card-text">
              Recess is fullstack application that keeps track of the user's
              weekly availability so they can schedule extra-curricular
              activities. Once the user creates an account, they wil be prompted
              to enter their sleep and work hours to calculate their free time.
              The end user will then be able to select the activity category,
              length of the activity, the type activity, and Recess will add it
              to their weekly calendar.
            </p>
          </div>
        </div>
        <div class="card">
          <a
            href="https://limitless-refuge-10058.herokuapp.com/"
            target="_blank"
          >
            <img src={StockTalkImg} class="card-img-top" alt=""></img>
          </a>
          <div class="card-body">
            <h5 class="card-title">Stock Talk</h5>
            <p class="card-text">
              Stock-Talk is a social media application that allows users to
              engage via a forum (or feed) by creating posts, liking other
              posts, adding friends, etc. The user will have access to recent
              stock activity per that given day, and can search to see what the
              current price is for each stock which will allow for conversation
              topic within the application.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
