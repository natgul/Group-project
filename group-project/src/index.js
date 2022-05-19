import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//Denna ska inte heller ändras i. Dvs om ni inte är 100% säkra på att denna ska ändras

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
