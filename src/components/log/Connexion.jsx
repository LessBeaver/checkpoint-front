import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function Connexion() {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleClickUser = e => {
    e.preventDefault();
    const url = `http://localhost:4000/signin/user`;
    const formData = {
      username,
      email,
      password
    };
    axios
      .post(url, formData)
      .then(response => {
        if (response.status === 200) {
          /*           const userData = {
            ...response.data,
            type: 'A'
          };
          window.localStorage.setItem('user', JSON.stringify(userData));
          setUserData(userData); */
          Swal.fire({
            icon: "success",
            showCancelButton: false,
            showConfirmButton: false,
            text: "Eh coucou !",
            timer: 1000,
            backdrop: "rgba(0,0,0,0.5)"
          });
          return history.push("/accueil");
        }
        return () => {
          Swal.fire({
            icon: "error",
            showCancelButton: false,
            showConfirmButton: false,
            text: "Mauvais format de données, try again 😕",
            timer: 1000,
            backdrop: "rgba(0,0,0,0.5)"
          });
        };
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          showCancelButton: false,
          showConfirmButton: false,
          text: "Eh non, données invalides 😕",
          timer: 1000,
          backdrop: "rgba(0,0,0,0.5)"
        });
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Me connecter
        </Typography>
        <form className={classes.form} onSubmit={e => handleClickUser(e)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="username"
                variant="outlined"
                required
                fullWidth
                id="username"
                name="username"
                label="Pseudo"
                value={username}
                autoFocus
                onChange={e => setUsername(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="email"
                variant="outlined"
                required
                fullWidth
                id="email"
                name="email"
                label="Adresse email"
                value={email}
                autoFocus
                onChange={e => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="password"
                variant="outlined"
                required
                fullWidth
                id="password"
                name="password"
                label="Mot de passe"
                value={password}
                autoFocus
                onChange={e => setPassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={e => handleClickUser(e)}
          >
            Connectez-moi
          </Button>
        </form>
      </div>
    </Container>
  );
}
