import React from 'react';
import { Link } from 'react-router-dom';

import './_button_fragment.scss';

export const ButtonFragment = ({
  mode,
  selectedAnswer,
  loggedUserAnswered,
  handleSubmit,
  questionId,
}) => {
  if (mode === 'preview' && !loggedUserAnswered) {
    return (
      <Link
        to={`questions/${questionId}`}
        className="question_card__content__btn"
      >
        Answer
      </Link>
    );
  }

  if (mode === 'preview' && loggedUserAnswered) {
    return (
      <Link
        to={`questions/${questionId}`}
        className="question_card__content__btn"
      >
        See Result
      </Link>
    );
  }

  if (mode === 'full' && loggedUserAnswered) return null;

  return (
    <button
      className="question_card__content__btn"
      disabled={selectedAnswer.length === 0}
      onClick={handleSubmit}
    >
      Submit
    </button>
  );
};
