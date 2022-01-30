import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { Preloader, Navbar } from '../components';

const HomePage = React.lazy(() => import('../pages/HomePage'));
const AddPage = React.lazy(() => import('../pages/AddPage'));
const QuestionPage = React.lazy(() => import('../pages/QuestionPage'));
const LeaderboardPage = React.lazy(() => import('../pages/LeaderboardPage'));
const AuthorizationPage = React.lazy(() =>
  import('../pages/AuthorizationPage')
);
const NotFoundPage = React.lazy(() => import('../pages/NotFoundPage'));

const _AppRouter = ({ userLogged }) => {
  return (
    <Router>
      <div className="page">
        <Navbar />
        <div className="content">
          <Suspense fallback={<Preloader />}>
            {!userLogged ? (
              <AuthorizationPage />
            ) : (
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/leaderboard" component={LeaderboardPage} />
                <Route exact path="/questions/:id" component={QuestionPage} />
                <Route exact path="/add" component={AddPage} />
                <Route
                  exact
                  path="/authorization"
                  component={AuthorizationPage}
                />
                <Route path="*" component={NotFoundPage} />
              </Switch>
            )}
          </Suspense>
        </div>
      </div>
    </Router>
  );
};

const mapStateToProps = ({ users }) => ({
  userLogged: users.logged,
});

const AppRouter = connect(mapStateToProps, null)(_AppRouter);

export default AppRouter;
