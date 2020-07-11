import { fetchUserList } from '../../api/users';
import { loadUsers, loadUsersError, loadUsersSuccess } from './actions';

export const loadUsersList = () => {
  return (dispatch) => {
    dispatch(loadUsers());
    return fetchUserList()
      .then(users => users.json())
      .then((users) => {
        return dispatch(loadUsersSuccess(users))
      })
      .catch((error) => {
        console.log(error)
        return dispatch(loadUsersError(error))
      })
  }
}

