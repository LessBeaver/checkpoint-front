import React from 'react';
import About from './About';
import './main.css';

export default function Accueil() {
  return (
    <div className="accueil-container">
      <div className="accueil-container-text-header">
        <div className="accueil-bg-header">
          <div className="accueil-svg-header">
            <div className="accueil-titre-header">BIENVENUE</div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1505319883811-74463eb8c32b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt=""
            className="accueil-image-secondary"
          />
        </div>
        <div>
          <h3>Hello World !</h3>
        </div>
      </div>
      <div>
        <About />
      </div>
    </div>
  );
}
