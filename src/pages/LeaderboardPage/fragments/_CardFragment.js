import React from 'react';

import './_card_fragment.scss';

export const CardFragment = ({ user, place }) => (
  <div className="leaderboard_card">
    <div className="leaderboard_card__user">
      <div className="leaderboard_card__user__name">{user.name}</div>
      <div
        className="leaderboard_card__user__avatar"
        style={{
          backgroundImage: `url(${user.avatarURL})`,
        }}
      ></div>
    </div>

    {Object.entries(user.stats).map(([key, value]) => (
      <div className="leaderboard_card__stat" key={key}>
        <div className="leaderboard_card__stat__title">{`${key
          .charAt(0)
          .toUpperCase()}${key.slice(1)}`}</div>
        <div className="leaderboard_card__stat__value">
          <p>{value}</p>
        </div>
      </div>
    ))}

    <div className="leaderboard_card__score">
      <p>{`#${place}`}</p>
    </div>
  </div>
);
