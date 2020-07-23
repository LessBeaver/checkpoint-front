import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import { useEffect } from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    widht: '100%'
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

export default function AddPhoto() {
  const classes = useStyles();
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [tripName, setTripName] = useState('');
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/trip`)
      .then(res => res.data)
      .then(res => setTrips(res))
      .catch(e => {
        alert(`Erreur lors de la récupération des images ${e.message}`);
      });
  }, []);

  const handleClickImage = e => {
    e.preventDefault();
    axios
      .post(`http://localhost:4000/photo/${tripName}`)
      .then(res => res.data)
      .then(res => setTripName(res))
      .catch(e => {
        alert(`Erreur lors de la récupération des images ${e.message}`);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Ajouter des images
        </Typography>
        <form className={classes.form} onSubmit={e => handleClickImage(e)}>
          <FormControl variant="outlined" className={classes.root}>
            <InputLabel id="trip">Sélectionner un voyage</InputLabel>
            <Select
              id="name"
              label="Nom du voyage"
              name="name"
              value={tripName}
              onChange={e => setTripName(e.target.value)}
            >
              {trips.map(({ id_trip, name }) => (
                <MenuItem value={id_trip} key={id_trip}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Nom du voyage"
            name="name"
            autoComplete="name"
            autoFocus
            value={tripName}
            onChange={e => setTripName(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Nom de l'image"
            name="name"
            autoComplete="name"
            autoFocus
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="picture_url"
            label="Image de présentation"
            name="picture_url"
            autoComplete="picture_url"
            autoFocus
            value={image}
            onChange={e => setImage(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Ajouter
          </Button>
        </form>
      </div>
    </Container>
  );
}
