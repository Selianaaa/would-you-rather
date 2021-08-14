import React, { Fragment, useState } from 'react';

import './_button_fragment.scss';

export const ButtonFragment = ({
  mode,
  selectedAnswer,
  loggedUserAnswered,
}) => {
  // if ()
  if (mode === 'preview' && !loggedUserAnswered) {
    return <button className="question_card__content__btn">Answer</button>;
  }

  if (mode === 'preview' && loggedUserAnswered) {
    return <button className="question_card__content__btn">See Result</button>;
  }

  return (
    <button
      className="question_card__content__btn"
      disabled={selectedAnswer.length === 0}
    >
      Submit
    </button>
  );
};
