var React = require('react');

// Importing sub components
var HeaderBox = require('./HeaderBox.jsx');
var ItemList = require('./ItemList.jsx');
var NavMenu = require('./NavMenu.jsx');

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
  componentDidMount: function(){
    // Retrieving item information from json
    var url = '/api/items';
    api.httpRequest(url, this.set);
  },
  addItemToCart: function(item){
    itemManager.reduceStock(item);
    shoppingCartManager.addItem(item);

    // DYI
    shoppingCartManager.calculateTotalPrice();
    this.setState({totalPrice: shoppingCartManager.totalPrice})
    this.setState({itemManager: itemManager});
    this.setState({shoppingCartManager: shoppingCartManager})
  },
  removeItemFromCart: function(item){
    itemManager.addStock(item);
    shoppingCartManager.removeItem(item);
    // DYI
    shoppingCartManage.calculateTotalPrice();
    this.setState({itemManager: itemManager});
    this.setState({shoppingCartManager: shoppingCartManager})
  },
  openCart: function(event){
    shoppingCartManager.openCart(event);
  },
  checkStock: function(){

  },
  checkVoucher: function(voucher){
    shoppingCartManager.checkVoucher(voucher);
    this.setState({totalPrice: shoppingCartManager.totalPrice})
  },
  render: function(){
    return (
      <div>
        <HeaderBox shoppingCart={this.state.shoppingCart} removeItemFromCart={this.removeItemFromCart} totalPrice={this.state.totalPrice} checkVoucher={this.checkVoucher} openCart={this.openCart}/>
        <div className="container">
          <ItemList items={this.state.items} addItemToCart={this.addItemToCart}/>
          <NavMenu items={this.state.items}/>
        </div>
      </div>
    )
  }
});

module.exports = MasterBox;