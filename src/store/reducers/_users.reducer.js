import { usersConstants } from '../../constants';

const initialState = {
  users: [],
  users_request: false,

  logged_user: null,
  logged: false,
  saving_answer: false,
};

export const usersReducer = function (
  state = initialState,
  { type, payload = null }
) {
  switch (type) {
    case usersConstants.SET_USERS:
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
      return {
        ...state,
        logged_user: payload,
        logged: true,
      };

    case usersConstants.LOGOUT_USER:
      return {
        ...state,
        logged_user: null,
        logged: false,
      };

    case usersConstants.SAVING_ANSWER:
      return {
        ...state,
        saving_answer: payload,
      };
    default:
      return state;
  }
};
