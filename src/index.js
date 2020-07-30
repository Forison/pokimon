import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheet/index.css';
import App from '../src/components/presentational/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { addToLineUp }from './redux/reducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
  pokemon: []
}

const store = createStore(addToLineUp, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
