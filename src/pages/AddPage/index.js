import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { questionsActions } from '../../store';
import { Preloader } from '../../components';
import './index.scss';

const _AddPage = ({ addingQuestion, addQuestion, loggedUser }) => {
  const history = useHistory();
  const [optionOne, setOptionOne] = useState('');
  const [optionTwo, setOptionTwo] = useState('');

  return (
    <div className="add_page">
      <div className="add_page__title">Create a New Question</div>
      <div className="add_page__card">
        {addingQuestion ? (
          <Preloader />
        ) : (
          <Fragment>
            <div className="add_page__text">Would you rather..</div>

            <div className="add_page__inputs">
              <input
                type="text"
                value={optionOne}
                className="add_page__input"
                placeholder="Enter option one..."
                onChange={(e) => setOptionOne(e.target.value)}
              />
              <div className="add_page__text">OR</div>
              <input
                type="text"
                value={optionTwo}
                className="add_page__input"
                placeholder="Enter option two..."
                onChange={(e) => setOptionTwo(e.target.value)}
              />
            </div>

            <button
              className="add_page__btn"
              disabled={optionOne.length === 0 || optionTwo.length === 0}
              onClick={() =>
                addQuestion({ optionOne, optionTwo }, loggedUser.id, history)
              }
            >
              Create
            </button>
          </Fragment>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ users, questions }) => ({
  loggedUser: users.logged_user,

  addingQuestion: questions.adding_question,
});

const mapDispatchtoProps = (dispatch) => ({
  ...bindActionCreators(questionsActions, dispatch),
});

const AddPage = connect(mapStateToProps, mapDispatchtoProps)(_AddPage);

export default AddPage;
