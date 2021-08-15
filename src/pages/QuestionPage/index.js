import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import { QuestionCard, Preloader } from '../../components';
import './index.scss';

const _QuestionPage = ({ questions, usersRequest, questionRequest }) => {
  const { id } = useParams();
  const history = useHistory();

  const [question, setQuestion] = useState(null);

  useEffect(() => {
    if (questions.length > 0) {
      const pageQuestion = questions.find((question) => question.id === id);

      if (!pageQuestion) {
        return history.push('/not_found');
      }

      setQuestion(pageQuestion);
    }
  }, [questions, id]);

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
  usersRequest: users.users_request,

  questions: questions.questions,
  questionRequest: questions.questions_request,
});

const QuestionPage = connect(mapStateToProps, null)(_QuestionPage);

export default QuestionPage;
