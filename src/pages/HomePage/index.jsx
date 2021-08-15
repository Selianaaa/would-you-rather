import React, { useState, useMemo, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { QuestionCard, Preloader } from '../../components';
import './index.scss';

const _HomePage = ({
  userLogged,
  userData,
  questions,
  usersRequest,
  questionRequest,
}) => {
  const dashboardTabs = useMemo(() => {
    const tabs = [
      {
        title: 'Answered',
        questions: [],
      },
      {
        title: 'Unanswered',
        questions: [],
      },
    ];

    if (userData && questions.length > 0) {
      const userAnswers = Object.keys(userData.answers);

      tabs[0].questions = questions
        .filter((question) => userAnswers.includes(question.id))
        .sort((a, b) => {
          return b.timestamp - a.timestamp;
        });

      tabs[1].questions = questions
        .filter((question) => !userAnswers.includes(question.id))
        .sort((a, b) => {
          return b.timestamp - a.timestamp;
        });
    }

    return tabs;
  }, [questions, userData]);

  const [tab, setTab] = useState(dashboardTabs[0]);

  useEffect(() => {
    if (userData && questions.length > 0 && dashboardTabs) {
      setTab(dashboardTabs[0]);
    }
  }, [questions, userData, dashboardTabs]);

  if (!userLogged) {
    return <Redirect to={'/authorization'} />;
  }

  if (usersRequest || questionRequest) {
    return <Preloader />;
  }

  return (
    <div className="home_page">
      <div className="home_page__title">Your dashboard</div>
      <div className="home_page__selector">
        {dashboardTabs.map((dashboardTab) => (
          <div
            key={dashboardTab.title}
            className={`home_page__tab ${
              dashboardTab.title === tab.title ? 'home_page__active_tab' : ''
            }`}
            onClick={() => setTab(dashboardTab)}
          >
            {dashboardTab.title}
          </div>
        ))}
      </div>
      <div className="home_page__questions">
        {tab.questions.length > 0 ? (
          <Fragment>
            {tab.questions.map((question) => (
              <QuestionCard
                key={question.id}
                className="home_page__question_card"
                question={question}
                mode="preview"
              />
            ))}
          </Fragment>
        ) : (
          <div className="home_page__questions__empty">
            {tab.title === 'Answered'
              ? "You don't have any answered question"
              : "You've answered all the questions"}
          </div>
        )}
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
