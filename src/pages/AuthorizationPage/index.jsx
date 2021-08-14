import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';

import { Preloader } from '../../components';
import { usersActions } from '../../store';
import './index.scss';

const _AuthorizationPage = ({
  users,
  usersRequest,
  userIsLogged,
  setLoggedUser,
}) => {
  const [userName, setUserName] = useState('');

  const loginUser = (name) => {
    const userData = users.find((user) => user.name === name);

    console.log(name, users);

    if (!userData) {
      setUserName('');
      return alert('User not found');
    }

    return setLoggedUser(userData);
  };

  useEffect(() => {
    if (users.length > 0) {
      setUserName(users[0].name);
    }
  }, [users]);

  if (usersRequest) {
    return <Preloader />;
  }

  if (userIsLogged) {
    return <Redirect to={'/'} />;
  }

  return (
    <div className="page_content">
      <div className="page_content__page_title">Authorization</div>
      <div className="page_content__subtitle">To continue please login</div>
      <div className="page_content__login_form">
        <select
          className="page_content__select_user"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        >
          {users.map((user) => (
            <option key={user.id} value={user.name}>
              {user.name}
            </option>
          ))}
        </select>
        <button
          className="page_content__authorization_btn"
          onClick={() => loginUser(userName)}
        >
          Login
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ users }) => ({
  users: users.users,
  usersRequest: users.users_request,
  userIsLogged: users.logged,
});

const mapDispatchtoProps = (dispatch) => ({
  ...bindActionCreators(usersActions, dispatch),
});

const AuthorizationPage = connect(
  mapStateToProps,
  mapDispatchtoProps
)(_AuthorizationPage);

export default AuthorizationPage;
