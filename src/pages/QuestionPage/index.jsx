import React, { Fragment } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './index.scss';

const _QuestionPage = ({ userLogged }) => {
  const { id } = useParams();

  if (!userLogged) {
    return <Redirect to={'/authorization'} />;
  }

  return <Fragment>{`Question page ${id}`}</Fragment>;
};

const mapStateToProps = ({ users }) => ({ userLogged: users.logged });

const QuestionPage = connect(mapStateToProps, null)(_QuestionPage);

export default QuestionPage;
