import React from 'react';
import { Router, withRouter, Link } from 'react-router-dom'
import './App.css';

import logo from './assets/logo.svg';

import Routes from './routes'

function App({ history }) {

  function redirect() {
    console.log("oi")
  }

  return (
    <div className="container">

      <img src={logo} alt="AirCnC" />

      <div className="content">
        <Routes />
      </div>
    </div>

  );
}

export default App;
