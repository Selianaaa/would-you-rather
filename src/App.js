import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { appActions } from './store';
import { AppRouter } from './routes';
import './App.scss';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(appActions.startApp());
  }, []);

  return (
    <div className="app">
      <AppRouter />
    </div>
  );
}

export default App;
