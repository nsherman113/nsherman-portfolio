import React from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* Route for Home.js contents */}
        <Route exact path="/">
          <Home />
        </Route>
        {/* Route for About.js contents */}
        <Route path="/About">
          <About />
        </Route>
        {/* Route for Projects.js contents */}
        <Route path="/Projects">
          <Projects />
        </Route>
        {/* Route for Projects.js contents */}
        <Route path="/Contact">
          <Contact />
        </Route>
      </div>
    </Router>
  );
}

export default App;
