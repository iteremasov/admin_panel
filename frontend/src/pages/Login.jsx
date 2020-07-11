import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { fetchPost } from '../api/services'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  incorrect: {
    color: 'red'
  }
}));

export default function LoginPage() {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [incorrectInput, setIncorrectInput] = useState(false)

  const signIn = ({ login, password }) => {
    const body = {
      username: login,
      password: password
    }
    fetchPost({ url: process.env.REACT_APP_SERVER_URL + '/login', body: JSON.stringify(body) })
      .then(response => {
        if (response.status === 200) return response.json()
        else setIncorrectInput(true)
      })
      .then((response) => {
        localStorage.setItem('token', response.token)
        window.location.replace('/articles')
      })
      .catch((err) => { return })
  }

  const changeLogin = (event) => {
    setLogin(event.target.value);
  };
  const changePass = (event) => {
    setPassword(event.target.value);
  };

  const clickForm = () => {
    signIn({ login, password })
  }

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <div className={classes.form} noValidate >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="login"
            label="Login"
            name="login"
            autoComplete="login"
            autoFocus
            onChange={changeLogin}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={changePass}
          />
          {
            incorrectInput &&
            <Typography component="h6" className={classes.incorrect}>
              incorrect input
            </Typography>
          }
          <Button
            // type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={clickForm}
          >
            Sign In
          </Button>
        </div>
      </div>
    </Container>
  );
}
