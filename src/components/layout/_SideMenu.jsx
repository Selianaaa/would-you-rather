import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, useHistory } from 'react-router-dom';

import johndoeAvatar from '../../assets/avatars/sarahedo.png';
import { usersActions } from '../../store';
import { menuLinks } from '../../constants';
import './_side_menu.scss';

export const _SideMenu = ({ loggedUser, closeMenu, logout }) => {
  const history = useHistory();

  if (!loggedUser) return null;

  return (
    <div className="side_menu">
      <div className="side_menu__close_btn" onClick={closeMenu}></div>
      <div className="side_menu__user">
        <div
          className="side_menu__user__avatar"
          style={{
            backgroundImage: `url(${johndoeAvatar})`,
          }}
        ></div>
        <div className="side_menu__user__name">{loggedUser.name}</div>
      </div>

      {menuLinks.map((link) => (
        <Link
          key={link.route}
          to={link.route}
          onClick={closeMenu}
          className="side_menu__mobile_link"
        >
          {link.title}
        </Link>
      ))}

      <div className="side_menu__btn" onClick={() => logout(history)}>
        Logout
      </div>
    </div>
  );
};

const mapStateToProps = ({ users }) => ({
  loggedUser: users.logged_user,
});

const mapDispatchtoProps = (dispatch) => ({
  ...bindActionCreators(usersActions, dispatch),
});

export const SideMenu = connect(mapStateToProps, mapDispatchtoProps)(_SideMenu);
