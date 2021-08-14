import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavLink, useHistory } from 'react-router-dom';

import johndoeAvatar from '../../assets/avatars/sarahedo.png';
import { usersActions } from '../../store';
import { MenuUser } from './_MenuUser';
import { menuLinks } from '../../constants';
import './_side_menu.scss';

const _SideMenu = ({ loggedUser, closeMenu, logout }) => {
  const history = useHistory();

  if (!loggedUser) return null;

  return (
    <div className="side_menu">
      <div className="side_menu__close_btn" onClick={closeMenu}></div>
      <MenuUser
        name={loggedUser.name}
        avatar={johndoeAvatar}
        style={{ marginTop: '30px' }}
      />

      {menuLinks.map((link) => (
        <NavLink
          key={link.route}
          to={link.route}
          exact
          onClick={closeMenu}
          className="side_menu__mobile_link"
          activeClassName="side_menu__mobile_link__active"
        >
          {link.title}
        </NavLink>
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
