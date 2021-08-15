import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { usersActions } from '../../../store';
import { ContentFragment, ButtonFragment } from './fragments';
import './_question_card.scss';

const _QuestionCard = ({
  mode = 'full',
  users,
  question,
  loggedUser,
  saveUserAnswer,
  className = '',
}) => {
  const { optionOne, optionTwo, author, id } = question;
  const questionAuthor = users.find((user) => user.id === author);

  const loggedUserAnswered = () => {
    const userAnswers = Object.keys(loggedUser.answers);

    return userAnswers.includes(question.id);
  };

  const possibleAnswers = [
    {
      id: 'optionOne',
      text: optionOne.text,
      votes: optionOne.votes,
    },
    {
      id: 'optionTwo',
      text: optionTwo.text,
      votes: optionTwo.votes,
    },
  ];
  const [selectedAnswer, setSelectedAnswer] = useState('');

  return (
    <div className={`question_card ${className}`}>
      {questionAuthor && (
        <div className="question_card__author">
          <div className="question_card__author__name">
            {questionAuthor.name}
          </div>
          <div
            className="question_card__author__avatar"
            style={{
              backgroundImage: `url(${questionAuthor.avatarURL})`,
            }}
          ></div>
        </div>
      )}

      <div className="question_card__content">
        <div className="question_card__content__title">Would You Rather</div>

        <ContentFragment
          mode={mode}
          possibleAnswers={possibleAnswers}
          selectedAnswer={selectedAnswer}
          loggedUserAnswered={loggedUserAnswered()}
          setSelectedAnswer={(answer) => setSelectedAnswer(answer)}
          loggedUserId={loggedUser.id}
        />
        <ButtonFragment
          mode={mode}
          loggedUserAnswered={loggedUserAnswered()}
          selectedAnswer={selectedAnswer}
          handleSubmit={() => saveUserAnswer(id, selectedAnswer.id)}
          questionId={id}
        />
      </div>
    </div>
  );
};

const mapStateToProps = ({ users }) => ({
  users: users.users,
  loggedUser: users.logged_user,
});

const mapDispatchtoProps = (dispatch) => ({
  ...bindActionCreators(usersActions, dispatch),
});

export const QuestionCard = connect(
  mapStateToProps,
  mapDispatchtoProps
)(_QuestionCard);
