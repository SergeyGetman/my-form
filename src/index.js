import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter, Router } from 'react-router-dom';
import { globalHistory } from './history/useHistory';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Router history={globalHistory}>
        <App />,
      </Router>
      ,
    </Provider>
    ,
  </BrowserRouter>,

  document.getElementById('root')
);
