import React, { Fragment } from 'react';

import './_menu_user.scss';

export const MenuUser = ({
  isButton = false,
  clickHandler,
  loggedUser,
  ...otherProps
}) => {
  const userCard = (
    <Fragment>
      <div
        className="menu_user__avatar"
        style={{
          backgroundImage: `url(${loggedUser.avatarURL})`,
        }}
      ></div>
      <div className="menu_user__name">{loggedUser.name}</div>
    </Fragment>
  );

  if (isButton) {
    return (
      <div className="menu_user_btn" onClick={clickHandler} {...otherProps}>
        {userCard}
      </div>
    );
  }

  return (
    <div className="menu_user" {...otherProps}>
      {userCard}
    </div>
  );
};
