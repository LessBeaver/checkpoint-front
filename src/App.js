import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/main/Navigation';
import Accueil from './components/main/Accueil';
import Inscription from './components/log/Inscription';
import Connexion from './components/log/Connexion';
import Portfolio from './components/portfolio/Portfolio';
import About from './components/main/About';
import Manager from './components/manager/Manager';
import Trip from './components/portfolio/Trip';
import Footer from './components/main/Footer';
import _ from 'lodash';
import './App.css';

export default function App() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const a = JSON.parse(localStorage.getItem('user'));
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
        <Route path="/connexion" exact>
          <Connexion setUserData={setUserData} />
        </Route>
        <Route path="/inscription" exact>
          <Inscription setUserData={setUserData} />
        </Route>
        <Route path="/accueil" exact component={Accueil} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/voyage" exact component={Trip} />
        <Route path="/a-propos" exact component={About} />
        <Route path="/gestionnaire" exact component={Manager} />
      </Switch>
      <Footer />
    </Router>
  );
}
