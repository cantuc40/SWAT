import React from 'react';
import ReactDOM from 'react-dom';
//import './App.scss';
import './bootstrap(1).scss'
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);


