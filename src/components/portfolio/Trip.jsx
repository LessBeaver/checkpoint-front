import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Trip() {
  const [trips, setTrip] = useState([]);

  /*   useEffect(() => {
    axios
      .get(`http://localhost:4000/trip?${tripName}`, tripName)
      .then(res => res.data)
      .then(res => setTrip(res))
      .catch(e => {
        alert(`Erreur lors de la récupération du voyage ${e.message}`);
      });
  }, []); */

  return (
    <div>
      {trips.map(({ id_trip, name, picture_url: pictureUrl }) => (
        <div>
          <h4>{name}</h4>
          <img src={pictureUrl} alt="name" key={id_trip} />
        </div>
      ))}
    </div>
  );
}
