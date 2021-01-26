import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import MaterialTable from 'material-table'
import { Button, Navbar, NavDropdown, Nav } from 'react-bootstrap'
import { HashRouter, Route } from 'react-router-dom';
import HackathonNavbar from './HackathonNavbar';

export default class Credits extends Component {
  
  render() {
    return (
      <div className="Credits">
        <HackathonNavbar />

        <h3 style = {{ textAlign: "left", margin: "10px" }}> 
          Credits: 
          <div style = {{display: "flex", flexDirection: "column", justifyContent: "flex-start", margin:'10px'}}>
            <a href="https://github.com/chelchia">Chelchia</a>
            <a href="https://github.com/dinhnhobao">Dinhnhobao</a>
            <a href="https://github.com/g-lilian">G-lilian</a>
            <a href="https://github.com/ShengXue97">ShengXue97</a>
          </div>
        </h3>
        
      </div>
    );
  }
}

