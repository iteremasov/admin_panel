import { handleActions } from 'redux-actions';
import { loadArticles, loadArticlesSuccess, loadArticlesError } from './actions'

const heandlers = {
  [loadArticles]: (state) => ({ ...state, loading: true }),
  [loadArticlesSuccess]: (state, { payload }) => ({ ...state, loading: false, articles: payload }),
  [loadArticlesError]: (state, { payload }) => ({ ...state, loading: false, error: true, message: payload.error }),
};
const initialState = {
  loading: false,
  articles: [],
  error: false,
  message: ''
};

export const NAME_SPACE = 'articles';

export const articleReduser = { [NAME_SPACE]: handleActions(heandlers, initialState) };
// selectors
export const getArticles = (state) => state[NAME_SPACE].articles;

export const getArticlesLoading = (state) => state[NAME_SPACE].loading;
