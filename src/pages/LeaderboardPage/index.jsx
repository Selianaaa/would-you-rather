import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './index.scss';

const _LeaderboardPage = ({ userLogged }) => {
  if (!userLogged) {
    return <Redirect to={'/authorization'} />;
  }

  return <Fragment>Leaderboard page</Fragment>;
};

const mapStateToProps = ({ users }) => ({ userLogged: users.logged });

const LeaderboardPage = connect(mapStateToProps, null)(_LeaderboardPage);

export default LeaderboardPage;
