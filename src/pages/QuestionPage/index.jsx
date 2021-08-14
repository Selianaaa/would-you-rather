import React, { Fragment } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import './index.scss';

const QuestionPage = () => {
  const { id } = useParams();

  return <Fragment>{`Question page ${id}`}</Fragment>;
};

export default QuestionPage;
