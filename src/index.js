import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
// import { Router, Route, browserHistory, IndexRoute } from 'react-router';
// import { syncHistoryWithStore } from 'react-router-redux';
import {AppContainer} from './AppContainer'

// import { epicMiddleware } from './rootEpic';
import { rootReducer } from './rootReducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;
const store = createStore(
  rootReducer,
  composeEnhancers()
);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer/>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();