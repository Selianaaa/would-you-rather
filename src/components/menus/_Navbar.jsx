import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavLink, Link } from 'react-router-dom';

import { SideMenu } from './_SideMenu';
import { MenuUser } from './_MenuUser';
import { menuLinks } from '../../constants';
import { usersActions } from '../../store';

import './_navbar.scss';

const _Navbar = ({ loggedUser, userIsLogged }) => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="navbar">
      {userIsLogged ? (
        <Fragment>
          <Link className="navbar__title__logged" to="/">
            Would You Rather?
          </Link>
          <div className="navbar__links">
            {menuLinks.map((link) => (
              <NavLink
                key={link.route}
                to={link.route}
                exact
                className="navbar__link"
                activeClassName="navbar__link__active"
              >
                {link.title}
              </NavLink>
            ))}
          </div>
        </Fragment>
      ) : (
        <Link className="navbar__title" to="/">
          Would You Rather?
        </Link>
      )}

      {userIsLogged && (
        <MenuUser
          isButton
          clickHandler={() => setOpened(true)}
          loggedUser={loggedUser}
          style={{ marginLeft: '30px' }}
        />
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
