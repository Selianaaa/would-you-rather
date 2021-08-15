import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './index.scss';

const _AddPage = ({ userLogged }) => {
  if (!userLogged) {
    return <Redirect to={'/authorization'} />;
  }

  return (
    <div className="add_page">
      <div className="add_page__title">Create a New Question</div>
      <div className="add_page__card">
        <div>Would you rather..</div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ users }) => ({ userLogged: users.logged });

const AddPage = connect(mapStateToProps, null)(_AddPage);

export default AddPage;
