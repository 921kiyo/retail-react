// model and view should not talk each other
var ItemManager = require('../models/itemManager');
var ShoppingCart = require('../models/shoppingCart');
var itemManager = new ItemManager();
var shoppingCart = new ShoppingCart();
var $ = require("jquery");
var ko = require('knockout');
var DisplayItems = function(){};

DisplayItems.prototype = {
  createItemDOM: function(item){
   var ul = document.getElementById('item-ul');
   var li = document.createElement('li');
   // creating p is DYI
   var img = document.createElement('img');
   var pName = document.createElement('p');
   var pPrice = document.createElement('p');
   var pStock = document.createElement('p');
   var pColor = document.createElement('p');
   img.setAttribute('src', item.imgUrl);
   img.setAttribute('class', 'item-image');
   img.setAttribute('id', item.id);

   pName.innerText = item.name;
   pPrice.innerText = item.price;
   pStock.innerText = item.stock;
   pColor.innerText = item.color;
   // DYI
   li.appendChild(img);
   li.appendChild(pName);
   li.appendChild(pPrice);
   li.appendChild(pStock);
   li.appendChild(pColor);
   // Add button
   var button = document.createElement('button');
   button.setAttribute('class', 'add-button');
   button.value = item.id;
   button.setAttribute('id', item.id);
   button.setAttribute('data-bind', 'click: add')
   var self = item;
   // button.onclick = function(self){
   //  console.log('item', self);
   //  shoppingCart.addItem(self);
   //  itemManager.decreaseStock(self);
   // };
   console.log('button id',button.value);
   button.innerText = 'Add'
   li.appendChild(button);
   ul.appendChild(li);
 },
 handleItem: function(){
  shoppingCart.addItem(this.value);
  itemManager.decreaseStock(this.value);
  }
}

module.exports = DisplayItems;