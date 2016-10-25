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
      items: [],
      shoppingCart: []
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
  },
  displayCart: function(){

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
        <HeaderBox />
        <ItemList items={this.state.items} addItemToCart={this.addItemToCart}/>
        <NavMenu items={this.state.items}/>
      </div>
    )
  }
});

module.exports = MasterBox;