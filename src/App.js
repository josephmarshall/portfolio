import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Splash from "./Splash";
import Home from "./Home";
import Project from "./Project";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Splash} />
      <Route exact path="/Home" component={Home} />
      <Route exact path="/projects/:name" component={Project} />
    </Switch>
  );
}

export default App;
