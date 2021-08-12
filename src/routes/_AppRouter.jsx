import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Preloader } from '../components';

const HomePage = React.lazy(() => import('../pages/HomePage'));
const AddPage = React.lazy(() => import('../pages/AddPage'));
const QuestionPage = React.lazy(() => import('../pages/QuestionPage'));
const LeaderboardPage = React.lazy(() => import('../pages/LeaderboardPage'));

export class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <Suspense fallback={<Preloader />}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/leaderboard" component={LeaderboardPage} />
            <Route path="/questions/:id" component={QuestionPage} />
            <Route path="/add" component={AddPage} />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}
