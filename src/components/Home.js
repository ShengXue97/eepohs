import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component, useState, useEffect } from 'react';
import MaterialTable from 'material-table'
import { Button, ButtonGroup, Navbar, NavDropdown, Nav, ToggleButton, Modal } from 'react-bootstrap'
import { HashRouter, Route } from 'react-router-dom';
import HackathonNavbar from './HackathonNavbar';

function Home() {
  // Displayed metrics -- controls which comparison data is shown
  const [name, tName] = useState(true);
  const [price, tPrice] = useState(true);
  const [review, tReview] = useState(true);
  const [photo, tPhoto] = useState(true);
  const [shipping, tShipping] = useState(false);
  const [productRating, tProductRating] = useState(false);
  const [sellerRating, tSellerRating] = useState(false);

  // All metrics -- controls which metrics are available for showing of comparison data
  const [mName, tmName] = useState(true);
  const [mPrice, tmPrice] = useState(true);
  const [mReview, tmReview] = useState(true);
  const [mPhoto, tmPhoto] = useState(true);
  const [mShipping, tmShipping] = useState(true);
  const [mProductRating, tmProductRating] = useState(true);
  const [mSellerRating, tmSellerRating] = useState(false);

  // For opening/closing edit metrics modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const toggleMetric = (metric) => {
    switch (metric) {
      case "price":
        tPrice(!price); break;
      case "review":
        tReview(!review); break;
      case "photo":
        tPhoto(!photo); break;
      case "shipping":
        tShipping(!shipping); break;
      case "productRating":
        tProductRating(!productRating); break;
      case "sellerRating":
        tSellerRating(!sellerRating); break;
    }
  }

  const toggleMetricDisplay = (metric) => {
    switch (metric) {
      case "mPrice":
        tmPrice(!mPrice); break;
      case "mReview":
        tmReview(!mReview); break;
      case "mPhoto":
        tmPhoto(!mPhoto); break;
      case "mShipping":
        tmShipping(!mShipping); break;
      case "mProductRating":
        tmProductRating(!mProductRating); break;
      case "mSellerRating":
        tmSellerRating(!mSellerRating); break;
    }
  }

  return (
    <div className="Home">
      <HackathonNavbar />

      <h3 style = {{ textAlign: "left", marginLeft: "10px" }}> Compare By: </h3>
      <Button variant="primary" onClick={handleShow}>Edit Metrics</Button>

      <div style = {{display: "flex", flexDirection: "row", justifyContent: "flex-start", marginLeft:'10px'}}>
        <ToggleButton onClick = {() => toggleMetric("price")} hidden={!mPrice} type="checkbox" checked = {price} variant="primary">Prices</ToggleButton>
        <ToggleButton onClick = {() => toggleMetric("review")} hidden={!mReview} type="checkbox" checked = {review} variant="primary">Reviews</ToggleButton>
        <ToggleButton onClick = {() => toggleMetric("photo")} hidden={!mPhoto} type="checkbox" checked = {photo} variant="primary">Photos</ToggleButton>
        <ToggleButton onClick = {() => toggleMetric("shipping")} hidden={!mShipping} type="checkbox" checked = {shipping} variant="primary">Shipping</ToggleButton>
        <ToggleButton onClick = {() => toggleMetric("productRating")} hidden={!mProductRating} type="checkbox" checked = {productRating} variant="primary">Product Rating</ToggleButton>
        <ToggleButton onClick = {() => toggleMetric("sellerRating")} hidden={!mSellerRating} type="checkbox" checked = {sellerRating} variant="primary">Seller Rating</ToggleButton>
      </div>
      

      <div style={{ maxWidth: '100%' }}>
        <MaterialTable
          columns={[
            { title: 'Name', field: 'name', hidden: !name || !mName },
            { title: 'Price ($SGD)', field: 'price', hidden: !price || !mPrice  },
            { title: 'Reviews', field: 'review', hidden: !review || !mReview },
            { title: 'Photos', field: 'photo', hidden: !photo || !mPhoto },
            { title: 'Shipping ($SGD)', field: 'shipping', hidden: !shipping || !mShipping },
            { title: 'Product Rating', field: 'productRating', hidden: !productRating || !mProductRating },
            { title: 'Seller Rating', field: 'sellerRating', hidden: !sellerRating || !mSellerRating },
          ]}
          data={[{ name: 'LiHO TEA - Earl Grey Milk Tea', price: 3.20, review: "No reviews found", photo: <img src = "https://burpple-1.imgix.net/foods/2f18d6ac7c4eb17076421691198_original.?w=645&dpr=1&fit=crop&q=80&auto=format" width = "100px"></img>, shipping: 1.00, productRating: 3.32, sellerRating: 4.32  },
                { name: '[Gong Cha] 1x Pearl Milk Tea', price: 2.50, review: "Gong cha is always good Easy to redeeem.", photo: <img src = "https://d1sag4ddilekf6.cloudfront.net/compressed/items/SGITE20200319044328018640/photo/84241a7228f248fd880c4254e91c17d4_1584593008399161200.jpeg" width = "100px"></img>, shipping: 0.50, productRating: 2.30, sellerRating: 1.45 },
                { name: 'Hopii Bubble Tea Large', price: 3.00, review: "First time purchase from this store", photo: <img src = "https://cdn.shopify.com/s/files/1/0770/5745/products/WhatsApp_Image_2020-02-25_at_15.06.35_1_69994b82-f890-488f-8c8f-289af17d7257_1000x.jpg?v=1604045465" width = "100px"></img>, shipping: 0.50, productRating: 4.29, sellerRating: 3.21 },
                { name: 'Tiger Sugar Tiger Pure Tea Series', price: 4.20, review: "I ordered this drink on the 4th Dec", photo: <img src = "https://s3-ap-southeast-1.amazonaws.com/getz-prod/770f3d22-3dee-4e31-affb-5eb36fe9a201/1076784357_oolongtea.jpg" width = "100px"></img>, shipping: 1.00, productRating: 4.81, sellerRating: 4.99 },
                { name: 'Nintendo Switch Animal Crossing', price: 34.20, review: "I love Tom Nook!", photo: <img src = "https://upload.wikimedia.org/wikipedia/en/1/1f/Animal_Crossing_New_Horizons.jpg" width = "100px"></img>, shipping: 1.00, productRating: 3.32, sellerRating: 4.32  },
                { name: 'Nintendo Switch The Legend of Zelda: Breath of the Wild', price: 34.30, review: "It took my breath away.", photo: <img src = "https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg" width = "100px"></img>, shipping: 1.00, productRating: 3.11, sellerRating: 3.32  },
                { name: 'Nintendo Switch Pokemon Sword and Shield', price: 53.30, review: "Pikachuuuu <3", photo: <img src = "https://assets.pokemon.com/assets/cms2/img/video-games/video-games/pokemon_sword_shield/sword-shield-169-en.jpg" width = "100px"></img>, shipping: 2.00, productRating: 4.22, sellerRating: 2.42  },
                { name: 'Nintendo Switch Mario Kart 8', price: 66.30, review: "Fun with friends!", photo: <img src = "https://upload.wikimedia.org/wikipedia/en/b/b5/MarioKart8Boxart.jpg" width = "100px"></img>, shipping: 1.00, productRating: 2.14, sellerRating: 4.14  },
                { name: 'Nintendo Switch Super Mario Odyssey', price: 99.90, review: "Too laggy", photo: <img src = "https://upload.wikimedia.org/wikipedia/en/8/8d/Super_Mario_Odyssey.jpg" width = "100px"></img>, shipping: 0.50, productRating: 3.53, sellerRating: 2.42  },
                { name: 'Nintendo Switch Ring Fit Adventure', price: 34.40, review: "Finally an excuse to exercise", photo: <img src = "https://www.nintendo.com/content/dam/noa/en_US/games/switch/r/ring-fit-adventure-switch/ring-fit-adventure-switch-hero.jpg" width = "100px"></img>, shipping: 1.00, productRating: 4.32, sellerRating: 3.42  },
          
              ]}
          title="Product Comparison"
        />
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Comparison Metrics</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <ToggleButton onClick = {() => toggleMetricDisplay("mPrice")} type="checkbox" checked = {mPrice} variant="primary">Prices</ToggleButton>
          <ToggleButton onClick = {() => toggleMetricDisplay("mReview")} type="checkbox" checked = {mReview} variant="primary">Reviews</ToggleButton>
          <ToggleButton onClick = {() => toggleMetricDisplay("mPhoto")} type="checkbox" checked = {mPhoto} variant="primary">Photos</ToggleButton>
          <ToggleButton onClick = {() => toggleMetricDisplay("mShipping")} type="checkbox" checked = {mShipping} variant="primary">Shipping</ToggleButton>
          <ToggleButton onClick = {() => toggleMetricDisplay("mProductRating")} type="checkbox" checked = {mProductRating} variant="primary">Product Rating</ToggleButton>
          <ToggleButton onClick = {() => toggleMetricDisplay("mSellerRating")} type="checkbox" checked = {mSellerRating} variant="primary">Seller Rating</ToggleButton>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
}

export default Home;
