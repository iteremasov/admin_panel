import { fetchPost, fetchGet } from './services';

export const fetchCategoryList = () => {
  return fetchGet({
    url: `${process.env.REACT_APP_SERVER_URL}/categories`, headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
}
