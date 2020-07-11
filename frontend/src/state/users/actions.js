import { createAction } from 'redux-actions';

export const loadUsers = createAction('LOAD_USER');
export const loadUsersSuccess = createAction('LOAD_USER_SUCCESS');
export const loadUsersError = createAction('LOAD_USER_ERROR');

