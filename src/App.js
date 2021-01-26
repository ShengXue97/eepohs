import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import MaterialTable from 'material-table'
import { Button, Navbar, NavDropdown, Nav } from 'react-bootstrap'
import { HashRouter, Route } from 'react-router-dom';
 

import Home from './components/Home.js';
import Credits from './components/Credits.js';

function App() {

  return (
    <HashRouter basename="/">
      <div>
        <Route exact path="/home" component={Home} />
        <Route exact path="/credits" component={Credits} />
        <Route exact path="/" component={Home} />
      </div>
    </HashRouter>
  );
}

export default App;
