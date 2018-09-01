import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import Rectangle from 'react-rectangle';
import './App.css';
import 'react-dropdown/style.css';
const options = ['small', 'medium', 'large', 'extra large'];
const colors = ['red', 'pink', 'blue']
const defaultSize = options[0];

class App extends Component {
  state = {
    header: "YOUR SHOPPING CART",
    subHeader: "If the cart is completely empty, then we shall again add back the products for you.",
    edit: "EDIT",
    remove: "X REMOVE",
    save: "SAVE FOR LATER",
    items: [{
      id: 1,
      image: './images/red-logo-shirt.jpg',
      itemName: "COTTON TSHIRT",
      style: "MS13KT1906",
      color: colors[2],
      size: "S",
      quantity: 1,
      price: "$11.00",
      salePrice: ""
    },
    {
      id: 2,
      image: './images/pink-shirt.jpg',
      itemName: "PRINT GIRL'S TEE",
      style: "Style #: MS13KT1907",
      color: colors[1],
      size: "S",
      quantity: 1,
      price: "$17.00",
      salePrice: ""
    },
    {
      id: 3,
      image: './images/blue-palm-shirt.jpg',
      itemName: "FLOWER PATTERN SHIRT",
      style: "Style #: MS13KT1908",
      color: colors[2],
      size: "S",
      quantity: 1,
      price: "$21.00",
      salePrice: "$9.00",
    },
    {
      id: 4,
      image: './images/plaid-button-shirt.jpg',
      itemName: "CHECK PATTERN TSHIRT",
      style: "Style #: MS13KT1909",
      color: colors[0],
      size: "M",
      quantity: 1,
      price: "$22.00",
      salePrice: ""
    }]
  };

  render() {
    return (
      <div className="app">
        <div id="allInfo">
        <header id="header">
          <h1 className="header">{this.state.header}</h1>
          <h5 className="subHeader">{this.state.subHeader}</h5>
            <ul id="itemsTableHeader">
              <li>{this.state.items.length} ITEMS</li>
              <li id="itemsTableHeaderSize">SIZE</li>
              <li id="itemsTableHeaderQty">QTY</li>
              <li id="itemsTableHeaderPrice">PRICE</li>
            </ul>
        </header>
        <div className="container">
          {
            this.state.items.map(item => {
              return (

                  <div className="container row" id="itemsDiv" key={item.id}>

                    <div className="col-">
                      <img src={item.image} alt="product"/>
                    </div>

                    <div className="col-sm" id="item-info-main">
                      <li id="itemName">{item.itemName}</li>
                      <br className="break"/>

                      <div id="itemStyle">
                        <li id="itemStyle">Style #: {item.style}</li>
                        <br/>
                        <li id="color">Color: </li> <li id="itemColor">{item.color}</li>
                      </div>

                      <br/>
                      <div id="edit-x-save">
                        <button type="button" className="btn btn-primary edit" data-toggle="modal" data-target="#exampleModalCenter">
                          EDIT
                        </button>
                        <li className="itemMods">X REMOVE</li>
                        <li className="itemMods">SAVE FOR LATER</li>
                      </div>

                      <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                          <div className="modal-content">
                            <div className="modal-body">

                              <div className="modal-left col-md">
                                <div id="modal-div">
                                  <li className="modal-left" id="modal-itemName">{item.itemName}</li>
                                    <div id="modal-price-div">
                                      <li className="modal-left" id="modal-item-price">{item.price || item.salePrice}</li>
                                    </div>
                                    <div id="modal-style-div">
                                      <li className="modal-left" id="modal-item-style">{item.style}</li>
                                    </div>

                                  <div className="modal-left" id="modal-color-options">
                                    <div id="modal-color-green" className="modal-color" style={{display: 'inline-block', background: '#add0a5', width: '1.8vw', height: '1vh' }}>
                                      <Rectangle aspectRatio={[5, 3]}>
                                        <div style={{ background: '#add0a5', width: '100%', height: '100%' }} />
                                      </Rectangle>
                                    </div>
                                    <div id="modal-color-yellow" className="modal-color" style={{ display: 'inline-block', background: '#f9f8e7', width: '1.8vw', height: '1vh' }}>
                                      <Rectangle aspectRatio={[5, 3]}>
                                        <div style={{ background: '#f9f8e7', width: '100%', height: '100%' }} />
                                      </Rectangle>
                                    </div>
                                    <div id="modal-color-blue" className="modal-color" style={{ display: 'inline-block', background: '#2f69b7', width: '1.8vw', height: '1vh' }}>
                                      <Rectangle aspectRatio={[5, 3]}>
                                        <div style={{ background: '#2f69b7', width: '100%', height: '100%' }} />
                                      </Rectangle>
                                    </div>
                                  </div>
                                  <div id="modal-color-choice">
                                    <li className="modal-left" id="modal-item-selected-color">Color: {item.color}</li>
                                  </div>
                                  <div id="modal-size-selection">
                                    <li className="modal-left" id="modal-item-size">
                                      <select>
                                        <option selected value="small">small</option>
                                        <option value="medium">medium</option>
                                        <option value="large">large</option>
                                        <option value="extra large">extra large</option>
                                      </select>
                                    </li>
                                    <li className="modal-left" id="modal-item-qty">
                                      <form id="modal-form">
                                        <label htmlFor="quantity"></label>
                                        <input type="number" id="modal-quantity" name="quantity" min="1" max="99" step="1" value="1"/>
                                      </form>
                                    </li>
                                  </div>
                                  <div id="modal-edit-button">
                                    <button type="button" className="btn btn-primary modal-left" id="modal-edit">EDIT</button>
                                  </div>
                                  <div id="modal-item-details-link">
                                    <li className="modal-left" id="modal-item-product-details">Check product details</li>
                                  </div>
                                </div>
                              </div>

                              <div className="modal-right col-md">
                                <button type="button" className="btn btn-secondary" id="modal-close" data-dismiss="modal">ｘ</button>
                                <img className="modal-right" id="modal-item-image" src={item.image} alt="product"/>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div id="size-qty-price">
                      <div className="col-">
                        <li id="itemSize">{item.size}</li>
                      </div>
                      <div className="col-">
                        <form id="form">
                          <label htmlFor="quantity"></label>
                          <input type="number" id="quantity" name="quantity" min="1" max="99" step="1" value="1"/>
                        </form>
                      </div>
                      <div className="col-" id="itemPrice">
                        <li id="itemPrice">{item.price}</li>
                      </div>
                      </div>
                    </div>


              )
            })
          }
        </div>
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
    </div>
    );
  }
}

export default App;
