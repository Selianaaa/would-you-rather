import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, Redirect } from 'react-router-dom';

import johndoeAvatar from '../../assets/avatars/sarahedo.png';
import { SideMenu } from './_SideMenu';
import { Preloader } from '../../components';
import { usersActions } from '../../store';

import './_navbar.scss';

export const _Navbar = ({ loggedUser, userIsLogged }) => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="navbar">
      <Link className="navbar__title" to="/">
        Would You Rather?
      </Link>
      {userIsLogged && (
        <div className="navbar__menu">
          <div
            className="navbar__menu__avatar"
            style={{
              backgroundImage: `url(${johndoeAvatar})`,
            }}
          ></div>
          <div className="navbar__menu__name" onClick={() => setOpened(true)}>
            {loggedUser.name}
          </div>
        </div>
      )}

      {opened && <SideMenu closeMenu={() => setOpened(false)} />}
    </div>
  );
};

const mapStateToProps = ({ users }) => ({
  loggedUser: users.logged_user,
  userIsLogged: users.logged,
});

const mapDispatchtoProps = (dispatch) => ({
  ...bindActionCreators(usersActions, dispatch),
});

export const Navbar = connect(mapStateToProps, mapDispatchtoProps)(_Navbar);
