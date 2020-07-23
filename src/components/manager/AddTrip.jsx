import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
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

export default function AddTrip() {
  const classes = useStyles();
  const [images, setImages] = useState('');
  const [names, setNames] = useState('');

  const handleClickImage = e => {
    e.preventDefault();
    const url = 'http://localhost:4000/photo';
    axios
      .post(url, { picture_url: image })
      .then(res => res.data)
      .then(res => setImages(res))
      .catch(e => {
        alert(`Erreur lors de la récupération des images ${e.message}`);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Ajouter un voyage
        </Typography>
        <form className={classes.form} onSubmit={e => handleClickImage(e)}>
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
            value={names}
            onChange={e => setNames(e.target.value)}
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
            value={images}
            onChange={e => setImages(e.target.value)}
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
