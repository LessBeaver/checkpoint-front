import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/main/Navigation';
import Accueil from './components/main/Accueil';
import Inscription from './components/log/Inscription';
import Connexion from './components/log/Connexion';
import UserContext from './components/UserContext';
import Portfolio from './components/portfolio/Portfolio';
import About from './components/main/About';
import Manager from './components/manager/Manager';
import Trip from './components/portfolio/Trip';
import Footer from './components/main/Footer';
import ShowTrip from './components/portfolio/ShowTrip';
import MainLog from './components/log/MainLog';
import _ from 'lodash';
import './App.css';

export default function App() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const a = JSON.parse(localStorage.getItem('user'));
    if (!_.isEqual(a, userData)) {
      setUserData(a);
    }
  }, [userData]);

  return (
    <UserContext.Provider value={userData}>
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
        {userData && userData.type === 'U' ? (
          <Switch>
            <Route path="/accueil" exact component={Accueil} />
            <Route path="/portfolio" exact component={Portfolio} />
            <Route path="/voyage" exact component={Trip} />
            <Route path="/voyage/:id_trip" exact component={ShowTrip} />
            <Route path="/a-propos" exact component={About} />
          </Switch>
        ) : (
          <></>
        )}
        {userData && userData.type === 'A' ? (
          <Switch>
            <Route path="/gestionnaire" exact component={Manager} />
            <Route path="/portfolio" exact component={Portfolio} />
          </Switch>
        ) : (
          <></>
        )}
        <Switch>
          <Route path="/" exact>
            <MainLog />
          </Route>
        </Switch>
        <Switch>
          <Route path="/accueil" exact component={Accueil} />
        </Switch>
        <Footer />
      </Router>
    </UserContext.Provider>
  );
}
