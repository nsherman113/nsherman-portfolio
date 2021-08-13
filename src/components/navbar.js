import React from "react";
import Navitem from "./navitem";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import { Navbar } from "react-materialize";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NavItemActive: "",
    };
  }
  activeitem = (x) => {
    if (this.state.NavItemActive.length > 0) {
      document
        .getElementById(this.state.NavItemActive)
        .classList.remove("active");
    }
    this.setState({ NavItemId: x }, () => {
      document.getElementById(this.state.NavItemActive).classList.add("active");
    });
  };
  render() {
    return (
      <nav>
        <ul>
          <Navitem item="Home" tolink="/" activec={this.activeitem}></Navitem>
          <Navitem
            item="About"
            tolink="/about"
            activec={this.activeitem}
          ></Navitem>
          <Navitem
            item="Education"
            tolink="/education"
            activec={this.activeitem}
          ></Navitem>
          <Navitem
            item="Skills"
            tolink="/skills"
            activec={this.activeitem}
          ></Navitem>
          <Navitem
            item="Contact"
            tolink="/contact"
            activec={this.activeitem}
          ></Navitem>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
