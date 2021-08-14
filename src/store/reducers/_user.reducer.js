import { userConstants } from '../../constants';

const initialState = {
  userData: null,
  logged: false,
};

export const userReducer = function (
  state = initialState,
  { type, payload = null }
) {
  switch (type) {
    case userConstants.USER_LOGIN:
      return {
        ...state,
        userData: payload,
        logged: true,
      };
    default:
      return state;
  }
};
