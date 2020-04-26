import React from 'react';
import './App.scss';
import logoImage from './assets/images/kisanola.png';

function App() {
  return (
    <div className="app">
      <img src={logoImage} className="app-logo" alt="logo" />
      <p>
        244devs
      </p>
    </div>
  );
}

export default App;
