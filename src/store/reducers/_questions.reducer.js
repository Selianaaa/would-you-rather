import { questionsConstants } from '../../constants';

const initialState = {
  questions: [],
  questions_request: false,

  adding_question: false,
};

export const questionsReducer = function (
  state = initialState,
  { type, payload = null }
) {
  switch (type) {
    case questionsConstants.SET_QUESTIONS:
      return {
        ...state,
        questions: payload,
      };

    case questionsConstants.SET_QUESTIONS_REQUSET:
      return {
        ...state,
        questions_request: payload,
      };
    case questionsConstants.SET_ADDING_QUESTION:
      return {
        ...state,
        adding_question: payload,
      };

    default:
      return state;
  }
};
