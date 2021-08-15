import React from 'react';

import johndoeAvatar from '../../../assets/avatars/sarahedo.png';
import './_card_fragment.scss';

export const CardFragment = ({ user, place }) => (
  <div className="leaderboard_page__card">
    <div className="leaderboard_page__user">
      <div className="leaderboard_page__user__name">{user.name}</div>
      <div
        className="leaderboard_page__user__avatar"
        style={{
          // backgroundImage: `url(${user.avatarURL})`,
          backgroundImage: `url(${johndoeAvatar})`,
        }}
      ></div>
    </div>
    {Object.entries(user.stats).map(([key, value]) => (
      <div className="leaderboard_page__stat" key={key}>
        <div className="leaderboard_page__stat__title">{`${key
          .charAt(0)
          .toUpperCase()}${key.slice(1)}`}</div>
        <div className="leaderboard_page__stat__value">{value}</div>
      </div>
    ))}
    <div className="leaderboard_page__score">
      <p>{`#${place}`}</p>
    </div>
  </div>
);
