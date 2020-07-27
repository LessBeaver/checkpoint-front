import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './manager.css';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginBottom: '30px'
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function ShowPhoto() {
  const classes = useStyles();
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
          .then(response => response.data)
          .then(response => setPhotos(response))
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

  const deletePhoto = id_photo => {
    const idPhoto = id_photo;
    axios
      .delete(`http://localhost:4000/photo/${idPhoto}`)
      .then(res => res.data)
      .then(res => {
        let deleteArr = photos;
        deleteArr = deleteArr.filter(photo => photo.id_photo !== idPhoto);
        setPhotos(deleteArr);
      });
  };

  return (
    <div className="showphoto-container">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Visualiser la galerie
          </Typography>
          <form className={classes.form} onSubmit={e => selectPhotos(e)}>
            <FormControl variant="outlined" className={classes.root}>
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
        </div>
      </Container>
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
