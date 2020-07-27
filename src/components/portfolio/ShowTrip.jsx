import Button from '@material-ui/core/Button';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './manager.css';

export default function ShowPhoto() {
  const [trips, setTrips] = useState([]);
  const [nameTrip, setNameTrip] = useState([]);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/trip`)
      .then(res => res.data)
      .then(res => setTrips(res))
      .catch(e => {
        alert(`Erreur lors de la récupération des images ${e.message}`);
      });
  }, []);

  return (
    <div className="showphoto-container">
      <div className="photo-container">
        {photos.map(({ id_photo, name, picture_url: pictureUrl }) => (
          <figure className="photo-card">
            <figcaption>{name}</figcaption>
            <img src={pictureUrl} alt={name} className="photo-size" key={id_photo} />
            <Button onClick={() => deletePhoto(id_photo)}>Supprimer</Button>
          </figure>
        ))}
      </div>
    </div>
  );
}
