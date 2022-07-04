import React from 'react';
import ReactDOM from 'react-dom/client';
import {applyMiddleware, compose, createStore} from 'redux';
import { rootReducer } from './redux/rootReducer';
import { Provider } from 'react-redux';
import App from './App';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, compose(applyMiddleware(thunk) , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
