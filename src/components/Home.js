import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import MaterialTable from 'material-table'
import { Button, ButtonGroup, Navbar, NavDropdown, Nav, ToggleButton } from 'react-bootstrap'
import { HashRouter, Route } from 'react-router-dom';

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      "hideName": false,
      "hidePrice": false,
      "hideReview": false,
      "hidePhoto": false,
      "hideShipping": true,
      "hideProductRating": true,
      "hideSellerRating": true,
    }
  }

  togglePrice = () => {
    this.setState({"hidePrice": !this.state.hidePrice})
  }

  toggleReview = () => {
    this.setState({"hideReview": !this.state.hideReview})
  }

  togglePhoto = () => {
    this.setState({"hidePhoto": !this.state.hidePhoto})
  }

  toggleShipping = () => {
    this.setState({"hideShipping": !this.state.hideShipping})
  }

  toggleProductRating = () => {
    this.setState({"hideProductRating": !this.state.hideProductRating})
  }

  toggleSellerRating = () => {
    this.setState({"hideSellerRating": !this.state.hideSellerRating})
  }

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
        <ToggleButton onClick = {() => this.togglePrice()} type="checkbox" checked = {!this.state.hidePrice} variant="primary">Prices</ToggleButton>
          <ToggleButton onClick = {() => this.toggleReview()} type="checkbox" checked = {!this.state.hideReview} variant="primary">Reviews</ToggleButton>
          <ToggleButton onClick = {() => this.togglePhoto()} type="checkbox" checked = {!this.state.hidePhoto} variant="primary">Photos</ToggleButton>
          <ToggleButton onClick = {() => this.toggleShipping()} type="checkbox" checked = {!this.state.hideShipping} variant="primary">Shipping</ToggleButton>
          <ToggleButton onClick = {() => this.toggleProductRating()} type="checkbox" checked = {!this.state.hideProductRating} variant="primary">Product Rating</ToggleButton>
          <ToggleButton onClick = {() => this.toggleSellerRating()} type="checkbox" checked = {!this.state.hideSellerRating} variant="primary">Seller Rating</ToggleButton>
        </div>
        

        <div style={{ maxWidth: '100%' }}>
          <MaterialTable
            columns={[
              { title: 'Name', field: 'name', hidden: this.state.hideName },
              { title: 'Price ($SGD)', field: 'price', hidden: this.state.hidePrice  },
              { title: 'Reviews', field: 'review', hidden: this.state.hideReview },
              { title: 'Photos', field: 'photo', hidden: this.state.hidePhoto  },
              { title: 'Shipping ($SGD)', field: 'shipping', hidden: this.state.hideShipping  },
              { title: 'Product Rating', field: 'productRating', hidden: this.state.hideProductRating  },
              { title: 'Seller Rating', field: 'sellerRating', hidden: this.state.hideSellerRating  },
            ]}
            data={[{ name: 'LiHO TEA - Earl Grey Milk Tea', price: 3.20, review: "No reviews found", photo: <img src = "https://burpple-1.imgix.net/foods/2f18d6ac7c4eb17076421691198_original.?w=645&dpr=1&fit=crop&q=80&auto=format" width = "100px"></img>, shipping: 1.00, productRating: 3.32, sellerRating: 4.32  },
                  { name: '[Gong Cha] 1x Pearl Milk Tea', price: 2.50, review: "Gong cha is always good Easy to redeeem.", photo: <img src = "https://d1sag4ddilekf6.cloudfront.net/compressed/items/SGITE20200319044328018640/photo/84241a7228f248fd880c4254e91c17d4_1584593008399161200.jpeg" width = "100px"></img>, shipping: 0.50, productRating: 2.30, sellerRating: 1.45 },
                  { name: 'Hopii Bubble Tea Large', price: 3.00, review: "First time purchase from this store", photo: <img src = "https://cdn.shopify.com/s/files/1/0770/5745/products/WhatsApp_Image_2020-02-25_at_15.06.35_1_69994b82-f890-488f-8c8f-289af17d7257_1000x.jpg?v=1604045465" width = "100px"></img>, shipping: 0.50, productRating: 4.29, sellerRating: 3.21 },
                  { name: 'Tiger Sugar Tiger Pure Tea Series', price: 4.20, review: "I ordered this drink on the 4th Dec", photo: <img src = "https://s3-ap-southeast-1.amazonaws.com/getz-prod/770f3d22-3dee-4e31-affb-5eb36fe9a201/1076784357_oolongtea.jpg" width = "100px"></img>, shipping: 1.00, productRating: 4.81, sellerRating: 4.99 },
                  { name: 'Nintendo Switch Animal Crossing', price: 34.20, review: "I love Tom Nook!", photo: <img src = "https://upload.wikimedia.org/wikipedia/en/1/1f/Animal_Crossing_New_Horizons.jpg" width = "100px"></img>, shipping: 1.00, productRating: 3.32, sellerRating: 4.32  },
                  { name: 'Nintendo Switch The Legend of Zelda: Breath of the Wild', price: 34.30, review: "It took be breath away.", photo: <img src = "https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg" width = "100px"></img>, shipping: 1.00, productRating: 3.11, sellerRating: 3.32  },
                  { name: 'Nintendo Switch Pokemon Sword and Shield', price: 53.30, review: "Pikachuuuu <3", photo: <img src = "https://assets.pokemon.com/assets/cms2/img/video-games/video-games/pokemon_sword_shield/sword-shield-169-en.jpg" width = "100px"></img>, shipping: 2.00, productRating: 4.22, sellerRating: 2.42  },
                  { name: 'Nintendo Switch Mario Kart 8', price: 66.30, review: "Fun with friends!", photo: <img src = "https://upload.wikimedia.org/wikipedia/en/b/b5/MarioKart8Boxart.jpg" width = "100px"></img>, shipping: 1.00, productRating: 2.14, sellerRating: 4.14  },
                  { name: 'Nintendo Switch Super Mario Odyssey', price: 99.90, review: "Too laggy", photo: <img src = "https://upload.wikimedia.org/wikipedia/en/8/8d/Super_Mario_Odyssey.jpg" width = "100px"></img>, shipping: 0.50, productRating: 3.53, sellerRating: 2.42  },
                  { name: 'Nintendo Switch Ring Fit Adventure', price: 34.40, review: "Finally an excuse to exercise", photo: <img src = "https://www.nintendo.com/content/dam/noa/en_US/games/switch/r/ring-fit-adventure-switch/ring-fit-adventure-switch-hero.jpg" width = "100px"></img>, shipping: 1.00, productRating: 4.32, sellerRating: 3.42  },
            
                ]}
            title="Product Comparison"
          />
        </div>

        
      </div>
    );
  }
}
