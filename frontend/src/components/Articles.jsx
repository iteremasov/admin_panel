import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { Typography } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import { loadArticlesList } from '../state/articles/thunks';
import { getArticles, getArticlesLoading } from '../state/articles/reducer';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));


export function Articles() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const articles = useSelector(getArticles);
  const loading = useSelector(getArticlesLoading);

  useEffect(() => { dispatch(loadArticlesList()) }, []);
  if (loading) return 'LOADING...';

  return (
    <List dense className={classes.root}>

      {articles.map((article, index) => {
        const labelId = `checkbox-list-secondary-label-${article.id}`;
        return (
          <ListItem key={article.id} button>

            <ListItemText id={labelId} >
              <Typography variant="h5">
                {article.title}
              </Typography>
              <Typography  variant="body1">
                {article.description}
              </Typography>
              <Typography align="right" variant="subtitle2">
                Category: {article.category_id}
              </Typography>
            </ListItemText>

            <ListItemSecondaryAction>

            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}
