import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/main/Navigation";
import Accueil from "./components/main/Accueil";
import Inscription from "./components/log/Inscription";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/accueil" exact component={Accueil} />
        <Route path="/inscription" exact component={Inscription} />
      </Switch>
    </Router>
  );
}
