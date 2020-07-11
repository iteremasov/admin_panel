import { combineReducers } from 'redux';
import { userReduser } from './users/reducer';
import { articleReduser } from './articles/reducer';
import { categoryReduser } from './categories/reducer';



export const rootReducer = combineReducers({ ...userReduser, ...articleReduser, ...categoryReduser });
