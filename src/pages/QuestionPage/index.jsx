import React, { useEffect, useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { QuestionCard, Preloader } from '../../components';
import './index.scss';

const _QuestionPage = ({
  userLogged,
  userData,
  questions,
  usersRequest,
  questionRequest,
}) => {
  const { id } = useParams();

  const [question, setQuestion] = useState(null);

  useEffect(() => {
    if (questions.length > 0) {
      const pageQuestion = questions.find((question) => question.id === id);

      if (pageQuestion) {
        setQuestion(pageQuestion);
      }
    }
  }, [questions, id]);

  if (!userLogged) {
    return <Redirect to={'/authorization'} />;
  }

  if (usersRequest || questionRequest) {
    return <Preloader />;
  }

  if (!question) return null;

  return (
    <div className="question_page">
      <QuestionCard question={question} mode="full" />
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

const QuestionPage = connect(mapStateToProps, null)(_QuestionPage);

export default QuestionPage;
