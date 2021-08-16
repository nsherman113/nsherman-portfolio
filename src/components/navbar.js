import React from "react";
import "../App.css";

const homePage = () => {
  return (
    <ul class="nav nav-pills">
      <li class="nav-item">
        <a class="nav-link " aria-current="page" href="/about">
          About
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/Projects">
          Projects
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/contact">
          Contact
        </a>
      </li>
    </ul>
  );
};
export default homePage;
