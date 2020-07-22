import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Portfolio() {
  const [name, setName] = useState('');
  const [searchTrips, setSearchTrip] = useState([]);
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/trip`)
      .then(res => res.data)
      .then(res => setTrips(res))
      .catch(e => {
        alert(`Erreur lors de la récupération des voyages ${e.message}`);
      });
  }, []);

  const handleClickSearch = () => {
    const tripName = name;
    const idTrip = '';
    console.log(tripName);
    axios
      .get(`http://localhost:4000/trip?${tripName}`, tripName)
      .then(res => res.data.id_trip)
      .then(res => {
        console.log(res);
        axios
          .get(`http://localhost:4000/photo?${idTrip}`, idTrip)
          .then(res => res.data)
          .then(res => setSearchTrip(res))
          .catch(e => {
            alert(`Erreur lors de la récupération des images ${e.message}`);
          });
      })
      .catch(e => {
        console.log(e);
        alert(`Erreur lors de la récupération des images ${e.message}`);
      });
  };

  return (
    <div>
      <label htmlFor="Recherche">
        <input type="text" onChange={e => setName(e.target.value)} value={name} />
      </label>
      <button type="button" onClick={() => handleClickSearch()}>
        Valider
      </button>
      <div>
        {searchTrips.map(({ id_trip, name, picture_url: pictureUrl }) => (
          <div>
            <h4>{name}</h4>
            <img src={pictureUrl} alt={name} key={id_trip} />
          </div>
        ))}
      </div>
      <div>
        {trips.map(({ id_trip, name, picture_url: pictureUrl }) => (
          <div key={id_trip}>
            <h4>{name}</h4>
            <img src={pictureUrl} alt={name} />
          </div>
        ))}
      </div>
    </div>
  );
}
