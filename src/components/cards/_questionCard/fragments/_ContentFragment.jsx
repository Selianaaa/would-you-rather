import React from 'react';

import './_content_fragment.scss';

export const ContentFragment = ({
  mode,
  possibleAnswers,
  selectedAnswer,
  setSelectedAnswer,
  loggedUserAnswered,
  loggedUserId,
}) => {
  const answersAmount = () => {
    let amount = 0;
    possibleAnswers.forEach((answer) => {
      amount += answer.votes.length;
    });

    return amount;
  };

  const userVoted = (votes) => votes.includes(loggedUserId);

  const votesPercentage = (votesAmount) =>
    Math.round((votesAmount * 100) / answersAmount());

  if (mode === 'preview') {
    return (
      <div className="question_card__content__text">{`${possibleAnswers[0].text} or...`}</div>
    );
  }

  if (loggedUserAnswered) {
    return (
      <div className="result">
        <div className="result__title">Result:</div>
        <div className="result__stats">
          {possibleAnswers.map((answer) => (
            <div
              className={`result__stat ${
                userVoted(answer.votes) ? 'result__stat__users_vote' : ''
              }`}
              key={answer.id}
            >
              {userVoted(answer.votes) && (
                <div className="user_voted">
                  <div>Your Vote</div>
                </div>
              )}
              <div className="result__name">{answer.text}</div>
              <div className="result__bar">
                <p className="result__bar__percentage">{`${votesPercentage(
                  answer.votes.length
                )}%`}</p>
                <div
                  className="result__bar__filled"
                  style={{
                    transform: `translateX(${votesPercentage(
                      answer.votes.length
                    )}%)`,
                  }}
                ></div>
              </div>
              <div className="result__text">{`${
                answer.votes.length
              } of ${answersAmount()} votes`}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      {possibleAnswers.map((answer) => (
        <label className="question_card__content__label" key={answer.id}>
          <input
            type="radio"
            value={answer.id}
            checked={answer.id === selectedAnswer.id}
            onChange={() => setSelectedAnswer(answer)}
          />

          <p className="question_card__content__value">{answer.text}</p>
        </label>
      ))}
    </>
  );
};
