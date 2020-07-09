import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Slide from '@material-ui/core/Slide';
import { fetchPost } from '../api/services'

const url = 'http://127.0.0.1:5050/login'

const login = (data) => {
    const result = fetchPost(url, data)
}
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="inherit" color="inherit" onClick={handleClickOpen}>
        Login
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Login"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="login"
            type="email"
            fullWidth
          />
          <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={login} color="primary">
            ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}