import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ShowPhoto({ showPhotos }) {
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

  const selectPhotos = e => {
    e.preventDefault();
    axios
      .get(`http://localhost:4000/trip/${nameTrip}`)
      .then(res => res.data.id_trip)
      .then(res => {
        axios
          .get(`http://localhost:4000/photo/${res}`)
          .then(res => setPhotos(res))
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
    <div>
      <form onSubmit={e => selectPhotos(e)}>
        <FormControl variant="outlined">
          <InputLabel id="trip">Sélectionner un voyage</InputLabel>
          <Select
            id="name"
            label="Nom du voyage"
            name="name"
            value={nameTrip}
            onChange={e => setNameTrip(e.target.value)}
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

      <div>
        {showPhotos.map(({ id_trip, name, picture_url: pictureUrl }) => (
          <div>
            <h4>{name}</h4>
            <img src={pictureUrl} alt={name} key={id_trip} />
          </div>
        ))}
      </div>
      <div>
        {photos.map(({ id_trip, name, picture_url: pictureUrl }) => (
          <div>
            <h4>{name}</h4>
            <img src={pictureUrl} alt={name} key={id_trip} />
          </div>
        ))}
      </div>
    </div>
  );
}
