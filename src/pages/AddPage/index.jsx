import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './index.scss';

const _AddPage = ({ userLogged }) => {
  if (!userLogged) {
    return <Redirect to={'/authorization'} />;
  }

  return <Fragment>Add page</Fragment>;
};

const mapStateToProps = ({ users }) => ({ userLogged: users.logged });

const AddPage = connect(mapStateToProps, null)(_AddPage);

export default AddPage;
