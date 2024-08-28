import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Create a root container where the entire app will be rendered
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root container
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
