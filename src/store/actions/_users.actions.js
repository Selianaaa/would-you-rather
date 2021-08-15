import { usersConstants } from '../../constants';
import { _getUsers } from '../../utils';
import { questionsActions } from '../actions';

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
export const setLoggedUser = (userData) => {
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

/**
 * Setting saving answer condition
 * @param {boolean} inRequest - saving condition
 */
const setSavingAnswer = (inRequest) => ({
  type: usersConstants.SET_SAVING_ANSWER,
  payload: inRequest,
});

/**
 * Save user answer to the question
 */
export const saveUserAnswer = (questionId, answerOption) => {
  return async (dispatch, getState) => {
    const { logged_user: loggedUser } = getState().users;

    dispatch(setSavingAnswer(true));

    const newUserData = {
      ...loggedUser,
      answers: {
        ...loggedUser.answers,
        [questionId]: answerOption,
      },
    };

    console.log(newUserData);

    dispatch(setLoggedUser(newUserData));
    dispatch(
      questionsActions.saveQuestionAnswer(
        questionId,
        answerOption,
        loggedUser.id
      )
    );

    dispatch(setSavingAnswer(false));
  };
};

/**
 * Save user question
 */
export const saveUserQuestion = (questionId) => {
  return async (dispatch, getState) => {
    const { logged_user: loggedUser } = getState().users;

    const newUserData = {
      ...loggedUser,
      questions: loggedUser.questions.concat(questionId),
    };

    console.log(newUserData);

    dispatch(setLoggedUser(newUserData));
  };
};
