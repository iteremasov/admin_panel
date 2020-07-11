import { fetchCategoryList } from '../../api/categories';
import { loadCategories, loadCategoriesError, loadCategoriesSuccess } from './actions';

export const loadCategoryList = () => {
  return (dispatch) => {
    dispatch(loadCategories());
    return fetchCategoryList()
      .then(categories => categories.json())
      .then((categories) => {
        return dispatch(loadCategoriesSuccess(categories))
      })
      .catch((error) => {
        console.log(error)
        return dispatch(loadCategoriesError(error))
      })
  }
}
