import { createAction } from 'redux-actions';

export const loadCategories = createAction('LOAD_CATEGORIES');
export const loadCategoriesSuccess = createAction('LOAD_CATEGORIES_SUCCESS');
export const loadCategoriesError = createAction('LOAD_CATEGORIES_ERROR');
