import { fetchPost, fetchGet } from './services';

export const fetchArticleList = () => {
  return fetchGet({
    url: `${process.env.REACT_APP_SERVER_URL}/articles`, headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
}
