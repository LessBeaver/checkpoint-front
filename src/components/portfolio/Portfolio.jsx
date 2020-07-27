import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Portfolio.css';

export default function Portfolio() {
  const [name, setName] = useState('');
  const [searchTrips, setSearchTrip] = useState([]);
  const [trips, setTrips] = useState([]);
  const [id, setId] = useState('');

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
    axios
      .get(`http://localhost:4000/trip/${tripName}`)
      .then(res => setId(res.data.id_trip))
      .then(res => {
        axios
          .get(`http://localhost:4000/photo/${id}`)
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
    <div className="Portfolio-container">
      <img
        src="https://zupimages.net/up/20/30/ag32.jpg"
        alt="Photo by Braden Jarvis on Unsplash"
        className="image-header"
      />
      <div className="Portfolio-section2">
        <div className="search-section">
          <label htmlFor="Recherche">
            Rechercher un voyage
            <input
              type="text"
              onChange={e => setName(e.target.value)}
              value={name}
              className="search-input"
            />
          </label>
          <button type="button" onClick={() => handleClickSearch()}>
            Valider
          </button>
        </div>
        <div className="results-section">
          <div>
            {searchTrips.map(({ id_trip, name, picture_url: pictureUrl }) => (
              <div>
                <h4>{name}</h4>
                <img src={pictureUrl} alt={name} key={id_trip} />
              </div>
            ))}
          </div>
          <div className="trip-results">
            {trips.map(({ id_trip, name, picture_url: pictureUrl }) => (
              <div key={id_trip} className="container-trip">
                <img src={pictureUrl} alt={name} className="image-trip" />
                <div className="trip-titre">{name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
