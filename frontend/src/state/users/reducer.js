import { handleActions } from 'redux-actions';
import { loadUsers, loadUsersSuccess, loadUsersError } from './actions'

const heandlers = {
  [loadUsers]: (state) => ({ ...state, loading: true }),
  [loadUsersSuccess]: (state, { payload }) => ({ ...state, loading: false, users: payload }),
  [loadUsersError]: (state, { payload }) => ({ ...state, loading: false, error: true, message: payload.error }),
};
const initialState = {
  loading: false,
  users: [],
  error: false,
  message: ''
};

export const NAME_SPACE = 'users';

export const userReduser = { [NAME_SPACE]: handleActions(heandlers, initialState) };
// selectors
export const getUsers = (state) => state[NAME_SPACE].users;

export const getUsersLoading = (state) => state[NAME_SPACE].loading;
