import { questionsConstants } from '../../constants';

const initialState = {
  questions: [],
  questions_request: false,
};

export const questionsReducer = function (
  state = initialState,
  { type, payload = null }
) {
  switch (type) {
    case questionsConstants.SET_QUESTIONS:
      console.log('SET_QUESTIONS', payload);
      return {
        ...state,
        questions: payload,
      };

    case questionsConstants.SET_QUESTIONS_REQUSET:
      return {
        ...state,
        questions_request: payload,
      };
    default:
      return state;
  }
};
