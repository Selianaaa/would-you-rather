import React, { Fragment, useMemo } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import johndoeAvatar from '../../assets/avatars/sarahedo.png';
import { Preloader } from '../../components';
import './index.scss';

const _LeaderboardPage = ({
  userLogged,
  users,
  usersRequest,
  questionRequest,
}) => {
  const bestUsers = useMemo(() => {
    const bestUsers = [];

    if (users.length > 0) {
      users.map((user) => {
        const answered = Object.keys(user.answers).length;
        const created = user.questions.length;

        bestUsers.push({
          ...user,
          stats: {
            answered,
            created,
            scores: answered + created,
          },
        });
      });

      bestUsers.sort((a, b) => {
        return b.stats.scores - a.stats.scores;
      });
    }

    return bestUsers;
  }, [users]);

  if (usersRequest || questionRequest) {
    return <Preloader />;
  }

  if (!userLogged) {
    return <Redirect to={'/authorization'} />;
  }

  console.log(bestUsers);
  return (
    <div className="leaderboard_page">
      <div className="leaderboard_page__title">Leader Board</div>
      <div className="leaderboard_page__content">
        {bestUsers.map((user, index) => (
          <div className="leaderboard_page__card" key={user.id}>
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
              <p>{`#${index + 1}`}</p>
              {/* <p>{`#${place}`}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({ users }) => ({
  userLogged: users.logged,
  users: users.users,
  usersRequest: users.users_request,
});

const LeaderboardPage = connect(mapStateToProps, null)(_LeaderboardPage);

export default LeaderboardPage;
