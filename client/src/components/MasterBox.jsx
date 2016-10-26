var React = require('react');

// Importing sub components
var HeaderBox = require('./HeaderBox.jsx');
var ItemList = require('./ItemList.jsx');
var CartBox = require('./CartBox.jsx');

// Importing models
var Api = require('../models/api.js');
var ItemManager = require('../models/itemManager.js');
var ShoppingCartManager = require('../models/shoppingCartManager.js');
var api = new Api();
var itemManager = new ItemManager();
var shoppingCartManager = new ShoppingCartManager();

var MasterBox = React.createClass({
  getInitialState:function(){
    return {
      itemManager: itemManager,
      shoppingCartManager: shoppingCartManager,
      items: [],
      totalPrice: shoppingCartManager.totalPrice,
      shoppingCart: shoppingCartManager.cart
    }
  },
  set: function(data){
    this.setState({items: data})
    return
  },
  // Retrieving item information from json
  componentDidMount: function(){
    var url = '/api/items';
    var response = api.httpRequest(url, this.set);
  },
  addItemToCart: function(item){
    itemManager.reduceStock(item);
    shoppingCartManager.addItem(item);
    this.updateInfo()
  },
  removeItemFromCart: function(item){
    itemManager.addStock(item);
    shoppingCartManager.removeItem(item);
    this.updateInfo();
  },
  // Updating view info once added or removed an item
  updateInfo: function(){
    shoppingCartManager.calculateTotalPrice();
    this.setState({totalPrice: shoppingCartManager.totalPrice.toFixed(2)});
    this.setState({itemManager: itemManager});
    this.setState({shoppingCartManager: shoppingCartManager});
  },
  checkVoucher: function(voucher){
    shoppingCartManager.checkVoucher(voucher);
    this.setState({totalPrice: shoppingCartManager.totalPrice})
  },
  render: function(){
    return (
      <div>
        <HeaderBox openCart={this.openCart} /><hr id="header-hr"/>
        <div className="container">
          <ItemList items={this.state.items} addItemToCart={this.addItemToCart}/>
          <CartBox shoppingCart={this.state.shoppingCart} removeItemFromCart={this.removeItemFromCart} totalPrice={this.state.totalPrice} checkVoucher={this.checkVoucher} />
        </div>
      </div>
    )
  }
});

module.exports = MasterBox;