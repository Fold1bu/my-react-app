import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App.jsx'; // Исправленное место
import reportWebVitals from './reportWebVitals.jsx'; // Убедитесь, что путь правильный

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Если у вас есть функциональность по измерению показателей
reportWebVitals();
