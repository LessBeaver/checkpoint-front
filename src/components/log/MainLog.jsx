import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './log.css';

export default function MainLog() {
  const history = useHistory();

  const showInscription = e => {
    e.preventDefault();
    return history.push('/inscription');
  };

  const showConnexion = e => {
    e.preventDefault();
    return history.push('/connexion');
  };

  return (
    <div>
      <div className="mainlog-image"></div>
      <div path="/inscription" className="mainlog-text">
        <div className="mainlog-link">
          <a onClick={e => showInscription(e)} className="mainlog-a">
            Inscrit-toi pour accéder au reste du site
          </a>
        </div>
        <div className="mainlog-link">
          <a onClick={e => showConnexion(e)} className="mainlog-a">
            Déjà inscrit ? Connecte-toi !
          </a>
        </div>
      </div>
    </div>
  );
}
