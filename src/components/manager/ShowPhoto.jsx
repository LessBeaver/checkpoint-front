import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ShowPhoto({ tripName }) {
  const [showPhotos, setShowPhotos] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/trip/${tripName}`)
      .then(res => res.data.id_trip)
      .then(res => {
        axios
          .get(`http://localhost:4000/photo/${res}`)
          .then(res => res.data)
          .then(res => setShowPhotos(res))
          .catch(e => {
            alert(`Erreur lors de la récupération des photos' ${e.message}`);
          });
      })
      .catch(e => {
        console.log(e);
        alert(`Erreur catch ${e.message}`);
      });
  }, []);

  return (
    <div>
      <h3>Hello</h3>
      <div>
        {showPhotos.map(({ id_trip, name, picture_url: pictureUrl }) => (
          <div>
            <h4>{name}</h4>
            <img src={pictureUrl} alt={name} key={id_trip} />
          </div>
        ))}
      </div>
    </div>
  );
}
