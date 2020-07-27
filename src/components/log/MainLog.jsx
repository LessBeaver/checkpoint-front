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
      <Link path="/inscription" className="mainlog-text">
        <a className="mainlog-a" onClick={e => showInscription(e)}>
          Inscrit-toi pour accéder au reste du site
        </a>
        <a className="mainlog-a" onClick={e => showConnexion(e)}>
          Déjà inscrit ? Connecte-toi !
        </a>
      </Link>
    </div>
  );
}
