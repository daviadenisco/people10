import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import './App.css';
import 'react-dropdown/style.css';
const options = ['small', 'medium', 'large', 'extra large'];
const colors = ['red', 'pink', 'blue']
const defaultSize = options[0];

class App extends Component {
  state = {
    header: "YOUR SHOPPING CART",
    subHeader: "If the cart is completely empty, then we shall again add back the products for you.",
    items: [{
      id: 1,
      image: './images/red-logo-shirt.jpg',
      itemName: "COTTON TSHIRT",
      style: "Style #: MS13KT1906",
      color: "Color: " + colors[2],
      size: "S",
      quantity: 1,
      price: "$11.00",
    },
    {
      id: 2,
      image: './images/pink-shirt.jpg',
      itemName: "PRINT GIRL'S TEE",
      style: "Style #: MS13KT1907",
      color: "Color: " + colors[1],
      size: "S",
      quantity: 1,
      price: "$17.00",
    },
    {
      id: 3,
      image: './images/blue-palm-shirt.jpg',
      itemName: "FLOWER PATTERN SHIRT",
      style: "Style #: MS13KT1908",
      color: "Color: " + colors[2],
      size: "S",
      quantity: 1,
      price: "$21.00",
    },
    {
      id: 4,
      image: './images/plaid-button-shirt.jpg',
      itemName: "CHECK PATTERN TSHIRT",
      style: "Style #: MS13KT1909",
      color: "Color: " + colors[0],
      size: "M",
      quantity: 1,
      price: "$22.00",
    }],
    options: [{
      colors: {
        color1: "red",
        color2: "blue",
        color3: "green",
        color4: "yellow",
        color5: "pink"
      },
      sizes: {
        small: "small",
        medium: "medium",
        large: "large",
        extraLarge: "extra large"
      }
    }]
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="header">{this.state.header}</h1>
          <h5 className="subHeader">{this.state.subHeader}</h5>
        </header>
        <ul>
          {
            this.state.items.map(item => {
              return (
                <div id="itemsDiv" key={item.id}>
                  <div id="left">
                    <img src={item.image} alt="product"/>
                  </div>
                  <div id="middle">
                    <li id="itemName">{item.itemName}</li>
                    <li id="itemStyle">{item.style}</li>
                    <li id="itemColor">{item.color}</li>
                  </div>
                  <div id="right">
                    <li id="itemSize">{item.size}</li>
                    <form>
                      <label for="quantity"></label>
                      <input type="text" id="quantity" name="quantity"/>
                    </form>
                    <li id="itemPrice">{item.price}</li>
                  </div>
                <div>
                  {/* <Dropdown options={options} onChange{this._onSelect} value={defaultSize} placeholder='Select an option' /> */}
                </div>
              </div>
              )
            })
          }
        </ul>
        <div id="bottomDiv">
          <div id="bottomLeft">
            <p>Need help or have questions?</p>
            <p>Call Customer Service at</p>
            <p>1-800-555-555</p>
            <a>Chat with one of our stylist</a>
            <a>See return or exchange policy</a>
          </div>
          <div>
            <p>SUB TOTAL</p>
            <p>PROMOTION CODE AJ10 APPLIED</p>
            <p>ESTIMATED SHIPPING*</p>
            <p>You qualify for free shipping because your order is over $50</p>
            <p>ESTIMATED TOTAL</p>
            <p>Tax will be applied during checkout</p>
            <a>CONTINUE SHOPPING</a><button>CHECKOUT</button>
            <p>Secure checkout. Shopping is always safe & secure</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
