import { usersActions, questionsActions } from '../actions';

/**
 * Starting state
 */
export const startApp = () => {
  return (dispatch) => {
    dispatch(usersActions.getUsers());
    dispatch(questionsActions.getQuestions());
  };
};
