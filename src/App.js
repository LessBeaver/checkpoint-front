import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/main/Navigation";
import Accueil from "./components/main/Accueil";
import Inscription from "./components/log/Inscription";
import Connexion from "./components/log/Connexion";
import _ from "lodash";
import "./App.css";

export default function App() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const a = JSON.parse(localStorage.getItem("user"));
    if (!_.isEqual(a, userData)) {
      setUserData(a);
    }
  });

  return (
    <Router>
      <Navigation />
      {!userData ? (
        <Switch>
          <Route path="/connexion" exact>
            <Connexion setUserData={setUserData} />
          </Route>
          <Route path="/inscription" exact>
            <Inscription setUserData={setUserData} />
          </Route>
        </Switch>
      ) : (
        <></>
      )}
      {/*         {userData && userData.type === 'U' ? (
          <Switch>
            <Route path="/gestionnaire" exact component={Gestionnaire} />
          </Switch>
        ) : (
          <></>
        )} */}
      {/*         {userData && userData.type === 'A' ? (
          <Switch>
            <Route path="/gestionnaire" exact component={Gestionnaire} />
          </Switch>
        ) : (
          <></>
        )} */}
      <Switch>
        <Route path="/accueil" exact component={Accueil} />
      </Switch>
    </Router>
  );
}
