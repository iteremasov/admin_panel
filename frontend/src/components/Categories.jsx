import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { Typography } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import { loadCategoryList } from '../state/categories/thunks';
import { getCategories, getCategoriesLoading } from '../state/categories/reducer';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));


export function Categories() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const categories = useSelector(getCategories);
  const loading = useSelector(getCategoriesLoading);

  useEffect(() => { dispatch(loadCategoryList()) }, []);
  if (loading) return 'LOADING...';

  return (
    <List dense className={classes.root}>
      {categories.map((category, index) => {
        const labelId = `checkbox-list-secondary-label-${category.id}`;
        return (
          <ListItem key={category.id} button>

            <ListItemText id={labelId} primary={category.title} />
            <ListItemSecondaryAction>

            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}
