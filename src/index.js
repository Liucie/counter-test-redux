import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
// import {INCREMENT, myAction} from './redux/actions'


console.log(store);
console.log(store.getState())

// console.log(store.dispatch(INCREMENT));
// console.log(store.dispatch(myAction))
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



