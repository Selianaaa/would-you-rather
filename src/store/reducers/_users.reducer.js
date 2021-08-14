import { usersConstants } from '../../constants';
import { LSActions } from '../../helpers';

const initialState = {
  users: [],
  users_request: false,

  logged_user: JSON.parse(localStorage.getItem('loggedUser')) || null,
  logged: JSON.parse(localStorage.getItem('logged')) || false,
};

export const usersReducer = function (
  state = initialState,
  { type, payload = null }
) {
  switch (type) {
    case usersConstants.SET_USERS:
      console.log('SET_USERS', payload);

      return {
        ...state,
        users: payload,
      };
    case usersConstants.SET_USERS_REQUSET:
      return {
        ...state,
        users_request: payload,
      };
    case usersConstants.SET_LOGGED_USER:
      console.log('SET_LOGGED_USER', payload);

      LSActions.saveByKey('loggedUser', payload);
      LSActions.saveByKey('logged', true);

      return {
        ...state,
        logged_user: payload,
        logged: true,
      };

    case usersConstants.LOGOUT_USER:
      LSActions.saveByKey('loggedUser', null);
      LSActions.saveByKey('logged', false);

      return {
        ...state,
        logged_user: null,
        logged: false,
      };
    default:
      return state;
  }
};
