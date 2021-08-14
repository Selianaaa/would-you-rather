import React, { Fragment, useState } from 'react';

import './_content_fragment.scss';

export const ContentFragment = ({
  mode,
  possibleAnswers,
  selectedAnswer,
  setSelectedAnswer,
}) => {
  if (mode === 'preview') {
    return (
      <div className="question_card__content__text">{`${possibleAnswers[0].text} or...`}</div>
    );
  }

  return (
    <div>
      {possibleAnswers.map((answer) => (
        <label className="question_card__content__label" key={answer.id}>
          <input
            type="radio"
            value={answer.id}
            checked={answer.id === selectedAnswer}
            onChange={() => setSelectedAnswer(answer.id)}
          />

          <p className="question_card__content__value">{answer.text}</p>
        </label>
      ))}
    </div>
  );
};
