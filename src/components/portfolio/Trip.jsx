import React from 'react';
import './Portfolio.css';

export default function Trip({ trips }) {
  return (
    <div>
      <div className="trip-results">
        {trips.map(({ id_trip, name, picture_url: pictureUrl }) => (
          <div key={id_trip} className="container-trip">
            <img src={pictureUrl} alt={name} className="image-trip" />
            <div className="trip-titre">{name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
