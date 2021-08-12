import React from "react";
import "./App";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import About from "./components/about";
import NavBar from "./components/navbar";
import Projects from "./components/Projects";
import Contact from "./components/contact";
import NotFoundPage from "./components/notFoundPage";
function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Projects" component={Projects} />
        <Route exact path="/Contact" component={Contact} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
