// Remember to restart the front end server (npm start)
// in the front end folder after you make any edits to the package.json file

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import Footer from './components/Footer';
import configureStore from './store';
import csrfFetch, { restoreCSRF } from './store/csrf';
import * as sessionActions from './store/session';
import * as businessActions from './store/businesses'
import * as userActions from './store/users';
import * as favoriteActions from './store/favorites';

const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  window.store = store;
  window.csrfFetch = csrfFetch;
  window.sessionActions = sessionActions;
  window.businessActions = businessActions;
  window.userActions = userActions;
  window.favoriteActions = favoriteActions;
};

function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

const renderApplication = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

if (
  sessionStorage.getItem("X-CSRF-Token") === null ||
  sessionStorage.getItem("currentUser") === null
) {
  store.dispatch(sessionActions.restoreSession()).then(renderApplication)
  // restoreCSRF().then(renderApplication);
} else {
  renderApplication();
}

