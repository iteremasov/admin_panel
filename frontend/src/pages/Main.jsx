import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withRouter } from "react-router-dom";
import { Router } from '../boot/Router';
import { Header } from '../components/Header';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function MainComponent() {
  const classes = useStyles();


  return (
    <>
      <Header />
      <div className={classes.root}>

        <CssBaseline />
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <div className={classes.drawerContainer}>
            <List>
              <Link to="/articles">
                <ListItem button >
                  <ListItemText primary="Articles" />
                </ListItem>
              </Link>

              <Link to="/users">
                <ListItem button >
                  <ListItemText primary="Users" />
                </ListItem>
              </Link>

              <Link to="/categories">
                <ListItem button >
                  <ListItemText primary="Categories" />
                </ListItem>
              </Link>
            </List>
            <Divider />
          </div>
        </Drawer>
        <main className={classes.content}>
          <Router />
        </main>
      </div>
    </>
  );
}


export const Main = withRouter(MainComponent);
