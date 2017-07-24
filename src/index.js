import React from 'react';
import ReactDOM from 'react-dom';
// import store from 'reducers';
import 'normalize-css';
import 'ui/global';
// import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './pages/App';

ReactDOM.render(
  // <Provider store={store}>
    <Router>
      <App />
    </Router>,
  // </Provider>,
  document.getElementById('root')
);

require('es6-promise').polyfill();
