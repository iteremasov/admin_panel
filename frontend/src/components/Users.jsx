import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { loadUsersList } from '../state/users/thunks';
import { getUsers, getUsersLoading } from '../state/users/reducer';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));


export function Users() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const users = useSelector(getUsers);
  const loading = useSelector(getUsersLoading);

  useEffect(() => { dispatch(loadUsersList()) }, []);
  if (loading) return 'LOADING...';

  return (
    <List dense className={classes.root}>
      {users.map((user, index) => {
        const labelId = `checkbox-list-secondary-label-${user.id}`;
        return (
          <ListItem key={user.id} button>
            <ListItemAvatar>
              <AccountCircleIcon />
            </ListItemAvatar>
            <ListItemText id={labelId} primary={user.username} />
            <ListItemSecondaryAction>

            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}
