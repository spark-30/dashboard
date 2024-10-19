import React from 'react';
import ReactDOM from 'react-dom';

import App from './App'; // Import the main App component

// Renders the App component into the HTML div with id 'root'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
