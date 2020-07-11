import { handleActions } from 'redux-actions';
import { loadCategories, loadCategoriesSuccess, loadCategoriesError } from './actions'

const heandlers = {
  [loadCategories]: (state) => ({ ...state, loading: true }),
  [loadCategoriesSuccess]: (state, { payload }) => ({ ...state, loading: false, categories: payload }),
  [loadCategoriesError]: (state, { payload }) => ({ ...state, loading: false, error: true, message: payload.error }),
};
const initialState = {
  loading: false,
  categories: [],
  error: false,
  message: ''
};

export const NAME_SPACE = 'categories';

export const categoryReduser = { [NAME_SPACE]: handleActions(heandlers, initialState) };
// selectors
export const getCategories = (state) => state[NAME_SPACE].categories;

export const getCategoriesLoading = (state) => state[NAME_SPACE].loading;
