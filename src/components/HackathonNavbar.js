import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Button, ButtonGroup, Navbar, NavDropdown, Nav, ToggleButton } from 'react-bootstrap'

const HackathonNavbar = props =>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">Compare products</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Compare products</Nav.Link>
        <Nav.Link href="#credits">About</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>;

export default HackathonNavbar;
