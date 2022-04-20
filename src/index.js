// index.js

import App from './App';
import ReactDOM from 'react-dom'
import React from 'react';
import { BrowserRouter ,  Route, Routes } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);