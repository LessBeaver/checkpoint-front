import React from 'react';
import About from './About';
import './main.css';
import './mainqueries.css';

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
      <div className="accueil-container-secondary">
        <div className="accueil-container-secondary-image">
          <img
            src="https://images.unsplash.com/photo-1505319883811-74463eb8c32b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt=""
            className="accueil-image-secondary"
          />
        </div>
        <div className="accueil-container-secondary-text">
          <p className="accueil-text-secondary">
            Bacon ipsum dolor amet chicken ham hamburger tongue boudin kielbasa. Biltong cow bacon,
            chuck pork belly pork jowl landjaeger kielbasa corned beef. Doner andouille jowl biltong
            venison filet mignon shoulder strip steak spare ribs leberkas kielbasa turducken beef.
            Venison brisket pastrami burgdoggen strip steak rump flank chicken meatball picanha
            shank. Hamburger cupim buffalo meatloaf shankle. Meatloaf chuck kielbasa venison, jowl
            salami tail brisket t-bone. Drumstick pork bresaola short loin, chicken alcatra spare
            ribs, pastrami flank chislic beef
          </p>
        </div>
      </div>
      <div>
        <About />
      </div>
    </div>
  );
}
