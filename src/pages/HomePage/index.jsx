import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './index.scss';

const _HomePage = ({ userLogged }) => {
  if (!userLogged) {
    return <Redirect to={'/authorization'} />;
  }

  return (
    <div className="home_page">
      <div> Home page</div>
      <div></div>
    </div>
  );
};

const mapStateToProps = ({ users }) => ({
  userLogged: users.logged,
  userData: users.logged_user,
});

const HomePage = connect(mapStateToProps, null)(_HomePage);

export default HomePage;
