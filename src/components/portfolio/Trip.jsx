import React, { useState } from 'react';
import ShowTrip from './ShowTrip';
import axios from 'axios';
import './Portfolio.css';

export default function Trip({ trips }) {
  const [getPhotos, setGetPhotos] = useState([]);

  const handleShowTrip = id_trip => {
    axios
      .get(`http://localhost:4000/photo/${id_trip}`)
      .then(response => response.data)
      .then(response => setGetPhotos(response))
      .catch(e => {
        console.log(e);
        alert(`Erreur lors de l'envoi de l'image' ${e.message}`);
      });
    return <ShowTrip getPhotos={getPhotos} />;
  };

  return (
    <div>
      <div className="trip-results">
        {trips.map(({ id_trip, name, picture_url: pictureUrl }) => (
          <div key={id_trip} className="container-trip" onClick={() => handleShowTrip(id_trip)}>
            <img src={pictureUrl} alt={name} className="image-trip" />
            <div className="trip-titre">{name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
