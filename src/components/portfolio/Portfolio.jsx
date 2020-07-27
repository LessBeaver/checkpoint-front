import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Portfolio.css';

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

  const handleClickSearch = e => {
    e.preventDefault();
    axios
      .get(`http://localhost:4000/trip/${name}`)
      .then(res => res.data.id_trip)
      .then(res => {
        axios
          .get(`http://localhost:4000/photo/${res}`)
          .then(response => response.data)
          .then(response => setSearchTrip(response))
          .catch(e => {
            console.log(e);
            alert(`Erreur lors de l'envoi de l'image' ${e.message}`);
          });
      })
      .catch(e => {
        console.log(e);
        alert(`Erreur catch ${e.message}`);
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
          <form onSubmit={e => handleClickSearch(e)}>
            <FormControl variant="outlined">
              <InputLabel id="trip">Sélectionner un voyage</InputLabel>
              <Select
                id="name"
                label="Nom du voyage"
                value={name}
                onChange={e => setName(e.target.value)}
                className="search-input"
              >
                {trips.map(({ id_trip, name }) => (
                  <MenuItem value={id_trip} key={id_trip}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button type="submit" fullWidth variant="contained" color="primary">
              Valider
            </Button>
          </form>
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
