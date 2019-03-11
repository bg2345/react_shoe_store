import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'));

  // good for development, keeps the page from refreshing, wich means that as we develop the code it won't reset the state
if (module.hot) {
  module.hot.accept();
}
