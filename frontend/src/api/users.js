import { fetchPost, fetchGet } from './services';

export const fetchUserList = () => {
  return fetchGet({
    url: `${process.env.REACT_APP_SERVER_URL}/users`, headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
}
