import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Preloader, Navbar } from '../components';

const HomePage = React.lazy(() => import('../pages/HomePage'));
const AddPage = React.lazy(() => import('../pages/AddPage'));
const QuestionPage = React.lazy(() => import('../pages/QuestionPage'));
const LeaderboardPage = React.lazy(() => import('../pages/LeaderboardPage'));
const AuthorizationPage = React.lazy(() =>
  import('../pages/AuthorizationPage')
);
const NotFoundPage = React.lazy(() => import('../pages/NotFoundPage'));

export default function () {
  return (
    <Router>
      <div className="page">
        <Navbar />

        <div className="content">
          <Suspense fallback={<Preloader />}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/leaderboard" component={LeaderboardPage} />
              <Route path="/questions/:id" component={QuestionPage} />
              <Route path="/add" component={AddPage} />
              <Route path="/authorization" component={AuthorizationPage} />
              <Route path="*" component={NotFoundPage} />
            </Switch>
          </Suspense>
        </div>
      </div>
    </Router>
  );
}
