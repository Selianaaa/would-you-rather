import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { usersActions } from '../../../store';
import { ContentFragment, ButtonFragment } from './fragments';
import johndoeAvatar from '../../../assets/avatars/sarahedo.png';
import './_question_card.scss';

const _QuestionCard = ({ mode = 'full', users, question, loggedUser }) => {
  const { optionOne, optionTwo, author, id } = question;
  const questionAuthor = users.find((user) => user.id === author);

  const loggedUserAnswered = loggedUser.questions.includes(question.id);

  const possibleAnswers = [
    {
      id: 'optionOne',
      text: optionOne.text,
    },
    {
      id: 'optionTwo',
      text: optionTwo.text,
    },
  ];
  const [selectedAnswer, setSelectedAnswer] = useState('');

  return (
    <div className="question_card">
      {questionAuthor && (
        <div className="question_card__author">
          <div className="question_card__author__name">
            {questionAuthor.name}
          </div>
          <div
            className="question_card__author__avatar"
            style={{
              // backgroundImage: `url(${questionAuthor.avatarURL})`,
              backgroundImage: `url(${johndoeAvatar})`,
            }}
          ></div>
        </div>
      )}

      <div className="question_card__content">
        <div className="question_card__content__title">Would You Rather:</div>

        <ContentFragment
          mode={mode}
          possibleAnswers={possibleAnswers}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={(answerId) => setSelectedAnswer(answerId)}
        />
        <ButtonFragment
          mode={mode}
          loggedUserAnswered={loggedUserAnswered}
          selectedAnswer={selectedAnswer}
        />
      </div>
    </div>
  );
};

const mapStateToProps = ({ users }) => ({
  users: users.users,
  loggedUser: users.logged_user,
});

// const mapDispatchtoProps = (dispatch) => ({
//   ...bindActionCreators(usersActions, dispatch),
// });

export const QuestionCard = connect(mapStateToProps, null)(_QuestionCard);
