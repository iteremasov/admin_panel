import { createAction } from 'redux-actions';

export const loadArticles = createAction('LOAD_ARTICLES');
export const loadArticlesSuccess = createAction('LOAD_ARTICLES_SUCCESS');
export const loadArticlesError = createAction('LOAD_ARTICLES_ERROR');

