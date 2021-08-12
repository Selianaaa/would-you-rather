import React, { Fragment } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import './index.scss';

const QuestionPage = () => {
  const { id } = useParams();

  return <div className="page">{`Question page ${id}`}</div>;
};

export default QuestionPage;
