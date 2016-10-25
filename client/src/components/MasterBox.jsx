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
    console.log('this is add')
    itemManager.reduceStock(item);
    shoppingCartManager.addItem(item);
    this.setState({itemManager: itemManager});
    this.setState({shoppingCartManager: shoppingCartManager})
  },
  removeItemFromCart: function(item){
    console.log('this is remove')
    itemManager.addStock(item);
    shoppingCartManager.removeItem(item);
    this.setState({itemManager: itemManager});
    this.setState({shoppingCartManager: shoppingCartManager})
  },
  viewCart: function(){

  },
  applyDiscount: function(){

  },
  checkStock: function(){

  },
  checkValidVoucher: function(){

  },
  render: function(){
    return (
      <div>
        <HeaderBox shoppingCart={this.state.shoppingCart} removeItemFromCart={this.removeItemFromCart}/>
        <ItemList items={this.state.items} addItemToCart={this.addItemToCart}/>
        <NavMenu items={this.state.items}/>
      </div>
    )
  }
});

module.exports = MasterBox;