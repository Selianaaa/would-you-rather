import React, { Fragment } from 'react';

import './_menu_user.scss';

export const MenuUser = ({
  isButton = false,
  clickHandler,
  name,
  avatar,
  ...otherProps
}) => {
  const userCard = (
    <Fragment>
      <div
        className="menu_user__avatar"
        style={{
          backgroundImage: `url(${avatar})`,
        }}
      ></div>
      <div className="menu_user__name">{name}</div>
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
