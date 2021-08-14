import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './index.scss';

const _HomePage = ({ userLogged }) => {
  if (!userLogged) {
    return <Redirect to={'/authorization'} />;
  }

  return <Fragment>Home page</Fragment>;
};

const mapStateToProps = ({ users }) => ({ userLogged: users.logged });

const HomePage = connect(mapStateToProps, null)(_HomePage);

export default HomePage;
