import { questionsConstants } from '../../constants';
import { _getQuestions } from '../../utils';

/**
 * Setting questions request condition
 * @param {boolean} inRequest - request condition
 */
const setQuestionsRequest = (inRequest) => ({
  type: questionsConstants.SET_QUESTIONS_REQUSET,
  payload: inRequest,
});

/**
 * Setting questions
 * @param {Array} questions - questions
 */
export const setQuestions = (questions) => {
  return (dispatch) => {
    dispatch({
      type: questionsConstants.SET_QUESTIONS,
      payload: questions,
    });
  };
};

/**
 * Request questions
 */
export const getQuestions = () => {
  return async (dispatch) => {
    dispatch(setQuestionsRequest(true));

    try {
      const questions = await _getQuestions();
      dispatch(setQuestions(questions));
    } catch (error) {
      console.log(error);
    }

    dispatch(setQuestionsRequest(false));
  };
};

// export function saveQuestionAnswer(authUser, qid, answer) {
//   return _saveQuestionAnswer({ authUser, qid, answer });
// }

// export function saveQuestion(question) {
//   return _saveQuestion(question);
// }
