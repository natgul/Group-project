import React from 'react';
import ReactDOM from 'react-dom/client';
import RestaurantApp from './RestaurantApp';

//Denna ska inte heller ändras i. Dvs om ni inte är 100% säkra på att denna ska ändras

const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(
  <React.StrictMode>
    <RestaurantApp />
  </React.StrictMode>
);
