import { usersConstants } from '../../constants';
import { _getUsers } from '../../utils';

/**
 * Setting users request condition
 * @param {boolean} inRequest - request condition
 */
const setUsersRequest = (inRequest) => ({
  type: usersConstants.SET_USERS_REQUSET,
  payload: inRequest,
});

/**
 * Setting users
 * @param {Array} users - users
 */
export const setUsers = (users) => {
  return (dispatch) => {
    dispatch({
      type: usersConstants.SET_USERS,
      payload: users,
    });
  };
};

/**
 * Request users
 */
export const getUsers = () => {
  return async (dispatch) => {
    dispatch(setUsersRequest(true));

    try {
      const users = await _getUsers();
      dispatch(setUsers(users));
    } catch (error) {
      console.log(error);
    }

    dispatch(setUsersRequest(false));
  };
};

/**
 * Setting logged user
 * @param {Object} userData - logged user
 */
export const login = (userData) => {
  return (dispatch) => {
    dispatch({
      type: usersConstants.SET_LOGGED_USER,
      payload: userData,
    });
  };
};

/**
 * Logout user
 */
export const logout = (history) => {
  return (dispatch) => {
    history.push('/');
    dispatch({
      type: usersConstants.LOGOUT_USER,
    });
  };
};
