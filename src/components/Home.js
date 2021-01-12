import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import MaterialTable from 'material-table'
import { Button, Navbar, NavDropdown, Nav } from 'react-bootstrap'
import { HashRouter, Route } from 'react-router-dom';

export default class Home extends Component {
  
  render() {
    return (
      <div className="Home">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">Shopee Ultra Hackathon</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Compare products</Nav.Link>
              <Nav.Link href="#credits">Credits</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <h3 style = {{ textAlign: "left", marginLeft: "10px" }}> Compare By: </h3>

        <div style = {{display: "flex", flexDirection: "row", justifyContent: "flex-start", marginLeft:'10px'}}>
          <Button style = {{flex: "1", margin: "2px"}} variant="primary">Price</Button>
          <Button style = {{flex: "1", margin: "2px"}} variant="primary">Reviews</Button>
          <Button style = {{flex: "1", margin: "2px"}} variant="primary">Photos</Button>
          <Button style = {{flex: "1", margin: "2px"}} variant="primary">Shipping</Button>
          <Button style = {{flex: "1", margin: "2px"}} variant="primary">Seller Rating</Button> 
        </div>
        

        <div style={{ maxWidth: '100%' }}>
          <MaterialTable
            columns={[
              { title: 'Name', field: 'name' },
              { title: 'Price', field: 'price' },
              { title: 'Reviews', field: 'review'},
              { title: 'Photos', field: 'photo' },
            ]}
            data={[{ name: 'LiHO TEA - Earl Grey Milk Tea', price: '$3.20', review: "No reviews found", photo: "None" },
                  { name: '[Gong Cha] 1x Pearl Milk Tea', price: '$2.50', review: "Gong cha is always good Easy to redeeem.", photo: "None" },
                  { name: 'Hopii Bubble Tea Large', price: '$3.00', review: "First time purchase from this store", photo: "None" },
                  { name: 'Tiger Sugar Tiger Pure Tea Series', price: '$4.20', review: "I ordered this drink on the 4th Dec", photo: "None" }
            
                ]}
            title="Product Comparison"
          />
        </div>

        
      </div>
    );
  }
}
