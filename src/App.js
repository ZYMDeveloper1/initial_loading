import React from 'react';
import { Link } from 'react-router-dom';
import Routes from './Routes';
import './App.css';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
      <hr />
      <Routes />
    </div>
  );
}

export default App;
