import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { QuestionCard, Preloader } from '../../components';
import './index.scss';

const tabs = [
  { title: 'Answered', questions: [] },
  { title: 'Unanswered', questions: [] },
];

const _HomePage = ({
  userLogged,
  userData,
  questions,
  usersRequest,
  questionRequest,
}) => {
  const [tab, setTab] = useState(tabs[0]);

  if (!userLogged) {
    return <Redirect to={'/authorization'} />;
  }

  if (usersRequest || questionRequest) {
    return <Preloader />;
  }

  return (
    <div className="home_page">
      <div>Your questions</div>
      <div className="home_page__selector">
        <QuestionCard question={questions[0]} mayAnswer />
      </div>
    </div>
  );
};

const mapStateToProps = ({ users, questions }) => ({
  userLogged: users.logged,
  userData: users.logged_user,
  usersRequest: users.users_request,

  questions: questions.questions,
  questionRequest: questions.questions_request,
});

const HomePage = connect(mapStateToProps, null)(_HomePage);

export default HomePage;
