import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/style.css';
import './styles/Header.css';
import './styles/Banner.css'
import './styles/Main.css'
import './styles/Card.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

