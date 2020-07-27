import React from 'react';
import './main.css';
import './mainqueries.css';

export default function About() {
  return (
    <div>
      <div className="about-image"></div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1507823782123-27db7f9fd196?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          alt=""
          className="about-image-perso"
        />
      </div>
    </div>
  );
}
